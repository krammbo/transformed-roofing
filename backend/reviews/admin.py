from django.contrib import admin

from .models import Review


@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = (
        "reviewer_name",
        "location_label",
        "service_area",
        "rating_stars",
        "source",
        "project_type",
        "is_featured",
        "is_active",
        "display_order",
        "review_date",
    )
    list_filter = ("is_active", "is_featured", "source", "rating", "service_area")
    search_fields = ("reviewer_name", "location_label", "body")
    list_editable = ("is_active", "is_featured", "display_order")
    fieldsets = (
        (
            "Review Content",
            {
                "fields": ("reviewer_name", "location_label", "body", "rating"),
            },
        ),
        (
            "Source Attribution",
            {
                "fields": ("source", "source_url"),
            },
        ),
        (
            "Optional Enrichment",
            {
                "classes": ("collapse",),
                "fields": ("project_type", "review_date"),
            },
        ),
        (
            "Curation & Visibility",
            {
                "fields": ("service_area", "is_featured", "is_active", "display_order"),
            },
        ),
    )

    @admin.display(description="Rating")
    def rating_stars(self, obj):
        return "★" * obj.rating + "☆" * (5 - obj.rating)
