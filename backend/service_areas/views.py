from rest_framework.generics import ListAPIView
from rest_framework.permissions import AllowAny

from .models import ServiceArea
from .serializers import ServiceAreaSerializer


class ServiceAreaListView(ListAPIView):
    serializer_class = ServiceAreaSerializer
    permission_classes = [AllowAny]
    pagination_class = None
    queryset = ServiceArea.objects.filter(is_active=True)
