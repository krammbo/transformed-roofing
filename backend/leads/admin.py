from django.contrib import admin

from .models import Lead


@admin.register(Lead)
class LeadAdmin(admin.ModelAdmin):
    list_display = (
        "created_at",
        "name",
        "phone",
        "email",
        "city",
        "state",
        "source",
        "has_message",
    )
    list_filter = ("source", "state", "created_at")
    search_fields = ("name", "phone", "email", "street", "city")
    readonly_fields = ("created_at",)
    fieldsets = (
        (
            "Contact",
            {
                "fields": ("name", "phone", "email"),
            },
        ),
        (
            "Property Address",
            {
                "fields": ("street", "city", "state", "zip"),
            },
        ),
        (
            "Message",
            {
                "fields": ("message",),
            },
        ),
        (
            "Meta",
            {
                "fields": ("source", "created_at"),
            },
        ),
    )

    @admin.display(description="Message?", boolean=True)
    def has_message(self, obj):
        return bool(obj.message)
