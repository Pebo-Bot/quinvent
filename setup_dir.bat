@echo off

:: Change to the project root directory
cd %~dp0

:: Create the assets directory and its subdirectories
mkdir src\assets
mkdir src\assets\images
mkdir src\assets\config

:: Create the components directory and its subdirectories
mkdir src\components
mkdir src\components\Common

:: Create the views directory for future UI pages if needed
mkdir src\views

:: Create the services directory
mkdir src\services

:: Create the hooks directory for custom hooks
mkdir src\hooks

:: Create the utils directory for utility functions
mkdir src\utils

:: Create the styles directory for CSS or SASS
mkdir src\styles

:: Feedback message
echo Directory structure created successfully.
pause
