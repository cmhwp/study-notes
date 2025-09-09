# 我的学习笔记

这是一个基于 VitePress 构建的研究生课程学习笔记网站。

## 功能特性

- 📚 多课程笔记管理
- 🔍 本地搜索功能
- 📱 响应式设计
- ⚡ 快速构建和部署
- 🎨 现代化界面

## 本地开发

### 环境要求

- Node.js 16+ 
- npm 或 yarn

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 部署到 GitHub Pages

### 1. 创建 GitHub 仓库

1. 在 GitHub 上创建一个新仓库，命名为 `study-notes`
2. 将本地代码推送到 GitHub：

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/你的用户名/study-notes.git
git push -u origin main
```

### 2. 配置 GitHub Pages

1. 进入仓库的 Settings 页面
2. 在左侧菜单中找到 "Pages"
3. 在 "Source" 部分选择 "GitHub Actions"
4. 保存设置

### 3. 更新配置

在 `.vitepress/config.js` 中更新以下配置：

```javascript
export default defineConfig({
  base: '/study-notes/', // 替换为您的仓库名
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/你的用户名/study-notes' }
    ]
  }
})
```

### 4. 自动部署

推送代码到 main 分支后，GitHub Actions 会自动：
1. 安装依赖
2. 构建 VitePress 网站
3. 部署到 GitHub Pages

部署完成后，您的网站将在以下地址访问：
`https://你的用户名.github.io/study-notes/`

## 项目结构

```
study-notes/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions 部署配置
├── .vitepress/
│   └── config.js               # VitePress 配置
├── courses/                    # 课程笔记目录
│   ├── academic-writing/
│   ├── advanced-machine-learning/
│   ├── algorithm-design-analysis/
│   ├── applied-probability-statistics/
│   ├── convex-optimization/
│   ├── deep-learning/
│   ├── intelligent-computing-systems/
│   └── modern-image-processing/
├── index.md                    # 首页
├── package.json
└── README.md
```

## 添加新课程

1. 在 `courses/` 目录下创建新的课程文件夹
2. 在文件夹中创建 `index.md` 文件
3. 在 `.vitepress/config.js` 的 sidebar 配置中添加新课程链接
4. 在首页 `index.md` 中添加课程介绍

## 许可证

MIT License
