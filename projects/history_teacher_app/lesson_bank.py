"""Банк готовых тем уроков (единый источник для Python и HTML)."""
import json
from pathlib import Path

_BANK_PATH = Path(__file__).parent / "html" / "data" / "lesson-bank.json"


def load_lesson_bank() -> dict:
    with _BANK_PATH.open(encoding="utf-8") as f:
        return json.load(f)


LESSON_BANK = load_lesson_bank()
