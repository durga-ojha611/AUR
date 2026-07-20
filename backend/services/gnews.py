import os
import httpx
from typing import List
from dotenv import load_dotenv
from schemas import ExternalNewsItem

load_dotenv()
GNEWS_API_KEY = os.getenv("GNEWS_API_KEY")
print("GNEWS_API_KEY:", GNEWS_API_KEY)
GNEWS_BASE_URL = "https://gnews.io/api/v4/search"

# Topics that should never surface on the site, even if "university" appears nearby
_EXCLUDE_KEYWORDS = [
    "suicide", "murder", "killed", "stabbing", "shooting", "rape",
    "assault", "abuse", "molest", "arrested", "died", "death",
    "dead body", "crash", "accident", "fire", "kidnap", "attack",
    "scandal", "protest", "riot", "war", "terror",
]

# At least one of these should appear for an article to count as "on topic"
_INCLUDE_KEYWORDS = [
    "university", "college", "campus", "academ", "ranking", "faculty",
    "research", "student", "professor", "education", "degree", "institute",
    "scholarship", "curriculum", "enrolment", "enrollment",
]


def _is_relevant(title: str, description: str | None) -> bool:
    text = f"{title} {description or ''}".lower()

    if any(bad in text for bad in _EXCLUDE_KEYWORDS):
        return False

    if not any(good in text for good in _INCLUDE_KEYWORDS):
        return False

    return True


async def fetch_external_news(query: str = "higher education Asia", limit: int = 10) -> List[ExternalNewsItem]:
    """
    Calls GNews and returns a clean list of ExternalNewsItem, filtered to
    university/higher-education relevant articles only.
    Never raises — on any failure (missing key, timeout, bad response),
    returns an empty list so the app keeps working.
    """
    if not GNEWS_API_KEY:
        return []

    # Over-fetch a bit since some results will get filtered out
    params = {
        "q": query,
        "lang": "en",
        "max": min(limit * 2, 20),
        "apikey": GNEWS_API_KEY,
    }

    try:
        async with httpx.AsyncClient(timeout=5.0) as client:
            response = await client.get(GNEWS_BASE_URL, params=params)
            response.raise_for_status()
            payload = response.json()
    except Exception:
        return []

    articles = payload.get("articles", [])
    results = []
    for article in articles:
        title = article.get("title", "")
        description = article.get("description")

        if not _is_relevant(title, description):
            continue

        try:
            results.append(
                ExternalNewsItem(
                    title=title,
                    description=description,
                    url=article.get("url", ""),
                    source=(article.get("source") or {}).get("name"),
                    published_at=article.get("publishedAt"),
                    image=article.get("image"),
                )
            )
        except Exception:
            continue

        if len(results) >= limit:
            break

    return results