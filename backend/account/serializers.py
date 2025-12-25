from rest_framework import serializers
from django.contrib.auth import get_user_model

from posts.models import Post

User = get_user_model()


class AuthorInfoSerializer(serializers.ModelSerializer):
    position = serializers.CharField(source="author_profile.position")
    bio = serializers.CharField(source="author_profile.bio")
    twitter = serializers.URLField(source="author_profile.twitter")
    instagram = serializers.URLField(source="author_profile.instagram")
    linkedin = serializers.URLField(source="author_profile.linkedin")

    article_count = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = (
            "id",
            "first_name",
            "last_name",
            "username",
            "email",
            "profile_pic",
            "position",
            "bio",
            "twitter",
            "instagram",
            "linkedin",
            "article_count",
        )
        read_only_fields = fields  

    def get_article_count(self, obj):
        return Post.objects.filter(
            author=obj,
            status=Post.Status.PUBLISHED,
            is_deleted=False,
        ).count()

