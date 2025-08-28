---
hidden: true
---
# 技术工具专栏
记录日常开发中常用工具的使用技巧、避坑指南，帮你提升开发效率。

## 文章列表

<script setup>
// 1. 导入当前目录下所有 .md 文件（默认导入，保留完整模块数据）
const modules = import.meta.glob('./*.md', { 
  eager: true 
})

const articles = []
for (const [path, module] of Object.entries(modules)) {
  // 跳过当前 index.md 自身
  if (path === './index.md') continue;

  // 2. 提取文件名（用于链接）
  const filename = path.replace('./', '')

  // 3. 从 sugarat 主题的 __pageData.frontmatter 中获取 title
  // 数据结构：module.__pageData.frontmatter.title
  const frontmatter = module.__pageData?.frontmatter;
  const title = frontmatter?.title || filename.replace('.md', '').replace(/-/g, ' ')

  articles.push({ filename, title })
}

// 按标题排序
articles.sort((a, b) => a.title.localeCompare(b.title))
</script>

<!-- 渲染链接列表 -->
<template v-if="articles.length === 0">
  <p>暂无文章，敬请期待～</p>
</template>
<ul v-else>
  <li v-for="article in articles" :key="article.filename" style="margin: 8px 0;">
    <a :href="article.filename" style="color: #42b983; text-decoration: none;">
      {{ article.title }}
    </a>
  </li>
</ul>