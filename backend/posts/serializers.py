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
    cover_image = serializers.SerializerMethodField()

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
        )


    def get_cover_image(self, obj):
        if obj.cover_image:
            return obj.cover_image.url
        return None
