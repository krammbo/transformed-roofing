from django.urls import path

from .views import ServiceAreaListView

urlpatterns = [
    path("", ServiceAreaListView.as_view(), name="service-area-list"),
]
