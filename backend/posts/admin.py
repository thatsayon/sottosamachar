from django.contrib import admin
from .models import (
    Category,
    Post,
)

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    readonly_fields = ("slug",)

admin.site.register(Post)
