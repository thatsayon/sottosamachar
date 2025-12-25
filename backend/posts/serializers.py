from rest_framework import serializers

from account.serializers import (
    AuthorInfoSerializer
)

from .models import (
    Post,
)

class PostListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = (
            'id',
            'slug',
            'title',
            'author',
        )

'''
this serializer used for the PostDetailSerializer 
to get the next and previous article
'''
class PostNavSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = (
            "id",
            "title",
            "slug",
            "published_at",
        )


class PostDetailSerializer(serializers.ModelSerializer):
    author = serializers.StringRelatedField()
    category = serializers.StringRelatedField()
    cover_image = serializers.SerializerMethodField()
    author = AuthorInfoSerializer()

    previous_article = serializers.SerializerMethodField()
    next_article = serializers.SerializerMethodField()

    class Meta:
        model = Post
        fields = (
            "id",
            "author",
            "category",
            "title",
            "subtitle",
            "slug",
            "body",
            "cover_image",
            "tags",
            "published_at",
            "reading_time",
            "author",
            "previous_article",
            "next_article",
        )


    def get_cover_image(self, obj):
        if obj.cover_image:
            return obj.cover_image.url
        return None

    def get_previous_article(self, obj):
        previous_post = (
            Post.objects
            .filter(
                status=Post.Status.PUBLISHED,
                is_deleted=False,
                published_at__lt=obj.published_at,
            )
            .order_by("-published_at")
            .first()
        )

        return (
            PostNavSerializer(previous_post).data
            if previous_post else None
        )

    def get_next_article(self, obj):
        next_post = (
            Post.objects
            .filter(
                status=Post.Status.PUBLISHED,
                is_deleted=False,
                published_at__gt=obj.published_at,
            )
            .order_by("published_at")
            .first()
        )

        return (
            PostNavSerializer(next_post).data
            if next_post else None
        )
