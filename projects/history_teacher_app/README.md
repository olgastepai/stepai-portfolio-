# history_teacher_app

Основная папка приложения. См. также [README в корне репозитория](../README.md).

## Запуск

| Файл | Результат |
|------|-----------|
| `ЗАПУСК_HTML.bat` | Сайт: лендинг + приложение → http://localhost:8080 |
| `ЗАПУСК.bat` | Streamlit → http://localhost:8501 |

## Документация

- [КАК_ОТКРЫТЬ_САЙТ.md](КАК_ОТКРЫТЬ_САЙТ.md) — HTML-версия
- [КАК_ЗАПУСТИТЬ.txt](КАК_ЗАПУСТИТЬ.txt) — общая инструкция
- [html/README.md](html/README.md) — структура веб-части

## Тесты

```bash
python -m unittest discover -s tests
```

## Модули

- `lesson_bank.py` — данные тем (`html/data/lesson-bank.json`)
- `web_fetch.py` — загрузка текста по URL
- `app.py` — интерфейс Streamlit
