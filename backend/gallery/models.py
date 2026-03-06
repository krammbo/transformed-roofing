from django.db import models

from service_areas.models import ServiceArea


class GalleryPhoto(models.Model):
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to="gallery/")
    description = models.TextField(blank=True)
    project_type = models.CharField(max_length=100, blank=True)
    service_area = models.ForeignKey(
        ServiceArea,
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name="gallery_photos",
    )
    is_active = models.BooleanField(default=True)
    display_order = models.PositiveSmallIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["display_order", "-created_at"]

    def __str__(self):
        return self.title
