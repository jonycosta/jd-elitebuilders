@echo off
echo Buscando GIT para publicar tu web...

:: Intentar encontrar GIT en rutas estandar
set "GIT_PATH="

if exist "C:\Program Files\Git\cmd\git.exe" set "GIT_PATH=C:\Program Files\Git\cmd\git.exe"
if exist "C:\Program Files\Git\bin\git.exe" set "GIT_PATH=C:\Program Files\Git\bin\git.exe"
if exist "C:\Users\%USERNAME%\AppData\Local\Programs\Git\cmd\git.exe" set "GIT_PATH=C:\Users\%USERNAME%\AppData\Local\Programs\Git\cmd\git.exe"

if "%GIT_PATH%"=="" (
    echo NO SE ENCONTRO GIT AUTOMATICAMENTE.
    echo Por favor, usa VS Code para publicar.
    pause
    exit /b
)

echo GIT encontrado en: %GIT_PATH%
echo.
echo ==========================================
echo      PUBLICANDO JD BUILDERS...
echo ==========================================
echo.

"%GIT_PATH%" add .
"%GIT_PATH%" commit -m "Publicacion Automatica JD Builders"
"%GIT_PATH%" push origin main

echo.
echo ==========================================
echo      !LISTO! WEB ENVIADA A LA NUBE
echo ==========================================
echo Ya puedes cerrar esta ventana.
pause
