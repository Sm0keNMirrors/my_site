import { h } from 'vue' // 必须导入 h
import DefaultTheme from 'vitepress/theme'
import RainBackground from './components/RainBackground.vue' // 引入
import './custom.css' // 引入你的自定义样式

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // 使用插槽将背景注入布局
      'layout-top': () => h(RainBackground)
    })
  }
}