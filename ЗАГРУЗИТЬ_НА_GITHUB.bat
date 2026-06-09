@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo.
echo  Публикация портфолио на GitHub...
echo.
powershell -ExecutionPolicy Bypass -File "%~dp0publish-github.ps1"
