# Простая инструкция для olgastepai

## Что значат пункты на GitHub

### Public (публичный)
Сайт будет виден всем в интернете. Для портфолио это нужно — чтобы дать ссылку клиентам и на стажировку.

### Без README
На странице создания репозитория **не ставьте галочку** «Add a README file».  
У вас README уже есть в папке проекта — GitHub не должен создавать второй.

### Create repository (создать репозиторий)
Зелёная кнопка внизу страницы. Нажимаете — и на GitHub появляется пустая «коробка» для ваших файлов.

---

## Шаг 1. Создать репозиторий на сайте GitHub

1. Откройте в браузере: **https://github.com/new**
2. В поле **Repository name** напишите:
   ```
   stepai-portfolio
   ```
   (именно сюда — это название «папки» на GitHub)
3. Выберите **Public**
4. **Не ставьте** галочки Add README, Add .gitignore, Choose a license
5. Нажмите зелёную кнопку **Create repository**

---

## Шаг 2. Что такое «терминал»

**Терминал** — это окно внизу Cursor, куда вводят команды текстом.

**Как открыть в Cursor:**
1. Меню **View** → **Terminal** (или **Вид** → **Терминал**)
2. Или нажмите **Ctrl + `** (клавиша с буквой «ё» / тильда ~)

Внизу появится чёрное или синее окно с текстом — это терминал.

---

## Шаг 3. Скопируйте команды по одной

Кликните в терминал и **вставляйте каждую строку**, нажимая Enter после каждой.

### Команда 1 — перейти в папку проекта
```
cd "c:\Users\VIP\Videos\1.Проекты Курсор\Моё портфолио"
```

### Команда 2 — связать с GitHub (ваш логин уже подставлен)
```
git remote add origin https://github.com/olgastepai/stepai-portfolio.git
```

> Если напишет «remote origin already exists» — вместо неё введите:
> ```
> git remote set-url origin https://github.com/olgastepai/stepai-portfolio.git
> ```

### Команда 3 — отправить файлы на GitHub
```
git push -u origin main
```

---

## Шаг 4. Вход при push

Откроется окно входа в GitHub или запрос в терминале:

- **Username:** `olgastepai`
- **Password:** сюда **НЕ пароль**, а **токен** (см. ниже)

### Как получить токен (один раз)
1. GitHub → ваш аватар (правый верх) → **Settings**
2. Слева внизу **Developer settings**
3. **Personal access tokens** → **Tokens (classic)**
4. **Generate new token (classic)**
5. Note: `portfolio` — галочка **repo** — **Generate token**
6. **Скопируйте токен** (показывается один раз!) и вставьте вместо пароля

---

## Шаг 5. Включить сайт в интернете

1. Откройте: **https://github.com/olgastepai/stepai-portfolio**
2. **Settings** → слева **Pages**
3. **Branch:** выберите `main`, папка **`/ (root)`**
4. **Save**

Через 2–3 минуты сайт будет здесь:

### https://olgastepai.github.io/stepai-portfolio/

Эту ссылку можно давать клиентам и в резюме.

---

## Если что-то пошло не так

| Ошибка | Что делать |
|--------|------------|
| `git: command not found` | Перезапустите Cursor |
| `Repository not found` | Сначала создайте репозиторий на github.com/new |
| `Authentication failed` | Используйте токен, не пароль |
| Окно bat закрылось сразу | Используйте терминал в Cursor (шаг 2–3) |

---

**Ваш логин:** olgastepai  
**Название репозитория:** stepai-portfolio  
**Ссылка на сайт:** https://olgastepai.github.io/stepai-portfolio/
