from django.db import models


class ServiceArea(models.Model):
    slug = models.SlugField(unique=True)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    state_code = models.CharField(max_length=10)
    phone = models.CharField(max_length=20)
    phone_href = models.CharField(max_length=50)
    lat = models.DecimalField(max_digits=9, decimal_places=6)
    lng = models.DecimalField(max_digits=10, decimal_places=6)
    is_primary = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    heading = models.CharField(max_length=200, blank=True)
    description = models.TextField(blank=True)

    class Meta:
        ordering = ["-is_primary", "city"]

    def __str__(self):
        return f"{self.city}, {self.state_code}"
