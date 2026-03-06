from django.contrib import admin
from django.utils.html import format_html

from .models import GalleryPhoto


@admin.register(GalleryPhoto)
class GalleryPhotoAdmin(admin.ModelAdmin):
    list_display = [
        "thumbnail",
        "title",
        "project_type",
        "service_area",
        "is_active",
        "display_order",
        "created_at",
    ]
    list_display_links = ["thumbnail", "title"]
    list_editable = ["is_active", "display_order"]
    list_filter = ["is_active", "service_area", "project_type"]
    search_fields = ["title", "description"]
    fieldsets = [
        (None, {"fields": ["title", "image", "description"]}),
        ("Categorisation", {"fields": ["project_type", "service_area"]}),
        ("Visibility", {"fields": ["is_active", "display_order"]}),
    ]

    @admin.display(description="Preview")
    def thumbnail(self, obj):
        if obj.image:
            return format_html(
                '<img src="{}" style="height:48px;width:64px;object-fit:cover;border-radius:4px;" />',
                obj.image.url,
            )
        return "—"
