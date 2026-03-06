from rest_framework.generics import ListAPIView
from rest_framework.permissions import AllowAny

from .models import Review
from .serializers import ReviewSerializer


class ReviewListView(ListAPIView):
    serializer_class = ReviewSerializer
    permission_classes = [AllowAny]
    pagination_class = None

    def get_queryset(self):
        qs = Review.objects.filter(is_active=True, is_featured=True)

        state_code = self.request.query_params.get("state")
        if state_code:
            qs = qs.filter(service_area__state_code__iexact=state_code)

        try:
            limit = min(int(self.request.query_params.get("limit", 3)), 20)
        except (ValueError, TypeError):
            limit = 3

        return qs[:limit]
