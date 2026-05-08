import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import RainBackground from './components/RainBackground.vue'
import PaperCard from './components/PaperCard.vue' 
import './custom.css'

export default {
  extends: DefaultTheme,

  // 核心修复：将所有的增强逻辑合并到一个 enhanceApp 中
  enhanceApp({ app, router }) {
    // 1. 注册全局组件
    app.component('PaperCard', PaperCard)

    // 2. 处理路由跳转动画 (仅在客户端运行)
    if (typeof window === 'undefined') return

    router.onBeforeRouteChange = (to) => {
      // 如果浏览器不支持 View Transition API，直接跳过
      if (!document.startViewTransition || 
          window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return
      }

      return new Promise((resolve) => {
        document.startViewTransition(async () => {
          resolve() // 继续执行路由跳转
        })
      })
    }
  },
  
  // Layout 配置保持不变
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => h(RainBackground),
    })
  }
}