from django.db import migrations


def seed_email(apps, schema_editor):
    NotificationEmail = apps.get_model("leads", "NotificationEmail")
    NotificationEmail.objects.get_or_create(email="kramm.eythan@gmail.com")


def unseed_email(apps, schema_editor):
    NotificationEmail = apps.get_model("leads", "NotificationEmail")
    NotificationEmail.objects.filter(email="kramm.eythan@gmail.com").delete()


class Migration(migrations.Migration):

    dependencies = [
        ("leads", "0002_notificationemail"),
    ]

    operations = [
        migrations.RunPython(seed_email, reverse_code=unseed_email),
    ]
