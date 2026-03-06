from django.db import migrations


def seed_service_areas(apps, schema_editor):
    ServiceArea = apps.get_model("service_areas", "ServiceArea")
    ServiceArea.objects.bulk_create([
        ServiceArea(
            slug="columbus-ohio",
            city="Columbus",
            state="Ohio",
            state_code="OH",
            phone="(614) 555-0198",
            phone_href="tel:+16145550198",
            lat=39.961200,
            lng=-82.998800,
            is_primary=True,
            is_active=True,
            heading="Roofing Contractor in Columbus, OH",
            description=(
                "Serving Columbus and the surrounding metro area including "
                "Dublin, Westerville, Grove City, Hilliard, and Gahanna."
            ),
        ),
        ServiceArea(
            slug="statesville-nc",
            city="Statesville",
            state="North Carolina",
            state_code="NC",
            phone="(704) 555-0198",
            phone_href="tel:+17045550198",
            lat=35.782900,
            lng=-80.887300,
            is_primary=False,
            is_active=True,
            heading="Roofing Contractor in Statesville, NC",
            description=(
                "Serving Statesville and surrounding Iredell County communities "
                "including Mooresville, Troutman, and Harmony."
            ),
        ),
    ])


def unseed_service_areas(apps, schema_editor):
    ServiceArea = apps.get_model("service_areas", "ServiceArea")
    ServiceArea.objects.filter(slug__in=["columbus-ohio", "statesville-nc"]).delete()


class Migration(migrations.Migration):

    dependencies = [
        ("service_areas", "0001_initial"),
    ]

    operations = [
        migrations.RunPython(seed_service_areas, reverse_code=unseed_service_areas),
    ]
