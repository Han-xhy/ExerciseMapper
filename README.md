# 锻炼计划生成器 - 使用说明

## 如何在其他电脑上打开网页

### 方法一：使用 Python 简单服务器（推荐）

1. **在当前电脑上启动服务器**：
   - 打开命令行（CMD 或 PowerShell）
   - 进入项目文件夹：
     ```bash
     cd "C:\Users\42049\OneDrive\桌面\ExerciseMapper"
     ```
   - 启动服务器：
     ```bash
     # Python 3
     python -m http.server 8000
     
     # 或者 Python 2
     python -m SimpleHTTPServer 8000
     ```

2. **查看本机 IP 地址**：
   - 在命令行输入：
     ```bash
     ipconfig
     ```
   - 找到 "IPv4 地址"，例如：`192.168.1.100`

3. **在其他电脑上访问**：
   - 确保两台电脑在同一局域网（同一 WiFi）
   - 在其他电脑的浏览器中输入：
     ```
     http://你的IP地址:8000
     ```
     例如：`http://192.168.1.100:8000`

### 方法二：使用 Node.js http-server

1. **安装 http-server**（如果已安装 Node.js）：
   ```bash
   npm install -g http-server
   ```

2. **启动服务器**：
   ```bash
   cd "C:\Users\42049\OneDrive\桌面\ExerciseMapper"
   http-server -p 8000
   ```

3. **访问方式同方法一**

### 方法三：部署到 GitHub Pages（推荐 - 可在任何 WiFi 下访问）⭐

这是最简单且免费的方法，部署后可以在任何地方、任何网络环境下访问。

#### 详细步骤：

1. **注册/登录 GitHub**：
   - 访问 https://github.com
   - 如果没有账号，先注册一个（免费）

2. **创建新仓库**：
   - 点击右上角 "+" → "New repository"
   - 仓库名称：例如 `exercise-mapper` 或 `workout-planner`
   - 选择 "Public"（公开，才能免费使用 Pages）
   - 不要勾选 "Initialize this repository with a README"
   - 点击 "Create repository"

3. **上传项目文件**：
   
   **方法 A：使用自动化脚本（最简单）⭐**
   - 在项目文件夹中，右键点击 `setup-and-upload.ps1`
   - 选择 "使用 PowerShell 运行"
   - 按照提示操作即可
   - 脚本会自动配置 Git、添加文件、提交并推送
   
   **方法 B：使用 GitHub 网页上传**
   - 在新建的仓库页面，点击 "uploading an existing file"
   - 将以下文件拖拽上传：
     - `index.html`
     - `app.js`
     - `styles.css`
     - `健身肌肉图解.jpg`
   - 在底部输入提交信息，点击 "Commit changes"

   **方法 C：使用 Git 命令行**
   ```bash
   # 在项目文件夹中打开 PowerShell
   # 首次使用需要配置 Git 用户信息
   git config --global user.name "你的名字"
   git config --global user.email "你的邮箱"
   
   # 添加所有文件
   git add .
   
   # 提交
   git commit -m "Initial commit: Workout Planner"
   
   # 添加远程仓库（替换为你的仓库地址）
   git remote add origin https://github.com/你的用户名/仓库名.git
   
   # 推送到 GitHub
   git branch -M main
   git push -u origin main
   ```

4. **启用 GitHub Pages**：
   - 进入仓库页面，点击 "Settings"（设置）
   - 在左侧菜单找到 "Pages"
   - 在 "Source" 下选择分支：`main` 或 `master`
   - 文件夹选择：`/ (root)`
   - 点击 "Save"

5. **访问你的网站**：
   - 等待 1-2 分钟，GitHub 会生成访问地址
   - 地址格式：`https://你的用户名.github.io/仓库名/`
   - 例如：`https://xhy-han.github.io/exercise-mapper/`
   - **现在可以在任何设备、任何网络下访问了！**

#### 更新网站内容：

**方法一：使用自动化脚本（推荐）⭐**
- 在项目文件夹中，右键点击 `update-github.ps1`
- 选择 "使用 PowerShell 运行"
- 按照提示输入提交信息
- 脚本会自动提交并推送到 GitHub

**方法二：使用 Git 命令行**
```bash
# 1. 添加所有更改的文件
git add .

# 2. 提交更改（替换为你的更新描述）
git commit -m "更新内容描述，例如：添加一键分享功能"

# 3. 推送到 GitHub
git push

# 如果是首次推送，使用：
git push -u origin main
```

**方法三：使用 GitHub 网页**
- 在 GitHub 仓库页面，点击文件
- 点击编辑按钮（铅笔图标）
- 修改内容后，在底部输入提交信息
- 点击 "Commit changes"

**更新后：**
- GitHub Pages 会自动重新部署（通常需要 1-2 分钟）
- 访问你的网站地址查看更新效果
- 可以在仓库的 "Actions" 标签查看部署状态

### 方法四：使用其他静态网站托管服务

#### Netlify（推荐，比 GitHub Pages 更快）

1. 访问 https://www.netlify.com
2. 注册/登录账号
3. 将项目文件夹拖拽到页面上的部署区域
4. 立即获得一个访问地址，例如：`https://your-site.netlify.app`
5. 支持自定义域名

#### Vercel

1. 访问 https://vercel.com
2. 连接 GitHub 账号
3. 导入你的仓库
4. 自动部署，获得访问地址

#### Cloudflare Pages

1. 访问 https://pages.cloudflare.com
2. 连接 GitHub 仓库
3. 自动部署，全球 CDN 加速

### 方法五：使用内网穿透工具（临时访问）

如果需要临时让外网访问本地服务器，可以使用：

#### ngrok（最简单）

1. 注册账号：https://ngrok.com
2. 下载 ngrok
3. 启动本地服务器（如 `python -m http.server 8000`）
4. 运行：`ngrok http 8000`
5. 获得一个临时公网地址，例如：`https://xxxx.ngrok.io`
6. ⚠️ 免费版地址每次重启都会变化

#### frp（自建服务器）

需要有自己的服务器，配置较复杂，适合长期使用。

### 方法五：直接复制文件（最简单，但功能受限）

1. **复制整个文件夹**到其他电脑
2. **直接双击 `index.html`** 打开
   - ⚠️ 注意：某些浏览器可能因为安全限制无法正常加载本地文件
   - 建议使用 Chrome 或 Edge 浏览器

## 本地开发

### 直接打开
- 双击 `index.html` 文件即可在浏览器中打开

### 使用本地服务器（推荐）
- 使用上述方法一或方法二启动本地服务器
- 在浏览器访问 `http://localhost:8000`

## 文件说明

- `index.html` - 主页面
- `app.js` - 应用逻辑
- `styles.css` - 样式文件
- `健身肌肉图解.jpg` - 肌肉图解图片

## 注意事项

- 如果使用局域网访问，确保防火墙允许端口 8000
- 如果使用 GitHub Pages，图片路径需要确保正确
- 数据存储在浏览器的 LocalStorage 中，不同电脑的数据不会同步

