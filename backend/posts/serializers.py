from rest_framework import serializers
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

class PostDetailSerializer(serializers.ModelSerializer):
    author = serializers.StringRelatedField()
    category = serializers.StringRelatedField()

    class Meta:
        model = Post
        fields = (
            "id",
            "author",
            "category",
            "title",
            "slug",
            "body",
            "cover_image",
            "published_at",
        )

