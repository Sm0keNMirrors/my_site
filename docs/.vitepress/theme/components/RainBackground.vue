<template>
  <canvas ref="canvasRef" class="rain-canvas"></canvas>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const canvasRef = ref(null)
let animationId = null

onMounted(() => {
  const canvas = canvasRef.value
  const ctx = canvas.getContext('2d')
  
  // 适配屏幕尺寸
  const resize = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }
  window.addEventListener('resize', resize)
  resize()

  // 粒子设置
  const count = 100 // 雨滴数量
  const drops = Array.from({ length: count }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    speed: 5 + Math.random() * 10, // 下落速度
    length: 10 + Math.random() * 20 // 雨滴长度
  }))

  const draw = () => {
    // 每一帧画一个半透明黑矩形，产生“拖尾”效果
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)' 
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    ctx.strokeStyle = 'rgba(174, 194, 224, 0.5)' // 雨滴颜色
    ctx.lineWidth = 1
    ctx.lineCap = 'round'

    drops.forEach(drop => {
      ctx.beginPath()
      ctx.moveTo(drop.x, drop.y)
      ctx.lineTo(drop.x, drop.y + drop.length)
      ctx.stroke()

      // 更新位置
      drop.y += drop.speed
      // 越界重置
      if (drop.y > canvas.height) {
        drop.y = -drop.length
        drop.x = Math.random() * canvas.width
      }
    })
    animationId = requestAnimationFrame(draw)
  }

  draw()
})

onUnmounted(() => {
  cancelAnimationFrame(animationId)
  window.removeEventListener('resize', resize)
})
</script>

<style scoped>
.rain-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1; /* 置于底层 */
  pointer-events: none; /* 穿透点击 */
  background: transparent;
}
</style>