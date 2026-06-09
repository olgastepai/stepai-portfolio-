"""Тесты сборки уроков и загрузки URL."""
import unittest

from lesson_bank import LESSON_BANK
from web_fetch import extract_first_url


class TestLessonBank(unittest.TestCase):
    def test_bank_has_three_topics(self):
        self.assertEqual(len(LESSON_BANK), 3)

    def test_topic_has_required_fields(self):
        topic = next(iter(LESSON_BANK.values()))
        for key in ("period", "short_description", "key_dates", "key_terms", "teacher_text", "sources"):
            self.assertIn(key, topic)


class TestExtractUrl(unittest.TestCase):
    def test_extracts_url(self):
        text = "Смотрите https://example.com/page.html и далее"
        self.assertEqual(extract_first_url(text), "https://example.com/page.html")

    def test_strips_trailing_punctuation(self):
        text = "https://example.com/page."
        self.assertEqual(extract_first_url(text), "https://example.com/page")

    def test_none_when_empty(self):
        self.assertIsNone(extract_first_url("  "))


if __name__ == "__main__":
    unittest.main()
