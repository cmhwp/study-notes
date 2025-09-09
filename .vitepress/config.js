import { defineConfig } from 'vitepress'
import mathjax3 from 'markdown-it-mathjax3'

const customElements = [
  'mjx-container',
  'mjx-assistive-mml',
  'math',
  'maction',
  'maligngroup',
  'malignmark',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mi',
  'mlongdiv',
  'mmultiscripts',
  'mn',
  'mo',
  'mover',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'ms',
  'mscarries',
  'mscarry',
  'mscarries',
  'msgroup',
  'mstack',
  'mlongdiv',
  'msline',
  'mstyle',
  'msub',
  'msup',
  'msubsup',
  'mtable',
  'mtd',
  'mtext',
  'mtr',
  'munder',
  'munderover',
  'semantics',
  'math',
  'mi',
  'mn',
  'mo',
  'ms',
  'mspace',
  'mtext',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'msqrt',
  'mstyle',
  'mmultiscripts',
  'mover',
  'mprescripts',
  'msub',
  'msubsup',
  'msup',
  'munder',
  'munderover',
  'mlongdiv',
  'mscarries',
  'mscarry',
  'msgroup',
  'msline',
  'mstack',
  'mtable',
  'mtd',
  'mtr',
  'mlabeledtr',
  'maligngroup',
  'malignmark',
  'maction',
  'semantics',
  'annotation',
  'annotation-xml'
]

export default defineConfig({
  title: '我的学习笔记',
  description: '研究生课程学习笔记网站',
  base: '/study-notes/', // 替换为您的GitHub仓库名
  
  markdown: {
    config: (md) => {
      md.use(mathjax3)
    }
  },
  
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag)
      }
    }
  },
  
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '课程列表', link: '/courses/' }
    ],
    
    sidebar: [
      {
        text: '课程导航',
        items: [
          { text: '数学与统计类', items: [
            { text: '应用概率统计', link: '/courses/applied-probability-statistics/' },
            { text: '凸优化', link: '/courses/convex-optimization/' }
          ]},
          { text: '计算机科学类', items: [
            { text: '算法设计与分析', link: '/courses/algorithm-design-analysis/' },
            { text: '高级机器学习', link: '/courses/advanced-machine-learning/' },
            { text: '深度学习', link: '/courses/deep-learning/' },
            { text: '现代图像处理技术', link: '/courses/modern-image-processing/' },
            { text: '智能计算系统', link: '/courses/intelligent-computing-systems/' }
          ]},
          { text: '学术技能类', items: [
            { text: '学术论文写作', link: '/courses/academic-writing/' }
          ]}
        ]
      }
    ],
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/cmhwp/study-notes' } // 替换为您的GitHub链接
    ],
    
    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © 2024 我的学习笔记'
    },
    
    search: {
      provider: 'local'
    }
  }
})
