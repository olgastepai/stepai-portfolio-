@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo.
echo  Помощник учителя — доступ с телефона / другого компьютера
echo  -----------------------------------------------------------
echo  ВАЖНО: оба устройства должны быть в одной Wi-Fi сети.
echo  Ссылку localhost пересылать нельзя — она работает только у вас.
echo.

python --version >nul 2>&1
if errorlevel 1 (
    echo  ОШИБКА: Python не найден. См. КАК_ЗАПУСТИТЬ.txt
    pause
    exit /b 1
)

python -m pip install -r requirements.txt -q

echo  Ваши адреса в локальной сети (отправьте учителю один из них):
echo.
powershell -NoProfile -Command "$ips = Get-NetIPAddress -AddressFamily IPv4 -ErrorAction SilentlyContinue | Where-Object { $_.IPAddress -notlike '127.*' -and $_.IPAddress -notlike '169.254.*' }; if ($ips) { $ips | ForEach-Object { Write-Host ('    http://' + $_.IPAddress + ':8501') } } else { Write-Host '    (не найден — в cmd выполните: ipconfig)' }"
echo.
echo  На этом компьютере также: http://localhost:8501
echo  Не закрывайте это окно, пока другие пользуются приложением.
echo  Остановка: Ctrl+C или закрыть окно.
echo.

python -m streamlit run app.py --server.address 0.0.0.0 --server.port 8501

pause
