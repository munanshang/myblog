---
hidden: true
---
# 技术工具专栏
记录日常开发中常用工具的使用技巧、避坑指南，帮你提升开发效率。

## 文章列表

<script setup>
// 1. 导入当前目录下所有 .md 文件（包含 Frontmatter 数据）
const modules = import.meta.glob('./*.md', { 
  eager: true, 
  import: 'default' 
})

// 2. 处理文章数据（初始化正确的数组变量）
const articles = []  // 修正：将 articlesticles 改为 articles
// 遍历所有导入的文件
for (const [path, meta] of Object.entries(modules)) {
  // 跳过当前 index.md 自身
  if (path === './index.md') continue;

  // 提取文件名（用于链接）
  const filename = path.replace('./', '')

  // 3. 读取 Frontmatter 中的 title
  const title = meta?.title || filename.replace('.md', '').replace(/-/g, ' ')

  articles.push({ filename, title })  // 这里也同步修正变量名
}

// 按标题字母排序（可选）
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
