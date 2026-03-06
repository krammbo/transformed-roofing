from django.conf import settings
from django.core.mail import send_mail

from .models import NotificationEmail


def send_lead_notification(lead):
    recipients = list(
        NotificationEmail.objects.filter(is_active=True).values_list("email", flat=True)
    )
    if not recipients:
        return

    subject = f"New Lead: {lead.name} — {lead.city}, {lead.state}"
    body = f"""
New lead submitted via {lead.get_source_display()}

Name:    {lead.name}
Phone:   {lead.phone}
Email:   {lead.email or "—"}
Address: {lead.street}, {lead.city}, {lead.state} {lead.zip}
Message: {lead.message or "—"}
    """.strip()

    send_mail(
        subject=subject,
        message=body,
        from_email=settings.DEFAULT_FROM_EMAIL,
        recipient_list=recipients,
        fail_silently=True,
    )
