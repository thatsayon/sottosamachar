from django.core.exceptions import ValidationError
from urllib.parse import urlparse


def _validate_allowed_domains(value, allowed_domains, platform_name):
    if not value:
        return

    domain = urlparse(value).netloc.lower()

    if not any(domain.endswith(d) for d in allowed_domains):
        raise ValidationError(
            f"Enter a valid {platform_name} profile URL."
        )


def validate_twitter_url(value):
    _validate_allowed_domains(
        value,
        ["twitter.com", "x.com"],
        "Twitter / X"
    )


def validate_instagram_url(value):
    _validate_allowed_domains(
        value,
        ["instagram.com"],
        "Instagram"
    )


def validate_linkedin_url(value):
    _validate_allowed_domains(
        value,
        ["linkedin.com"],
        "LinkedIn"
    )

