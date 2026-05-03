// .vitepress/teekConfig.mts
import { defineTeekConfig } from "vitepress-theme-teek/config";

// Teek 主题配置，所有 Teek 配置都放到 ... 中
export const teekConfig = defineTeekConfig({
  author: {
    name: '目南殇',
    link: '',
  },
  blogger: {
    name: "目南殇", // 博主昵称
    slogan: "记录学习与思考", // 博主签名
    avatar: "http://q2.qlogo.cn/headimg_dl?dst_uin=23429056&spec=640", // 博主头像
    shape: "circle-rotate", // 头像风格：square 为方形头像，circle 为圆形头像，circle-rotate 可支持鼠标悬停旋转，circle-rotate-last 将会持续旋转 59s
    circleBgImg: "/blog/bg4.webp", // 背景图片
    circleBgMask: true, // 遮罩层是否显示，仅当 shape 为 circle 且 circleBgImg 配置时有效
    circleSize: 100, // 头像大小
    color: "#000000", // 字体颜色
    // 状态，仅当 shape 为 circle 相关值时有效
    status: {
      icon: "😪", // 状态图标
      size: 24, // 图标大小
      title: "困", // 鼠标悬停图标的提示语
    },
  },
  /** 首页个人信息卡片下方；社交 SVG 需 iconType: "symbol"，否则会被当成字体 class 导致显示异常 */
  social: [
    {
      name: "GitHub",
      icon: "icon-github",
      iconType: "symbol",
      link: "https://github.com/munanshang",
    },
  ],
  banner: {
    enabled: true, // 是否启用 Banner
    name: "目南殇 Blog", // Banner 标题，默认读取 vitepress 的 title 属性
    bgStyle: "fullImg", // Banner 背景风格：pure 为纯色背景，partImg 为局部图片背景，fullImg 为全屏图片背景
    pureBgColor: "#28282d", // Banner 背景色，bgStyle 为 pure 时生效
    imgSrc: ["/img/bg1.jpg"], // Banner 图片链接。bgStyle 为 partImg 或 fullImg 时生效
    imgInterval: 15000, // 当多张图片时（imgSrc 为数组），设置切换时间，单位：毫秒
    imgShuffle: false, // 图片是否随机切换，为 false 时按顺序切换，bgStyle 为 partImg 或 fullImg 时生效
    imgWaves: true, // 是否开启 Banner 图片波浪纹，bgStyle 为 fullImg 时生效
    mask: true, // Banner 图片遮罩，bgStyle 为 partImg 或 fullImg 时生效
    maskBg: "rgba(0, 0, 0, 0.4)", // Banner 遮罩颜色，如果为数字，则是 rgba(0, 0, 0, ${maskBg})，如果为字符串，则作为背景色。bgStyle 为 partImg 或 fullImg 且 mask 为 true 时生效
    textColor: "#ffffff", // Banner 字体颜色，bgStyle 为 pure 时为 '#000000'，其他为 '#ffffff'
    titleFontSize: "3.2rem", // 标题字体大小
    descFontSize: "1.4rem", // 描述字体大小
    descStyle: "types", // 描述信息风格：default 为纯文字渲染风格（如果 description 为数组，则取第一个），types 为文字打印风格，switch 为文字切换风格
    description: ["故事由我书写，旅程由你见证，传奇由她聆听 —— 来自 Young Kbt", "积跬步以至千里，致敬每个爱学习的你 —— 来自 Evan Xu"], // 描述信息
    switchTime: 4000, // 描述信息切换间隔时间，单位：毫秒。descStyle 为 switch 时生效
    switchShuffle: false, // 描述信息是否随机切换，为 false 时按顺序切换。descStyle 为 switch 时生效
    typesInTime: 200, // 输出一个文字的时间，单位：毫秒。descStyle 为 types 时生效
    typesOutTime: 100, // 删除一个文字的时间，单位：毫秒。descStyle 为 types 时生效
    typesNextTime: 800, // 打字与删字的间隔时间，单位：毫秒。descStyle 为 types 时生效
    typesShuffle: false, // 描述信息是否随机打字，为 false 时按顺序打字，descStyle 为 types 时生效
  },

  /** 首页「文章分类」卡片与 /categories 聚合页 */
  category: {
    path: "/categories",
    homeTitle: "文章分类",
    pageTitle: "全部分类",
    moreLabel: "更多 …",
    emptyLabel: "暂无文章分类",
    limit: 8,
  },
  /** 首页「热门标签」卡片与 /tags 聚合页 */
  tag: {
    path: "/tags",
    homeTitle: "热门标签",
    pageTitle: "全部标签",
    moreLabel: "更多 …",
    emptyLabel: "暂无标签",
    limit: 24,
  },
  post: {
    postStyle: "list", // 文章列表风格
    excerptPosition: "bottom", // 文章摘要位置
    showMore: true, // 是否显示更多按钮
    moreLabel: "阅读全文 >", // 更多按钮文字
    emptyLabel: "暂无文章", // 文章列表为空时的标签
    coverImgMode: "default", // 文章封面图模式
    showCapture: true, // 是否在摘要位置显示文章部分文字，当为 true 且不使用 frontmatter.describe 和 <!-- more --> 时，会自动截取前 300 个字符作为摘要
    splitSeparator: true, // 文章信息（作者、创建时间、分类、标签等信息）是否添加 | 分隔符
    transition: true, // 是否开启过渡动画
    transitionName: "tk-slide-fade", // 自定义过渡动画名称
    listStyleTitleTagPosition: "right", // 列表模式下的标题标签位置（postStyle 为 list）
    cardStyleTitleTagPosition: "left", // 卡片模式下的标题标签位置（postStyle 为 card）
    defaultCoverImg: [], // 默认封面图地址，如果不设置封面图则使用默认封面图地址
  },
  page: {
    disabled: false, // 是否禁用
    pageSize: 20, // 每页显示条目数
    pagerCount: 7, // 设置最大页码按钮数。 页码按钮的数量，当总页数超过该值时会折叠
    layout: "prev, pager, next, jumper, ->, total", // 组件布局，子组件名用逗号分隔
    size: "default", // 分页大小
    background: false, // 是否为分页按钮添加背景色
    hideOnSinglePage: false, // 只有一页时是否隐藏
    // ...
  },
  footerInfo: {
    copyright: {
      createYear: 2026,
      suffix: "目南殇",
    },
  },
});