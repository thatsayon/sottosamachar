from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, generics, permissions

from django.views.decorators.cache import cache_page
from django.utils.decorators import method_decorator

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
            .select_related("author", "category")
            .only(
                "id",
                "title",
                "slug",
                "body",
                "cover_image",
                "published_at",
                "author__id",
                "author__username",
                "category__id",
                "category__name",
            )
        )
