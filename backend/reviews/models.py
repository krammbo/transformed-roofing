from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models
from service_areas.models import ServiceArea

SOURCE_CHOICES = [
    ("google", "Google"),
    ("yelp", "Yelp"),
    ("homeadvisor", "HomeAdvisor"),
    ("angi", "Angi"),
    ("direct", "Direct"),
    ("other", "Other"),
]


class Review(models.Model):
    reviewer_name = models.CharField(max_length=100)
    location_label = models.CharField(max_length=100)
    body = models.TextField()
    rating = models.PositiveSmallIntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    source = models.CharField(max_length=20, choices=SOURCE_CHOICES, default="google")
    source_url = models.URLField(blank=True)
    project_type = models.CharField(max_length=100, blank=True)
    service_area = models.ForeignKey(
        ServiceArea,
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name="reviews",
    )
    is_featured = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    display_order = models.PositiveSmallIntegerField(default=0)
    review_date = models.DateField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["display_order", "-review_date"]

    def __str__(self):
        return f"{self.reviewer_name} — {self.rating}★"
