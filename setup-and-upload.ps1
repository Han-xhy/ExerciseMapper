# GitHub 部署脚本
# 使用方法：在 PowerShell 中运行：.\setup-and-upload.ps1

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "GitHub 仓库上传助手" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# 检查 Git 配置
$gitName = git config --global user.name
$gitEmail = git config --global user.email

if (-not $gitName -or -not $gitEmail) {
    Write-Host "检测到 Git 用户信息未配置" -ForegroundColor Yellow
    Write-Host ""
    
    $name = Read-Host "请输入你的名字（用于 Git 提交）"
    $email = Read-Host "请输入你的邮箱（用于 Git 提交）"
    
    if ($name -and $email) {
        git config --global user.name $name
        git config --global user.email $email
        Write-Host "Git 用户信息已配置" -ForegroundColor Green
    } else {
        Write-Host "错误：名字和邮箱不能为空！" -ForegroundColor Red
        exit 1
    }
    Write-Host ""
}

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "步骤 1：在 GitHub 上创建仓库" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "请先完成以下操作：" -ForegroundColor Yellow
Write-Host "1. 访问 https://github.com 并登录" -ForegroundColor White
Write-Host "2. 点击右上角 '+' → 'New repository'" -ForegroundColor White
Write-Host "3. 填写信息：" -ForegroundColor White
Write-Host "   - Repository name: workout-planner（或你喜欢的名字）" -ForegroundColor Gray
Write-Host "   - 选择 Public（公开）" -ForegroundColor Gray
Write-Host "   - 不要勾选任何初始化选项" -ForegroundColor Gray
Write-Host "4. 点击 'Create repository'" -ForegroundColor White
Write-Host ""

$continue = Read-Host "创建好仓库后，按 Enter 继续"

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "步骤 2：配置远程仓库" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

$repoUrl = Read-Host "请输入你的仓库地址（例如：https://github.com/用户名/workout-planner.git）"

if (-not $repoUrl) {
    Write-Host "错误：仓库地址不能为空！" -ForegroundColor Red
    exit 1
}

# 检查是否已有远程仓库
$existingRemote = git remote get-url origin 2>$null
if ($existingRemote) {
    Write-Host "检测到已有远程仓库：$existingRemote" -ForegroundColor Yellow
    $update = Read-Host "是否更新为新的地址？(Y/N)"
    if ($update -eq "Y" -or $update -eq "y") {
        git remote set-url origin $repoUrl
        Write-Host "远程仓库地址已更新" -ForegroundColor Green
    }
} else {
    git remote add origin $repoUrl
    Write-Host "远程仓库已添加" -ForegroundColor Green
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "步骤 3：提交并推送代码" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# 检查是否有未提交的更改
$status = git status --porcelain
if ($status) {
    Write-Host "正在添加文件..." -ForegroundColor Yellow
    git add .
    
    Write-Host "正在提交..." -ForegroundColor Yellow
    git commit -m "Initial commit: Workout Planner"
}

# 设置主分支为 main
git branch -M main 2>$null

Write-Host "正在推送到 GitHub..." -ForegroundColor Yellow
Write-Host ""

$pushResult = git push -u origin main 2>&1

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "✅ 上传成功！" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "接下来启用 GitHub Pages：" -ForegroundColor Cyan
    Write-Host "1. 在 GitHub 仓库页面，点击 'Settings'" -ForegroundColor White
    Write-Host "2. 左侧菜单找到 'Pages'" -ForegroundColor White
    Write-Host "3. Source 选择 'main' 分支" -ForegroundColor White
    Write-Host "4. Folder 选择 '/ (root)'" -ForegroundColor White
    Write-Host "5. 点击 'Save'" -ForegroundColor White
    Write-Host ""
    Write-Host "等待 1-2 分钟后，访问你的网站：" -ForegroundColor Cyan
    $repoName = $repoUrl -replace '.*github\.com/[^/]+/([^/]+)\.git', '$1'
    $userName = $repoUrl -replace '.*github\.com/([^/]+)/.*', '$1'
    Write-Host "https://$userName.github.io/$repoName/" -ForegroundColor Yellow
} else {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Red
    Write-Host "❌ 推送失败" -ForegroundColor Red
    Write-Host "========================================" -ForegroundColor Red
    Write-Host ""
    Write-Host "可能的原因：" -ForegroundColor Yellow
    Write-Host "1. 需要登录 GitHub（使用 GitHub Desktop 或配置 SSH 密钥）" -ForegroundColor White
    Write-Host "2. 仓库地址不正确" -ForegroundColor White
    Write-Host "3. 仓库已存在内容（需要先拉取）" -ForegroundColor White
    Write-Host ""
    Write-Host "建议使用 GitHub Desktop 进行首次上传：" -ForegroundColor Cyan
    Write-Host "1. 下载：https://desktop.github.com" -ForegroundColor White
    Write-Host "2. 登录 GitHub 账号" -ForegroundColor White
    Write-Host "3. 添加本地仓库并推送" -ForegroundColor White
}

Write-Host ""
Read-Host "按 Enter 退出"

