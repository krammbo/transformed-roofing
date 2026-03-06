from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ("service_areas", "0002_seed_initial_areas"),
    ]

    operations = [
        migrations.CreateModel(
            name="GalleryPhoto",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("title", models.CharField(max_length=200)),
                ("image", models.ImageField(upload_to="gallery/")),
                ("description", models.TextField(blank=True)),
                ("project_type", models.CharField(blank=True, max_length=100)),
                ("service_area", models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name="gallery_photos", to="service_areas.servicearea")),
                ("is_active", models.BooleanField(default=True)),
                ("display_order", models.PositiveSmallIntegerField(default=0)),
                ("created_at", models.DateTimeField(auto_now_add=True)),
            ],
            options={
                "ordering": ["display_order", "-created_at"],
            },
        ),
    ]
