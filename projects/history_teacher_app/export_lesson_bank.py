"""Синхронизирует html/data/lesson-bank.json → html/js/lesson-bank.js"""
import json
from pathlib import Path

from lesson_bank import LESSON_BANK

OUT = Path(__file__).parent / "html" / "js" / "lesson-bank.js"
OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(
    "/* Автогенерация: python export_lesson_bank.py */\n"
    "const LESSON_BANK = "
    + json.dumps(LESSON_BANK, ensure_ascii=False, indent=2)
    + ";\n",
    encoding="utf-8",
)
print("OK:", OUT)
