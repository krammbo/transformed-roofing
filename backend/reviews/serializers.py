from rest_framework import serializers

from .models import Review


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = [
            "id",
            "reviewer_name",
            "location_label",
            "body",
            "rating",
            "source",
            "source_url",
            "project_type",
            "is_featured",
            "display_order",
            "review_date",
        ]
