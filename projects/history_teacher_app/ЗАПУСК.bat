@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo.
echo  Помощник учителя истории Алтайского края
echo  ----------------------------------------
echo  Первый запуск: установка библиотек (1-2 минуты)...
echo.

python --version >nul 2>&1
if errorlevel 1 (
    echo  ОШИБКА: Python не найден.
    echo  Установите с https://www.python.org/downloads/
    echo  При установке включите галочку "Add python.exe to PATH"
    echo.
    pause
    exit /b 1
)

python -m pip install -r requirements.txt -q
if errorlevel 1 (
    echo  Не удалось установить библиотеки. Проверьте интернет.
    pause
    exit /b 1
)

echo  Запуск приложения... Откроется браузер.
echo  Не закрывайте это окно, пока работаете с приложением.
echo  Остановка: закройте окно или Ctrl+C
echo.

python -m streamlit run app.py

pause
