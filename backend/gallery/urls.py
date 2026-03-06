from django.urls import path

from .views import GalleryPhotoListView

urlpatterns = [
    path("", GalleryPhotoListView.as_view(), name="gallery-list"),
]
