from rest_framework.generics import ListAPIView
from rest_framework.permissions import AllowAny

from .models import GalleryPhoto
from .serializers import GalleryPhotoSerializer


class GalleryPhotoListView(ListAPIView):
    serializer_class = GalleryPhotoSerializer
    permission_classes = [AllowAny]
    pagination_class = None

    def get_queryset(self):
        qs = GalleryPhoto.objects.filter(is_active=True)

        area_slug = self.request.query_params.get("service_area")
        if area_slug:
            qs = qs.filter(service_area__slug=area_slug)

        try:
            limit = min(int(self.request.query_params.get("limit", 100)), 200)
        except (ValueError, TypeError):
            limit = 100

        return qs[:limit]
