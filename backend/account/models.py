from django.db import models
from django.contrib.auth import get_user_model

from core.db.models import BaseModel

from .validators import (
    validate_twitter_url,
    validate_instagram_url,
    validate_linkedin_url,
)

User = get_user_model()


class AuthorAccount(BaseModel):
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        related_name="author_profile"
    )

    display_name = models.CharField(
        max_length=120
    )

    position = models.CharField(
        max_length=120,
        blank=True
    )

    bio = models.TextField(
        blank=True
    )

    twitter = models.URLField(
        blank=True,
        validators=[validate_twitter_url]
    )

    instagram = models.URLField(
        blank=True,
        validators=[validate_instagram_url]
    )

    linkedin = models.URLField(
        blank=True,
        validators=[validate_linkedin_url]
    ) 

    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ["display_name"]
        indexes = [
            models.Index(fields=["display_name"]),
        ]

    def __str__(self):
        return self.display_name

