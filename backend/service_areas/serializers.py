from rest_framework import serializers

from .models import ServiceArea


class ServiceAreaSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceArea
        fields = [
            "slug",
            "city",
            "state",
            "state_code",
            "phone",
            "phone_href",
            "lat",
            "lng",
            "is_primary",
        ]
