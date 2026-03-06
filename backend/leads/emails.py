import logging

from django.conf import settings
from django.core.mail import send_mail

from .models import NotificationEmail

logger = logging.getLogger(__name__)


def send_lead_notification(lead):
    recipients = list(
        NotificationEmail.objects.filter(is_active=True).values_list("email", flat=True)
    )
    if not recipients:
        logger.warning("send_lead_notification: no active recipients, skipping")
        return

    logger.info("send_lead_notification: sending to %d recipient(s) from %s", len(recipients), settings.DEFAULT_FROM_EMAIL)

    subject = f"New Lead: {lead.name} — {lead.city}, {lead.state}"
    body = f"""
New lead submitted via {lead.get_source_display()}

Name:    {lead.name}
Phone:   {lead.phone}
Email:   {lead.email or "—"}
Address: {lead.street}, {lead.city}, {lead.state} {lead.zip}
Message: {lead.message or "—"}
    """.strip()

    try:
        send_mail(
            subject=subject,
            message=body,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=recipients,
            fail_silently=False,
        )
        logger.info("send_lead_notification: email sent successfully")
    except Exception as e:
        logger.error("send_lead_notification: failed to send email — %s: %s", type(e).__name__, e)
