@echo off
chcp 65001 >nul
echo ========================================
echo GitHub 仓库上传脚本
echo ========================================
echo.

echo 请先在 GitHub 上创建仓库，然后：
echo 1. 访问 https://github.com
echo 2. 点击右上角 + 号，选择 New repository
echo 3. 输入仓库名称（例如：workout-planner）
echo 4. 选择 Public
echo 5. 点击 Create repository
echo.

set /p REPO_URL="请输入你的仓库地址（例如：https://github.com/用户名/workout-planner.git）: "

if "%REPO_URL%"=="" (
    echo 错误：仓库地址不能为空！
    pause
    exit /b 1
)

echo.
echo 正在添加远程仓库...
git remote add origin %REPO_URL% 2>nul
if errorlevel 1 (
    echo 远程仓库已存在，正在更新...
    git remote set-url origin %REPO_URL%
)

echo.
echo 正在推送到 GitHub...
git branch -M main
git push -u origin main

if errorlevel 1 (
    echo.
    echo ========================================
    echo 推送失败！可能的原因：
    echo 1. 需要先登录 GitHub（使用 GitHub Desktop 或配置 SSH）
    echo 2. 仓库地址不正确
    echo 3. 需要先设置 Git 用户信息
    echo.
    echo 如果还没有配置 Git，请先执行：
    echo   git config --global user.name "你的名字"
    echo   git config --global user.email "你的邮箱"
    echo ========================================
) else (
    echo.
    echo ========================================
    echo 上传成功！
    echo.
    echo 接下来：
    echo 1. 在 GitHub 仓库页面，点击 Settings
    echo 2. 找到 Pages 选项
    echo 3. Source 选择 main 分支
    echo 4. 保存后等待 1-2 分钟
    echo 5. 访问：https://你的用户名.github.io/仓库名/
    echo ========================================
)

pause

