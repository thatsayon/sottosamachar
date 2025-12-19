import uuid
import math

from django.db import models
from django.utils import timezone
from django.utils.text import slugify
from django.contrib.auth import get_user_model

from django_ckeditor_5.fields import CKEditor5Field

User = get_user_model()

class Category(models.Model):
    """
    Categories for grouping posts.
    Example: Technology, Business, Sports, Politics
    """

    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False
    )

    name = models.CharField(
        max_length=100,
        unique=True
    )

    slug = models.SlugField(
        max_length=120,
        unique=True,
        db_index=True,
        blank=True
    )

    description = models.TextField(blank=True)

    is_active = models.BooleanField(
        default=True,
        help_text="Disable category without deleting posts"
    )

    order = models.PositiveIntegerField(
        default=0,
        help_text="Controls display order"
    )

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["order", "name"]
        indexes = [
            models.Index(fields=["slug"]),
            models.Index(fields=["is_active"]),
        ]

    def __str__(self) -> str:
        return self.name

    def _generate_unique_slug(self) -> str:
        base_slug = slugify(self.name) or str(uuid.uuid4())[:8]
        slug = base_slug
        counter = 1

        while Category.objects.filter(slug=slug).exclude(pk=self.pk).exists():
            slug = f"{base_slug}-{counter}"
            counter += 1

        return slug

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = self._generate_unique_slug()
        super().save(*args, **kwargs)



class Post(models.Model):
    """
    Production-grade Post model for a serious blog / news site
    """

    # --------------------
    # Identity
    # --------------------
    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False
    )

    # --------------------
    # Relations
    # --------------------
    author = models.ForeignKey(
        User,
        on_delete=models.PROTECT,
        related_name="posts"
    )

    category = models.ForeignKey(
        Category,
        on_delete=models.PROTECT,
        related_name="posts",
        help_text="Each post must belong to one category"
    )

    # --------------------
    # Content
    # --------------------
    title = models.CharField(max_length=255)

    slug = models.SlugField(
        max_length=255,
        unique=True,
        db_index=True,
        blank=True
    )

    excerpt = models.TextField(blank=True)

    body = CKEditor5Field(
        "Content",
        config_name="extends"
    )

    cover_image = models.ImageField(
        upload_to="posts/covers/",
        null=True,
        blank=True
    )

    # --------------------
    # Publishing
    # --------------------
    class Status(models.TextChoices):
        DRAFT = "draft", "Draft"
        PUBLISHED = "published", "Published"
        ARCHIVED = "archived", "Archived"

    status = models.CharField(
        max_length=20,
        choices=Status.choices,
        default=Status.DRAFT,
        db_index=True
    )

    published_at = models.DateTimeField(
        null=True,
        blank=True,
        db_index=True
    )

    # --------------------
    # SEO
    # --------------------
    seo_title = models.CharField(max_length=255, blank=True)
    seo_description = models.TextField(blank=True)

    # --------------------
    # Metrics
    # --------------------
    views_count = models.PositiveIntegerField(default=0)
    reading_time = models.PositiveIntegerField(
        default=0,
        help_text="Estimated reading time in minutes"
    )

    # --------------------
    # Soft delete
    # --------------------
    is_deleted = models.BooleanField(default=False)

    # --------------------
    # Timestamps
    # --------------------
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-published_at", "-created_at"]
        indexes = [
            models.Index(fields=["slug"]),
            models.Index(fields=["status", "published_at"]),
            models.Index(fields=["category", "status"]),
        ]

    def __str__(self) -> str:
        return self.title

    # --------------------
    # Helpers
    # --------------------
    def _generate_unique_slug(self) -> str:
        base_slug = slugify(self.title) or str(uuid.uuid4())[:8]
        slug = base_slug
        counter = 1

        while Post.objects.filter(slug=slug).exclude(pk=self.pk).exists():
            slug = f"{base_slug}-{counter}"
            counter += 1

        return slug

    def calculate_reading_time(self) -> int:
        if not self.body:
            return 0
        words = len(self.body.split())
        return max(1, math.ceil(words / 200))

    def save(self, *args, **kwargs):
        creating = self._state.adding

        # Slug: auto-generate ONLY if not provided
        if creating and not self.slug:
            self.slug = self._generate_unique_slug()

        # Publish timestamp
        if self.status == self.Status.PUBLISHED and not self.published_at:
            self.published_at = timezone.now()

        # Reading time
        self.reading_time = self.calculate_reading_time()

        super().save(*args, **kwargs)

