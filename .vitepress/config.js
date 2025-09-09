import { defineConfig } from 'vitepress'
import markdownItKatex from 'markdown-it-katex'

export default defineConfig({
  title: '我的学习笔记',
  description: '研究生课程学习笔记网站',
  base: '/study-notes/', // 替换为您的GitHub仓库名
  
  // 配置数学公式支持
  markdown: {
    config: (md) => {
      md.use(markdownItKatex)
    }
  },
  
  // 添加KaTeX CSS和自定义样式
  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css' }],
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.8/katex.min.css' }],
    ['link', { rel: 'stylesheet', href: '/custom.css' }]
  ],
  
  themeConfig: {
    // 网站logo
    logo: '/logo.svg',
    
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '课程列表', link: '/courses/' },
      { text: '关于', link: '/about' }
    ],
    
    // 侧边栏
    sidebar: [
      {
        text: '📚 课程导航',
        items: [
          { 
            text: '📊 数学与统计类', 
            items: [
              { text: '应用概率统计', link: '/courses/applied-probability-statistics/' },
              { text: '凸优化', link: '/courses/convex-optimization/' }
            ]
          },
          { 
            text: '💻 计算机科学类', 
            items: [
              { text: '算法设计与分析', link: '/courses/algorithm-design-analysis/' },
              { text: '高级机器学习', link: '/courses/advanced-machine-learning/' },
              { text: '深度学习', link: '/courses/deep-learning/' },
              { text: '现代图像处理技术', link: '/courses/modern-image-processing/' },
              { text: '智能计算系统', link: '/courses/intelligent-computing-systems/' }
            ]
          },
          { 
            text: '✍️ 学术技能类', 
            items: [
              { text: '学术论文写作', link: '/courses/academic-writing/' }
            ]
          }
        ]
      }
    ],
    
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/cmhwp/study-notes' }
    ],
    
    // 页脚
    footer: {
      message: '📖 基于 VitePress 构建的现代化学习笔记网站',
      copyright: 'Copyright © 2024 我的学习笔记 | 让学习更高效'
    },
    
    // 搜索配置
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索笔记',
            buttonAriaLabel: '搜索笔记'
          },
          modal: {
            noResultsText: '无法找到相关笔记',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
              searchByText: '搜索提供者'
            }
          }
        }
      }
    },
    
    // 编辑链接
    editLink: {
      pattern: 'https://github.com/cmhwp/study-notes/edit/main/:path',
      text: '在 GitHub 上编辑此页'
    },
    
    // 最后更新时间
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    
    // 大纲配置
    outline: {
      level: [2, 3],
      label: '页面导航'
    },
    
    // 返回顶部
    returnToTopLabel: '返回顶部',
    
    // 侧边栏菜单
    sidebarMenuLabel: '菜单',
    
    // 深色模式
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})
