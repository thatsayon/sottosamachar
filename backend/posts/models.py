from django.db import models
from django.utils import timezone
from django.utils.text import slugify
from django.contrib.auth import get_user_model
from django_ckeditor_5.fields import CKEditor5Field
from django.contrib.postgres.fields import ArrayField

from cloudinary.models import CloudinaryField

from core.db.models import BaseModel

import uuid
import math

User = get_user_model()


class Category(BaseModel):
    name = models.CharField(max_length=100)

    slug = models.SlugField(
        max_length=120,
        blank=True,
        allow_unicode=True
    )

    parent = models.ForeignKey(
        "self",
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name="children"
    )

    description = models.TextField(blank=True)

    is_active = models.BooleanField(default=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["order", "name"]
        constraints = [
            models.UniqueConstraint(
                fields=["parent", "slug"],
                name="unique_category_slug_per_parent"
            )
        ]

    def __str__(self):
        return self.name

    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = self.name.strip() or str(uuid.uuid4())[:8]
        super().save(*args, **kwargs)


class Post(BaseModel):
    author = models.ForeignKey(
        User,
        on_delete=models.PROTECT,
        related_name="posts"
    )
    category = models.ForeignKey(
        Category,
        on_delete=models.PROTECT,
        related_name="primary_posts"
    )
    title = models.CharField(max_length=255)
    subtitle = models.CharField(max_length=150)
    slug = models.SlugField(
        max_length=255,
        unique=True,
        blank=True,
        db_index=True,
        allow_unicode=True
    )
    body = CKEditor5Field(
        "Content",
        config_name="extends"
    )
    cover_image = CloudinaryField(
        "cover_image",
        folder="posts/covers",
        null=True,
        blank=True
    )
    tags = ArrayField(
        models.CharField(max_length=50),
        default=list,
        blank=True,
        help_text="Comma-separated tags (minimum 3)"
    )
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
    seo_title = models.CharField(max_length=255, blank=True)
    seo_description = models.TextField(blank=True)
    views_count = models.PositiveIntegerField(default=0)
    reading_time = models.PositiveIntegerField(
        default=0,
        help_text="Estimated reading time in minutes"
    )
    is_top_news = models.BooleanField(
        default=False
    )
    is_deleted = models.BooleanField(
        default=False,
        db_index=True
    )
    
    class Meta:
        ordering = ["-published_at", "-created_at"]
        indexes = [
            models.Index(fields=["slug"]),
            models.Index(fields=["status", "published_at"]),
            models.Index(fields=["category", "status"]),
            models.Index(fields=["is_deleted"]),
        ]
    
    def __str__(self):
        return self.title
    

    def _generate_unique_slug(self) -> str:
        base_slug = slugify(self.title, allow_unicode=False)

        # Fallback if title is empty or slugify fails
        if not base_slug:
            base_slug = "post"

        # Short random suffix (6 chars)
        random_suffix = uuid.uuid4().hex[:6]
        slug = f"{base_slug}-{random_suffix}"

        # Absolute safety check (very unlikely to loop)
        while Post.objects.filter(slug=slug).exclude(pk=self.pk).exists():
            random_suffix = uuid.uuid4().hex[:6]
            slug = f"{base_slug}-{random_suffix}"

        return slug


    def calculate_reading_time(self) -> int:
        if not self.body:
            return 0
        words = len(self.body.split())
        return max(1, math.ceil(words / 200))
    
    def save(self, *args, **kwargs):
        creating = self._state.adding
        
        if creating and not self.slug:
            self.slug = self._generate_unique_slug()
        
        if self.status == self.Status.PUBLISHED and not self.published_at:
            self.published_at = timezone.now()
        
        self.reading_time = self.calculate_reading_time()
        
        super().save(*args, **kwargs)
