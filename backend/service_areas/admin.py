from django.contrib import admin

from .models import ServiceArea


@admin.register(ServiceArea)
class ServiceAreaAdmin(admin.ModelAdmin):
    list_display = ["city", "state_code", "phone", "is_primary", "is_active"]
    list_editable = ["is_primary", "is_active"]
    list_display_links = ["city"]
    prepopulated_fields = {"slug": ("city",)}
    fieldsets = [
        (None, {"fields": ["slug", "city", "state", "state_code", "is_primary", "is_active"]}),
        ("Contact", {"fields": ["phone", "phone_href"]}),
        ("Location", {"fields": ["lat", "lng"]}),
        ("Content", {"fields": ["heading", "description"]}),
    ]
