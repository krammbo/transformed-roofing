from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="ServiceArea",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("slug", models.SlugField(unique=True)),
                ("city", models.CharField(max_length=100)),
                ("state", models.CharField(max_length=100)),
                ("state_code", models.CharField(max_length=10)),
                ("phone", models.CharField(max_length=20)),
                ("phone_href", models.CharField(max_length=50)),
                ("lat", models.DecimalField(decimal_places=6, max_digits=9)),
                ("lng", models.DecimalField(decimal_places=6, max_digits=10)),
                ("is_primary", models.BooleanField(default=False)),
                ("is_active", models.BooleanField(default=True)),
                ("heading", models.CharField(blank=True, max_length=200)),
                ("description", models.TextField(blank=True)),
            ],
            options={
                "ordering": ["-is_primary", "city"],
            },
        ),
    ]
