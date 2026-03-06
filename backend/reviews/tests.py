import pytest
from django.urls import reverse
from model_bakery import baker

from .models import Review

REVIEWS_URL = "/api/reviews/"


@pytest.mark.django_db
def test_inactive_review_excluded():
    baker.make(Review, is_active=True, display_order=0)
    baker.make(Review, is_active=False, display_order=1)

    from django.test import Client
    response = Client().get(REVIEWS_URL)

    assert response.status_code == 200
    assert len(response.json()) == 1


@pytest.mark.django_db
def test_limit_query_param():
    baker.make(Review, is_active=True, _quantity=5)

    from django.test import Client
    response = Client().get(REVIEWS_URL + "?limit=1")

    assert response.status_code == 200
    assert len(response.json()) == 1


@pytest.mark.django_db
def test_ordering_by_display_order():
    first = baker.make(Review, is_active=True, display_order=1, review_date=None)
    second = baker.make(Review, is_active=True, display_order=2, review_date=None)

    from django.test import Client
    response = Client().get(REVIEWS_URL + "?limit=2")
    data = response.json()

    assert response.status_code == 200
    assert data[0]["id"] == first.id
    assert data[1]["id"] == second.id
