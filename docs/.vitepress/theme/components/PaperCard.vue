<template>
  <div class="paper-card">
    <!-- 标题 -->
    <div class="paper-title">{{ title }}</div>
    
    <!-- 元数据区域 (DOI & Journal) -->
    <div class="paper-metadata">
      <code class="paper-info">
        DOI: <a :href="'https://doi.org/' + doi" target="_blank">{{ doi }}</a>
      </code>
      <code class="paper-info">
        Journal: <a :href="journalUrl" target="_blank">{{ journal }}</a>
      </code>
    </div>
    
    <!-- 摘要区域 -->
    <div class="abstract-container">
      <p :class="['paper-abstract', { 'collapsed': isCollapsed }]">
        {{ abstract }}
      </p>
      
      <button class="toggle-btn" @click="isCollapsed = !isCollapsed">
        {{ isCollapsed ? '显示摘要全部' : '收起摘要' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 1. 在这里增加 journal 和 journalUrl 的定义
defineProps({
  title: String,
  doi: String,
  journal: String,
  journalUrl: String, // 建议增加一个跳转到期刊官网的链接
  abstract: String
})

const isCollapsed = ref(true)
</script>

<style scoped>
.paper-card {
  margin: 1.5rem 0;
  padding: 1.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background-color: var(--vp-c-bg-soft);
  background:
    linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.7)
    );
}

.paper-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  color: var(--vp-c-text-1);
}

/* 2. 新增元数据容器样式，让 DOI 和 Journal 分行或整齐排列 */
.paper-metadata {
  display: flex;
  flex-direction: column; /* 纵向排列，如果想横向可以改回 row */
  gap: 4px;
  margin-bottom: 1.2rem;
}

.paper-info {
  font-size: 0.85rem;
  color: var(--vp-c-text-3);
  background: transparent;
  padding: 0;
}

.paper-info a {
  color: var(--vp-c-brand-1);
  text-decoration: none;
}

.paper-info a:hover {
  text-decoration: underline;
}

.paper-abstract {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
  margin-bottom: 8px;
  transition: all 0.3s ease;
  overflow: hidden;
  border-top: 1px dashed var(--vp-c-divider);
  padding-top: 0.8rem;
}

.paper-abstract.collapsed {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.toggle-btn {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
}
</style>