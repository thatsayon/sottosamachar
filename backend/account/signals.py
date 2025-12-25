from django.conf import settings
from django.db.models.signals import post_save
from django.contrib.auth import get_user_model
from django.dispatch import receiver

from .models import AuthorAccount

User = get_user_model()


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_author_account(sender, instance, created, **kwargs):
    if created:
        AuthorAccount.objects.create(
            user=instance,
            display_name=instance.get_full_name() or instance.username
        )

