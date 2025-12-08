# GitHub 更新脚本
# 使用方法：在 PowerShell 中运行：.\update-github.ps1

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "更新 GitHub 仓库" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# 检查是否有未提交的更改
$status = git status --porcelain
if (-not $status) {
    Write-Host "没有需要更新的文件" -ForegroundColor Yellow
    exit 0
}

Write-Host "检测到以下更改：" -ForegroundColor Yellow
git status --short
Write-Host ""

# 添加所有更改
Write-Host "正在添加所有更改..." -ForegroundColor Yellow
git add .

# 获取提交信息
Write-Host ""
$commitMsg = Read-Host "请输入提交信息（例如：添加一键分享到备忘录功能）"
if (-not $commitMsg) {
    $commitMsg = "更新文件"
}

# 提交更改
Write-Host ""
Write-Host "正在提交更改..." -ForegroundColor Yellow
git commit -m $commitMsg

if ($LASTEXITCODE -ne 0) {
    Write-Host "提交失败！" -ForegroundColor Red
    exit 1
}

# 检查远程仓库
$remoteUrl = git remote get-url origin 2>$null
if (-not $remoteUrl) {
    Write-Host ""
    Write-Host "未找到远程仓库！" -ForegroundColor Red
    $addRemote = Read-Host "是否添加远程仓库？(Y/N)"
    if ($addRemote -eq "Y" -or $addRemote -eq "y") {
        $repoUrl = Read-Host "请输入仓库地址（例如：https://github.com/用户名/仓库名.git）"
        if ($repoUrl) {
            git remote add origin $repoUrl
        } else {
            Write-Host "仓库地址不能为空！" -ForegroundColor Red
            exit 1
        }
    } else {
        exit 1
    }
}

# 检查当前分支
$currentBranch = git branch --show-current
if (-not $currentBranch) {
    Write-Host "当前不在任何分支上，切换到 main 分支..." -ForegroundColor Yellow
    git checkout -b main 2>$null
    $currentBranch = "main"
}

# 推送到 GitHub
Write-Host ""
Write-Host "正在推送到 GitHub..." -ForegroundColor Yellow
Write-Host ""

$pushResult = git push origin $currentBranch 2>&1

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "✅ 更新成功！" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "你的更改已推送到 GitHub" -ForegroundColor Cyan
    Write-Host "GitHub Pages 会自动更新（通常需要 1-2 分钟）" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "访问你的网站查看更新：" -ForegroundColor Yellow
    if ($remoteUrl) {
        $repoName = $remoteUrl -replace '.*github\.com/[^/]+/([^/]+)\.git', '$1'
        $userName = $remoteUrl -replace '.*github\.com/([^/]+)/.*', '$1'
        Write-Host "https://$userName.github.io/$repoName/" -ForegroundColor Yellow
    }
} else {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Red
    Write-Host "❌ 推送失败" -ForegroundColor Red
    Write-Host "========================================" -ForegroundColor Red
    Write-Host ""
    Write-Host "可能的原因：" -ForegroundColor Yellow
    Write-Host "1. 需要登录 GitHub（使用 GitHub Desktop 或配置 SSH 密钥）" -ForegroundColor White
    Write-Host "2. 远程仓库地址不正确" -ForegroundColor White
    Write-Host "3. 需要先拉取远程更改" -ForegroundColor White
    Write-Host ""
    Write-Host "如果这是首次推送，可能需要设置上游分支：" -ForegroundColor Cyan
    Write-Host "  git push -u origin $currentBranch" -ForegroundColor Gray
}

Write-Host ""
Read-Host "按 Enter 退出"

