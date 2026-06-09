# Публикация портфолио на GitHub
# Запуск: правый клик → "Выполнить с помощью PowerShell"
# или в терминале: powershell -ExecutionPolicy Bypass -File publish-github.ps1

$ErrorActionPreference = "Stop"
$ProjectRoot = $PSScriptRoot

# Поиск Git
$GitPaths = @(
    "C:\Program Files\Git\bin\git.exe",
    "C:\Program Files (x86)\Git\bin\git.exe",
    "$env:LOCALAPPDATA\Programs\Git\bin\git.exe"
)
$git = $null
foreach ($p in $GitPaths) {
    if (Test-Path $p) { $git = $p; break }
}
if (-not $git) {
    $gitCmd = Get-Command git -ErrorAction SilentlyContinue
    if ($gitCmd) { $git = $gitCmd.Source }
}

if (-not $git) {
    Write-Host ""
    Write-Host "Git не найден!" -ForegroundColor Red
    Write-Host "1. Установите: https://git-scm.com/download/win"
    Write-Host "2. Перезапустите терминал"
    Write-Host "3. Запустите этот скрипт снова"
    Write-Host ""
    Read-Host "Нажмите Enter для выхода"
    exit 1
}

Write-Host "Используется Git: $git" -ForegroundColor Cyan
Set-Location $ProjectRoot

# Инициализация
if (-not (Test-Path ".git")) {
    & $git init
    Write-Host "Репозиторий инициализирован." -ForegroundColor Green
} else {
    Write-Host "Репозиторий уже существует." -ForegroundColor Yellow
}

# Проверка: секреты не должны попасть в коммит
if (& $git check-ignore -v "projects/ai-quiz/github-recovery-codes.txt" 2>$null) {
    Write-Host "Секретные файлы в .gitignore — OK" -ForegroundColor Green
}

# Добавление и коммит
& $git add .
$status = & $git status --porcelain
if (-not $status) {
    Write-Host "Нет изменений для коммита." -ForegroundColor Yellow
} else {
    & $git commit -m "Портфолио StepAI — Ольга Степченко" -m "Production-ready сайт-портфолио с демо-проектами."
    Write-Host "Коммит создан." -ForegroundColor Green
}

& $git branch -M main

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  СЛЕДУЮЩИЙ ШАГ — GitHub" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Откройте: https://github.com/new"
Write-Host "2. Имя репозитория: stepai-portfolio (или своё)"
Write-Host "3. Public, БЕЗ README (у нас уже есть)"
Write-Host "4. Create repository"
Write-Host ""
Write-Host "5. Выполните в этой папке (замените ЛОГИН и РЕПО):" -ForegroundColor Yellow
Write-Host ""
Write-Host '  git remote add origin https://github.com/ЛОГИН/РЕПО.git'
Write-Host '  git push -u origin main'
Write-Host ""
Write-Host "6. GitHub → Settings → Pages → main → / (root) → Save"
Write-Host "7. Сайт будет: https://ЛОГИН.github.io/РЕПО/"
Write-Host ""
Read-Host "Нажмите Enter для выхода"
