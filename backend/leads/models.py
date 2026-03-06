from django.db import models

SOURCE_CHOICES = [
    ("contact_form", "Contact Form"),
    ("web_quote_tool", "Web Quote Tool"),
]


class Lead(models.Model):
    # Contact info
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=30)
    email = models.EmailField(blank=True)

    # Property address (split fields)
    street = models.CharField(max_length=200)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=2)
    zip = models.CharField(max_length=10)

    # Optional message
    message = models.TextField(blank=True)

    # Meta
    source = models.CharField(max_length=20, choices=SOURCE_CHOICES, default="contact_form")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.name} — {self.city}, {self.state} ({self.created_at:%Y-%m-%d})"


class NotificationEmail(models.Model):
    email = models.EmailField(unique=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["email"]

    def __str__(self):
        return self.email
