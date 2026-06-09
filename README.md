# Моё портфолио

**Ольга Степченко** — персональный сайт-портфолио специалиста по искусственному интеллекту, цифровым решениям и вайб-кодингу.

**Стиль:** Luxury Soft Tech Premium Portfolio  
**Статус:** production-ready, статический сайт в одном файле

---

## Демо

После публикации на GitHub Pages сайт будет доступен по адресу:

```
https://olgastepai.github.io/moyo-portfolio/
```

Локально: откройте [`index.html`](index.html) в браузере или запустите простой локальный сервер (см. ниже).

---

## Возможности сайта

- Адаптивная вёрстка: desktop / tablet / mobile
- Анимированный фон «северное сияние»
- Парящие фото и стеклянные карточки с изумрудным блеском
- Встроенный квиз AI-диагностики (iframe)
- 6 демо-проектов в папке `projects/`

---

## Структура репозитория

```
├── index.html              # Главная страница (HTML + CSS + JS)
├── images/                 # Фотографии для портфолио
│   ├── olga-main.jpg
│   ├── olga-main2.jpg … olga-main5.jpg
│   ├── olga-main_kontakt.jpg
│   └── olga-main_itog.jpg
├── projects/
│   ├── history-app/        # → История Алтайского края
│   ├── ai-quiz/            # → Персональная AI-диагностика
│   ├── ai-chat/            # → AI-консультант
│   ├── beauty-calculator/  # → Калькулятор для бьюти
│   ├── services-calculator/# → Калькулятор услуг
│   ├── coin-game/          # → Мини-игра «Лови монетки»
│   └── history_teacher_app/# Образовательная платформа (Python + HTML)
├── README.md
└── .gitignore
```

---

## Как открыть локально

### Вариант 1 — двойной клик
Откройте `index.html` в браузере. Большинство разделов работает сразу.

### Вариант 2 — локальный сервер (рекомендуется)
Нужен для корректной работы iframe с квизом и некоторых ссылок между проектами.

**Python:**
```bash
python -m http.server 8080
```
Откройте: `http://localhost:8080`

**Node.js (npx):**
```bash
npx serve .
```

**VS Code / Cursor:** расширение Live Server → «Open with Live Server».

---

## Публикация на GitHub Pages

**Подробная инструкция:** [GITHUB_ПУБЛИКАЦИЯ.md](GITHUB_ПУБЛИКАЦИЯ.md)

**Быстрый старт:** дважды кликните `ЗАГРУЗИТЬ_НА_GITHUB.bat` (после установки Git).

Кратко:
1. Установите [Git for Windows](https://git-scm.com/download/win)
2. Запустите `ЗАГРУЗИТЬ_НА_GITHUB.bat` — создаст репозиторий и коммит
3. Создайте репозиторий на [GitHub](https://github.com/new) (имя: `moyo-portfolio`, описание: **Моё портфолио**)
4. Выполните `git remote add origin ...` и `git push -u origin main`
5. **Settings → Pages → main → / (root)** — сайт онлайн

---

## Проекты в портфолио

| Проект | Путь |
|--------|------|
| История Алтайского края | `projects/history-app/` |
| Персональная AI-диагностика | `projects/ai-quiz/` |
| AI-консультант | `projects/ai-chat/` |
| Калькулятор для бьюти | `projects/beauty-calculator/` |
| Калькулятор стоимости услуг | `projects/services-calculator/` |
| Мини-игра «Лови монетки» | `projects/coin-game/` |

---

## Технологии

- HTML5, CSS3, JavaScript (vanilla)
- Google Fonts: Cormorant Garamond, Manrope
- Intersection Observer, CSS-анимации, parallax
- Внешних зависимостей нет (кроме шрифтов)

---

## Контакты

- **Telegram:** [@olga_stepchenko](https://t.me/olga_stepchenko)
- **Канал:** [t.me/stepneurovibe](https://t.me/stepneurovibe)
- **Instagram:** [@ostepfotoai](https://instagram.com/ostepfotoai)
- **Email:** stepchenko_olga@mail.ru

---

## Лицензия

© 2026 StepAI. Все права защищены.
