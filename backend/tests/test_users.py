import sys
import os
import uuid

sys.path.append(os.path.dirname(os.path.dirname(__file__)))

from fastapi.testclient import TestClient
from main import app


def get_client():
    return TestClient(app)


def unique_email():
    return f"user_{uuid.uuid4().hex[:8]}@example.com"


def register_and_login(client):
    payload = {
        "first_name": "Chandrika",
        "last_name": "Test",
        "email": unique_email(),
        "password": "Password123"
    }

    response = client.post("/auth/register", json=payload)

    assert response.status_code == 201

    access_token = response.json()["access_token"]

    headers = {
        "Authorization": f"Bearer {access_token}"
    }

    return headers


def get_valid_university_id(client):
    response = client.get("/api/universities?limit=1")
    assert response.status_code == 200

    data = response.json()

    return data["data"][0]["id"]


# ---------------------------------------------------
# POST /users/bookmarks
# ---------------------------------------------------
def test_add_bookmark_success():
    with get_client() as client:
        headers = register_and_login(client)

        university_id = get_valid_university_id(client)

        response = client.post(
            "/users/bookmarks",
            json={"university_id": university_id},
            headers=headers,
        )

        print("STATUS:", response.status_code)
        print("BODY:", response.json())

        assert False
        data = response.json()

        assert data["message"] == "Bookmark added"
        assert "bookmark_id" in data

def test_add_duplicate_bookmark():
    with get_client() as client:
        headers = register_and_login(client)

        university_id = get_valid_university_id(client)

        client.post(
            "/users/bookmarks",
            json={"university_id": university_id},
            headers=headers,
        )

        response = client.post(
            "/users/bookmarks",
            json={"university_id": university_id},
            headers=headers,
        )

        assert response.status_code == 409


def test_add_bookmark_unauthorized():
    with get_client() as client:
        response = client.post(
            "/users/bookmarks",
            json={"university_id": get_valid_university_id(client)},
        )

        assert response.status_code == 403


def test_add_bookmark_invalid_uuid():
    with get_client() as client:
        headers = register_and_login(client)

        response = client.post(
            "/users/bookmarks",
            json={"university_id": "invalid"},
            headers=headers,
        )

        assert response.status_code == 422


# ---------------------------------------------------
# GET /users/bookmarks
# ---------------------------------------------------

def test_get_bookmarks():
    with get_client() as client:
        headers = register_and_login(client)

        client.post(
            "/users/bookmarks",
            json={"university_id": get_valid_university_id(client)},
            headers=headers,
        )

        response = client.get(
            "/users/bookmarks",
            headers=headers,
        )

        assert response.status_code == 200

        data = response.json()

        assert "bookmarks" in data
        assert "total" in data


def test_get_bookmarks_empty():
    with get_client() as client:
        headers = register_and_login(client)

        response = client.get(
            "/users/bookmarks",
            headers=headers,
        )

        assert response.status_code == 200
        assert response.json()["total"] == 0


def test_get_bookmarks_unauthorized():
    with get_client() as client:
        response = client.get("/users/bookmarks")

        assert response.status_code == 403


# ---------------------------------------------------
# DELETE /users/bookmarks
# ---------------------------------------------------

def test_delete_bookmark_success():
    with get_client() as client:
        headers = register_and_login(client)

        university_id = get_valid_university_id(client)

        client.post(
            "/users/bookmarks",
            json={"university_id": university_id},
            headers=headers,
        )

        response = client.delete(
            f"/users/bookmarks/{university_id}",
            headers=headers,
        )

        assert response.status_code == 204


def test_delete_bookmark_not_found():
    with get_client() as client:
        headers = register_and_login(client)

        response = client.delete(
            f"/users/bookmarks/{get_valid_university_id(client)}",
            headers=headers,
        )

        assert response.status_code == 404


def test_delete_bookmark_invalid_uuid():
    with get_client() as client:
        headers = register_and_login(client)

        response = client.delete(
            "/users/bookmarks/invalid",
            headers=headers,
        )

        assert response.status_code == 422


def test_delete_bookmark_unauthorized():
    with get_client() as client:
        response = client.delete(
            f"/users/bookmarks/{get_valid_university_id(client)}",
        )

        assert response.status_code == 403


# ---------------------------------------------------
# PATCH /users/preferences
# ---------------------------------------------------

def test_update_preferences():
    with get_client() as client:
        headers = register_and_login(client)

        response = client.patch(
            "/users/preferences",
            json={
                "default_country": "India",
                "default_limit": 10,
                "preferred_metrics": ["overall_score"],
            },
            headers=headers,
        )

        assert response.status_code == 200
        assert response.json()["message"] == "Preferences updated"


def test_update_preferences_partial():
    with get_client() as client:
        headers = register_and_login(client)

        response = client.patch(
            "/users/preferences",
            json={"default_country": "India"},
            headers=headers,
        )

        assert response.status_code == 200


def test_update_preferences_unauthorized():
    with get_client() as client:
        response = client.patch(
            "/users/preferences",
            json={"default_country": "India"},
        )

        assert response.status_code == 403


# ---------------------------------------------------
# GET /users/preferences
# ---------------------------------------------------

def test_get_preferences():
    with get_client() as client:
        headers = register_and_login(client)

        response = client.get(
            "/users/preferences",
            headers=headers,
        )

        assert response.status_code == 200


def test_get_preferences_unauthorized():
    with get_client() as client:
        response = client.get("/users/preferences")

        assert response.status_code == 403