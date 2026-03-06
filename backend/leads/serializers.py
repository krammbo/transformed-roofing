from rest_framework import serializers

from .models import Lead


class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = ["name", "phone", "email", "street", "city", "state", "zip", "message", "source"]
        extra_kwargs = {
            "email": {"required": False, "allow_blank": True},
            "message": {"required": False, "allow_blank": True},
            "source": {"required": False},
        }
