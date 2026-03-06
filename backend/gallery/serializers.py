from rest_framework import serializers

from .models import GalleryPhoto


class GalleryPhotoSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()
    service_area_slug = serializers.CharField(
        source="service_area.slug", read_only=True, allow_null=True
    )

    class Meta:
        model = GalleryPhoto
        fields = [
            "id",
            "title",
            "image_url",
            "description",
            "project_type",
            "service_area_slug",
            "display_order",
        ]

    def get_image_url(self, obj):
        request = self.context.get("request")
        if obj.image and request:
            return request.build_absolute_uri(obj.image.url)
        return None
