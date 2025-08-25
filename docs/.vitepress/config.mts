import { defineConfig, getThemeConfig } from '@sugarat/theme/node'

const blogTheme = getThemeConfig({
    author: '目南殇',
    search: {
        btnPlaceholder: '搜索',
        placeholder: '搜索文档',
        emptyText: '没有搜索到相关内容',
        heading: '搜索到 {{searchResult}} 条相关内容'
    },
    // 公告
    popover: {
        title: '公告',
        body: [
            { type: 'text', content: '欢迎加入开发者交流群：254222061' },
        ],
        duration: 5000,// 显示时间 ms
    },
    friend: {
        list: [
            {
                nickname: '粥里有勺糖',
                des: '你的指尖用于改变世界的力量',
                avatar:
                    'https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030',
                url: 'https://sugarat.top'
            },
            {
                nickname: 'Vitepress',
                des: 'Vite & Vue Powered Static Site Generator',
                avatar:
                    'https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTI2NzY1Ng==674995267656',
                url: 'https://vitepress.dev/'
            }
        ],
        random: true,
        limit: 3,
    },
    comment: {
        type: 'artalk',
        options: {
            server: 'https://artalk.aocng.com',
            site: '我的博客'
        },
        mobileMinify: false
    }
})
// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: 'zh-CN',
    title: "目南殇的博客",
    description: "一名自由开发者",
    cleanUrls: true,
    extends: blogTheme,
    // lastUpdated: true,
    themeConfig: {
        logo: './avatar.png',
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: '首页', link: '/' }
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
        editLink: {
            pattern: 'https://github.com/munanshang/myblog/:path',
            text: '在 GitHub 上编辑此页'
        },
        lastUpdated: {
            text: '最后更新于',
            formatOptions: {
                dateStyle: 'full',
                timeStyle: 'medium'
            }
        }

    }
})
