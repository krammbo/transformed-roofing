from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.http import JsonResponse
from django.urls import include, path

urlpatterns = [
    path("api/health/", lambda req: JsonResponse({"status": "ok"})),
    path("api/reviews/", include("reviews.urls")),
    path("api/service-areas/", include("service_areas.urls")),
    path("api/gallery/", include("gallery.urls")),
    path("api/leads/", include("leads.urls")),
    path("admin/", admin.site.urls),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
