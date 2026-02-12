@echo off
setlocal enabledelayedexpansion

echo Buscando programa para subir la web...

:: Rutas comunes de Git
set "GIT_PATH="
set paths[0]=C:\Program Files\Git\bin\git.exe
set paths[1]=C:\Program Files\Git\cmd\git.exe
set paths[2]=C:\Program Files\Git\bin\git.exe
set paths[3]=C:\Program Files\Git\cmd\git.exe
set paths[4]=%LocalAppData%\Programs\Git\bin\git.exe
set paths[5]=%LocalAppData%\Programs\Git\cmd\git.exe

for /l %%i in (0,1,5) do (
    if exist "!paths[%%i]!" (
        set "GIT_PATH=!paths[%%i]!"
        goto :found
    )
)

for /f "tokens=*" %%g in ('where git 2^>nul') do (
    set "GIT_PATH=%%g"
    goto :found
)

echo.
echo NO SE ENCONTRO EL PROGRAMA (Git).
echo Por favor, instala Git desde https://git-scm.com/ e intentalo de nuevo.
pause
exit /b

:found
echo Programa encontrado en: "%GIT_PATH%"
echo.
echo SUBIENDO CAMBIOS DE JD BUILDERS...
echo -----------------------------------

"%GIT_PATH%" add .
"%GIT_PATH%" commit -m "Auto-despliegue JD Builders"
"%GIT_PATH%" push origin main

if %errorlevel% neq 0 (
    echo.
    echo HUBO UN ERROR AL SUBIR. 
    echo Asegurate de tener internet y de que GitHub este configurado.
) else (
    echo.
    echo ¡LISTO! WEB ACTUALIZADA.
)

pause
