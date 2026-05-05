import { defineConfig } from 'vitepress'
import { teekConfig } from './teekConfig.mts'


export default defineConfig({
  extends: teekConfig,
  title: '目南殇的个人博客',
  description: '目南殇的个人博客',
  lang: 'zh-CN',
  cleanUrls: true,
  head: [
    [
      'script',
      {},
      `window.addEventListener('views', function(e) {
  var d = e.detail;
  if (!d || !d.today) return;
  var items = document.querySelectorAll('.tk-doc-analysis__item');
  items.forEach(function(item) {
    var spans = item.querySelectorAll('span');
    if (spans.length < 2) return;
    var label = (spans[0].textContent || '').trim();
    if (label === '今日访问量') spans[1].textContent = d.today.site_pv + ' 次';
    else if (label === '今日访客数') spans[1].textContent = d.today.site_uv + ' 人';
  });
});`,
    ],
  ],
  themeConfig: {
    siteTitle: '目南殇 Blog',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '工具',
        items: [
          { text: 'Git', link: '/git' },
        ],
      },
      { text: '关于', link: '/about' },
    ],
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    outline: {
      label: '大纲',
    },
    sidebar: {
      '/git/': [
        {
          text: 'Git',
          items: [
            { text: '目录', link: '/git/' },
            { text: '介绍与安装', link: '/git/intro' },
            { text: 'SSH 免密登录', link: '/git/ssh' },
            { text: 'IDEA 集成', link: '/git/idea' },
            { text: '常用命令', link: '/git/commands' },
            { text: '基础原理', link: '/git/internals' },
            { text: '自建代码托管', link: '/git/self-hosted' },
            { text: 'Commit 表情', link: '/git/commit-emoji' },
          ],
        },
      ],
    },
  },
})
