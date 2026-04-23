import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/my_site/',
  title: "Mahro Hektap",
  description: "SmokeNMirrors' Blog (Xian Yaohan)",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '科研成果', link: '/markdown-examples' },
      { text: '笔记资料', link: '/guide/test' },
      { text: '实用工具', link: '/guide/test' },
      { text: '独立游戏项目', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/guide/test' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
