"""Однократная очистка app.py от дублирующегося кода."""
from pathlib import Path

root = Path(__file__).resolve().parent.parent
app = root / "app.py"
lines = app.read_text(encoding="utf-8").splitlines(keepends=True)
start = next(
    i
    for i, line in enumerate(lines)
    if line.startswith("def build_lesson_from_bank(topic")
)
header = '''import requests
import streamlit as st

from lesson_bank import LESSON_BANK
from web_fetch import extract_first_url, fetch_page_text

st.set_page_config(
    page_title="Помощник учителя истории Алтайского края",
    page_icon="📚",
    layout="centered",
)


def make_bullet_list(items):
    return "\\n".join([f"- {item}" for item in items])


'''
app.write_text(header + "".join(lines[start:]), encoding="utf-8")
print("Fixed app.py, starts at line", start + 1)
