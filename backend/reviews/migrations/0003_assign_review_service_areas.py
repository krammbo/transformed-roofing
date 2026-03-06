from django.db import migrations


def assign_service_areas(apps, schema_editor):
    Review = apps.get_model("reviews", "Review")
    ServiceArea = apps.get_model("service_areas", "ServiceArea")

    try:
        columbus = ServiceArea.objects.get(slug="columbus-ohio")
        statesville = ServiceArea.objects.get(slug="statesville-nc")
    except ServiceArea.DoesNotExist:
        return  # seed data not present, skip

    for review in Review.objects.all():
        label = review.location_label or ""
        if "NC" in label or "Statesville" in label or "Mooresville" in label:
            review.service_area = statesville
        else:
            review.service_area = columbus
        review.save()


def unassign_service_areas(apps, schema_editor):
    Review = apps.get_model("reviews", "Review")
    Review.objects.all().update(service_area=None)


class Migration(migrations.Migration):

    dependencies = [
        ("reviews", "0002_review_service_area"),
        ("service_areas", "0002_seed_initial_areas"),
    ]

    operations = [
        migrations.RunPython(assign_service_areas, reverse_code=unassign_service_areas),
    ]
