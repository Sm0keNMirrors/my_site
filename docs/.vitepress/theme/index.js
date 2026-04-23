import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import RainBackground from './components/RainBackground.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  
  // 1. 保留你原有的 Layout 配置
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => h(RainBackground),
    })
  },

  // 2. 在这里添加增强逻辑，处理路由跳转时的平滑过渡
  enhanceApp({ router }) {
    if (typeof window === 'undefined') return

    // 拦截路由切换，触发浏览器 View Transition API
    router.onBeforeRouteChange = (to) => {
      // 如果浏览器不支持该 API 或用户偏好减少动画，直接跳过
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
  }
}