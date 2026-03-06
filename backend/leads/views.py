from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .emails import send_lead_notification
from .models import Lead
from .serializers import LeadSerializer


class LeadCreateView(APIView):
    def post(self, request):
        serializer = LeadSerializer(data=request.data)
        if serializer.is_valid():
            lead = serializer.save()
            send_lead_notification(lead)
            return Response({"success": True}, status=status.HTTP_201_CREATED)
        return Response({"success": False, "errors": serializer.errors}, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
