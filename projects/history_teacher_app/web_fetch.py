"""Загрузка текста с веб-страниц для режима «своя тема»."""
import re

import requests
from bs4 import BeautifulSoup

from config import FETCH_TIMEOUT_SEC, MAX_FETCH_CHARS


def extract_first_url(text: str) -> str | None:
    match = re.search(r"https?://[^\s<>\"']+", text.strip())
    if not match:
        return None
    return match.group(0).rstrip(".,;)")


def fetch_page_text(url: str) -> str:
    headers = {
        "User-Agent": (
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
            "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        ),
        "Accept-Language": "ru-RU,ru;q=0.9,en;q=0.8",
    }
    response = requests.get(url, headers=headers, timeout=FETCH_TIMEOUT_SEC)
    response.raise_for_status()

    if response.encoding in (None, "ISO-8859-1"):
        response.encoding = response.apparent_encoding or "utf-8"

    soup = BeautifulSoup(response.text, "html.parser")
    for tag in soup(["script", "style", "noscript", "iframe", "svg"]):
        tag.decompose()

    main = soup.find("main") or soup.find("article") or soup.find("body")
    if main is None:
        raise ValueError("Не удалось найти текст на странице.")

    lines = []
    for line in main.get_text("\n").splitlines():
        cleaned = line.strip()
        if cleaned:
            lines.append(cleaned)

    text = "\n".join(lines)
    if len(text) < 200:
        raise ValueError(
            "На странице слишком мало текста. Возможно, сайт закрыт для загрузки — "
            "скопируйте текст вручную в поле ниже."
        )

    if len(text) > MAX_FETCH_CHARS:
        text = (
            text[:MAX_FETCH_CHARS]
            + f"\n\n[Текст обрезан до {MAX_FETCH_CHARS} символов. При необходимости допишите вручную.]"
        )
    return text
