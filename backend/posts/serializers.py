from rest_framework import serializers

from datetime import timedelta
from django.utils import timezone

from collections import Counter

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


class TopNewsInlineSerializer(serializers.ModelSerializer):
    category = serializers.StringRelatedField()

    class Meta:
        model = Post
        fields = (
            "id",
            "title",
            "slug",
            "category",
            "published_at",
        )


class PopularPostSerializer(serializers.ModelSerializer):
    category = serializers.StringRelatedField()

    class Meta:
        model = Post
        fields = (
            "title",
            "category",
        )


class LatestNewsSerializer(serializers.ModelSerializer):
    category = serializers.StringRelatedField()
    cover_image = serializers.SerializerMethodField()

    class Meta:
        model = Post
        fields = (
            "title",
            "category",
            "cover_image",
            "reading_time",
        )

    def get_cover_image(self, obj):
        return obj.cover_image.url if obj.cover_image else None


class PostDetailSerializer(serializers.ModelSerializer):
    author = serializers.StringRelatedField()
    category = serializers.StringRelatedField()
    cover_image = serializers.SerializerMethodField()
    author = AuthorInfoSerializer()

    previous_article = serializers.SerializerMethodField()
    next_article = serializers.SerializerMethodField()

    top_news = serializers.SerializerMethodField()
    popular_posts = serializers.SerializerMethodField()
    latest_news = serializers.SerializerMethodField()
    related_news = serializers.SerializerMethodField()
    trending_topics = serializers.SerializerMethodField()

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
            "top_news",
            "popular_posts",
            "latest_news",
            "related_news",
            "trending_topics",
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

    def get_top_news(self, obj):
        qs = (
            Post.objects
            .filter(
                is_top_news=True,
                status=Post.Status.PUBLISHED,
                is_deleted=False,
            )
            .exclude(id=obj.id)
            .order_by("-published_at")[:3]
        )

        return TopNewsInlineSerializer(qs, many=True).data


    def get_popular_posts(self, obj):
        limit = 5
        days = 3

        now = timezone.now()
        start_date = now - timedelta(days=days)

        base_qs = Post.objects.filter(
            status=Post.Status.PUBLISHED,
            is_deleted=False,
        )

        # Step 1: Recent popular posts
        recent_posts = list(
            base_qs
            .filter(published_at__gte=start_date)
            .order_by("-views_count")[:limit]
        )

        # Step 2: Fallback if fewer than required
        if len(recent_posts) < limit:
            remaining = limit - len(recent_posts)

            fallback_posts = (
                base_qs
                .exclude(id__in=[p.id for p in recent_posts])
                .order_by("-views_count")[:remaining]
            )

            recent_posts.extend(fallback_posts)

        return PopularPostSerializer(recent_posts, many=True).data


    def get_latest_news(self, obj):
        qs = (
            Post.objects
            .filter(
                status=Post.Status.PUBLISHED,
                is_deleted=False,
            )
            .exclude(id=obj.id)
            .order_by("-published_at")[:3]
        )

        return LatestNewsSerializer(qs, many=True).data

    
    def get_related_news(self, obj):
        latest_ids = list(
            Post.objects
            .filter(
                status=Post.Status.PUBLISHED,
                is_deleted=False,
            )
            .exclude(pk=obj.pk)
            .order_by("-published_at")
            .values_list("id", flat=True)[:3]
        )

        exclude_ids = [obj.pk, *latest_ids]

        # Step 2: Fetch related posts
        qs = (
            Post.objects
            .filter(
                category=obj.category,
                status=Post.Status.PUBLISHED,
                is_deleted=False,
            )
            .exclude(id__in=exclude_ids)
            .order_by("-published_at")[:3]
        )

        return LatestNewsSerializer(qs, many=True).data

    
    def get_trending_topics(self, obj):
        limit = 8
        since = timezone.now() - timedelta(days=7)

        posts = (
            Post.objects
            .filter(
                status=Post.Status.PUBLISHED,
                is_deleted=False,
                published_at__gte=since,
            )
            .values_list("tags", "views_count")
        )

        counter = Counter()

        for tags, views in posts:
            for tag in tags:
                counter[tag.lower()] += max(1, views // 10)

        return [f"#{tag}" for tag, _ in counter.most_common(limit)]
