# Как выложить портфолио на GitHub за 10 минут

## Шаг 1. Установить Git (если ещё нет)

Скачайте и установите: **https://git-scm.com/download/win**

При установке оставьте настройки по умолчанию. После установки **перезапустите Cursor** или компьютер.

> Если появилось окно UAC «Разрешить изменения» — нажмите **Да**.

---

## Шаг 2. Автоматическая подготовка репозитория

В папке проекта запустите файл:

```
publish-github.ps1
```

**Как запустить:**
- Откройте папку проекта в проводнике
- Правый клик на `publish-github.ps1` → **Выполнить с помощью PowerShell**

Или в терминале Cursor:

```powershell
cd "c:\Users\VIP\Videos\1.Проекты Курсор\Моё портфолио"
powershell -ExecutionPolicy Bypass -File publish-github.ps1
```

Скрипт создаст git-репозиторий и первый коммит.

---

## Шаг 3. Создать репозиторий на GitHub

1. Войдите на **https://github.com**
2. Нажмите **+** → **New repository**
3. Заполните:
   - **Repository name:** `stepai-portfolio` (или другое имя латиницей)
   - **Public**
   - **НЕ** ставьте галочки «Add README» / «Add .gitignore» — они уже есть в проекте
4. **Create repository**

---

## Шаг 4. Загрузить файлы (push)

На странице нового репозитория GitHub покажет команды. Выполните в терминале:

```bash
cd "c:\Users\VIP\Videos\1.Проекты Курсор\Моё портфолио"

git remote add origin https://github.com/ВАШ_ЛОГИН/stepai-portfolio.git
git push -u origin main
```

При первом push GitHub попросит войти. Используйте логин и **Personal Access Token** (не пароль от аккаунта).

### Как создать токен:
1. GitHub → **Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)**
2. **Generate new token** → отметьте `repo`
3. Скопируйте токен и вставьте вместо пароля при `git push`

---

## Шаг 5. Включить сайт онлайн (GitHub Pages)

1. В репозитории: **Settings** → **Pages**
2. **Source:** Deploy from a branch
3. **Branch:** `main` → папка **`/ (root)`**
4. **Save**

Через 1–3 минуты сайт откроется по адресу:

```
https://ВАШ_ЛОГИН.github.io/stepai-portfolio/
```

Эту ссылку можно добавить в резюме, Telegram и Instagram.

---

## Что уже защищено

Файл `.gitignore` не даст случайно загрузить:
- `github-recovery-codes.txt` (секреты)
- черновики и служебные файлы

---

## Если что-то не работает

| Проблема | Решение |
|----------|---------|
| `git` не распознан | Переустановите Git, перезапустите терминал |
| Ошибка при push | Проверьте токен GitHub |
| Сайт без картинок | Убедитесь, что папка `images/` загружена |
| Квиз не открывается | На Pages обычно работает; проверьте ссылку в браузере |

---

**Контакты в портфолио:** @olga_stepchenko · stepchenko_olga@mail.ru
