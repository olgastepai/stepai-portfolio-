@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo.
echo  HTML-версия помощника учителя
echo  -----------------------------
echo.

python --version >nul 2>&1
if errorlevel 1 (
    echo  ОШИБКА: Python не найден. Нужен для подготовки данных.
    pause
    exit /b 1
)

echo  Проверка файлов сайта...
if not exist "html\index.html" (
    echo  Не найден html\index.html
    pause
    exit /b 1
)

echo  Синхронизация банка тем для сайта...
python export_lesson_bank.py

echo.
echo  Откройте в браузере:
echo    http://localhost:8080       — главная (лендинг)
echo    http://localhost:8080/app.html — приложение
echo.
echo  Не закрывайте это окно, пока пользуетесь страницей.
echo  Остановка: Ctrl+C или закрыть окно.
echo.

start http://localhost:8080
python -m http.server 8080 --directory html

pause
