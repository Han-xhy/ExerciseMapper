# GitHub 部署指南

## 步骤 1：在 GitHub 上创建仓库

1. 访问 https://github.com 并登录
2. 点击右上角 "+" → "New repository"
3. 填写信息：
   - Repository name: `workout-planner` (或你喜欢的名字)
   - Description: `锻炼计划生成器 - 一个帮助制定和管理锻炼计划的工具`
   - 选择 **Public** (公开，才能免费使用 Pages)
   - **不要**勾选 "Add a README file"
   - **不要**勾选 "Add .gitignore"
   - **不要**勾选 "Choose a license"
4. 点击 "Create repository"

## 步骤 2：复制仓库地址

创建后，GitHub 会显示仓库地址，类似：
```
https://github.com/你的用户名/workout-planner.git
```

## 步骤 3：执行以下命令

在 PowerShell 中执行（替换为你的仓库地址）：

```powershell
# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: 锻炼计划生成器"

# 添加远程仓库（替换为你的实际地址）
git remote add origin https://github.com/你的用户名/workout-planner.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

## 步骤 4：启用 GitHub Pages

1. 在 GitHub 仓库页面，点击 "Settings"
2. 左侧菜单找到 "Pages"
3. 在 "Source" 下：
   - Branch: 选择 `main`
   - Folder: 选择 `/ (root)`
4. 点击 "Save"

## 步骤 5：访问你的网站

等待 1-2 分钟，然后访问：
```
https://你的用户名.github.io/workout-planner/
```

## 后续更新

如果修改了文件，执行：

```powershell
git add .
git commit -m "更新内容描述"
git push
```

GitHub Pages 会自动更新（可能需要几分钟）。

