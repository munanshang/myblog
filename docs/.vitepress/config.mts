// import {  } from 'vitepress'
import { defineConfig, getThemeConfig } from '@sugarat/theme/node'

const blogTheme = getThemeConfig({
  author: '目南殇',
  // 关闭博客模式
  // blog: false,
  // 关闭内置搜索
  // search: false,
  article: {
    // 不展示阅读时间
    readingTime: false,
  },
  // 页脚
    footer: {
      copyright: 'MIT License | 目南殇',
    },
  // 公告
  popover: {
    title: '公告',
    body: [
      { type: 'text', content: '欢迎加入开发者交流群：254222061' },
    ],
    duration: 5000,// 显示时间 ms
  }
})
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "目南殇的博客",
  description: "一名自由开发者",
  extends: blogTheme,
  themeConfig: {

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/docs' },
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/munanshang/myblog' }
    ],
    
  }
})
