from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, generics, permissions

from django.views.decorators.cache import cache_page
from django.utils.decorators import method_decorator
from django.core.cache import cache
from django.db.models import F


from .serializers import (
    PostListSerializer,
    PostDetailSerializer,
)
from .models import (
    Post,
)

class PostListView(generics.ListAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = PostListSerializer
    queryset = Post.objects.all()


@method_decorator(cache_page(60 * 5), name="retrieve")
class PostDetailView(generics.RetrieveAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = PostDetailSerializer
    lookup_field = "slug"

    def get_queryset(self):
        return (
            Post.objects
            .filter(
                status=Post.Status.PUBLISHED,
                is_deleted=False
            )
            .select_related("author", "category")
        )

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()

        self._increment_view_count(request, instance)

        return super().retrieve(request, *args, **kwargs)

    def _increment_view_count(self, request, post):
        """
        Increment view count once per IP per post per 10 minutes.
        """
        ip = self._get_client_ip(request)
        cache_key = f"post:{post.id}:viewed:{ip}"

        if not cache.get(cache_key):
            Post.objects.filter(pk=post.pk).update(
                views_count=F("views_count") + 1
            )
            cache.set(cache_key, True, timeout=60 * 10)

    def _get_client_ip(self, request):
        x_forwarded_for = request.META.get("HTTP_X_FORWARDED_FOR")
        if x_forwarded_for:
            return x_forwarded_for.split(",")[0]
        return request.META.get("REMOTE_ADDR")
