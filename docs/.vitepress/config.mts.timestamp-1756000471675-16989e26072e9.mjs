// docs/.vitepress/config.mts
import { defineConfig } from "file:///E:/project/VitePress/my_blog/node_modules/vitepress/dist/node/index.js";
import { getThemeConfig } from "file:///E:/project/VitePress/my_blog/node_modules/@sugarat/theme/node.mjs";
var blogTheme = getThemeConfig({});
var config_default = defineConfig({
  title: "\u76EE\u5357\u6B87\u7684\u535A\u5BA2",
  description: "\u4E00\u540D\u81EA\u7531\u5F00\u53D1\u8005",
  extends: blogTheme,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" }
    ],
    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" }
        ]
      }
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" }
    ],
    // 页脚
    footer: {
      copyright: "MIT License | \u76EE\u5357\u6B87"
    },
    // 公告
    popover: {
      title: "\u516C\u544A",
      body: [
        { type: "text", content: "\u8FD9\u662F\u4E00\u6761\u516C\u544A" }
      ]
    }
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy5tdHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxwcm9qZWN0XFxcXFZpdGVQcmVzc1xcXFxteV9ibG9nXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxccHJvamVjdFxcXFxWaXRlUHJlc3NcXFxcbXlfYmxvZ1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnLm10c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovcHJvamVjdC9WaXRlUHJlc3MvbXlfYmxvZy9kb2NzLy52aXRlcHJlc3MvY29uZmlnLm10c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGVwcmVzcydcbmltcG9ydCB7IGdldFRoZW1lQ29uZmlnIH0gZnJvbSAnQHN1Z2FyYXQvdGhlbWUvbm9kZSdcblxuY29uc3QgYmxvZ1RoZW1lID0gZ2V0VGhlbWVDb25maWcoe30pXG4vLyBodHRwczovL3ZpdGVwcmVzcy5kZXYvcmVmZXJlbmNlL3NpdGUtY29uZmlnXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICB0aXRsZTogXCJcdTc2RUVcdTUzNTdcdTZCODdcdTc2ODRcdTUzNUFcdTVCQTJcIixcbiAgZGVzY3JpcHRpb246IFwiXHU0RTAwXHU1NDBEXHU4MUVBXHU3NTMxXHU1RjAwXHU1M0QxXHU4MDA1XCIsXG4gIGV4dGVuZHM6IGJsb2dUaGVtZSxcbiAgdGhlbWVDb25maWc6IHtcbiAgICAvLyBodHRwczovL3ZpdGVwcmVzcy5kZXYvcmVmZXJlbmNlL2RlZmF1bHQtdGhlbWUtY29uZmlnXG4gICAgbmF2OiBbXG4gICAgICB7IHRleHQ6ICdIb21lJywgbGluazogJy8nIH0sXG4gICAgICB7IHRleHQ6ICdFeGFtcGxlcycsIGxpbms6ICcvbWFya2Rvd24tZXhhbXBsZXMnIH1cbiAgICBdLFxuXG4gICAgc2lkZWJhcjogW1xuICAgICAge1xuICAgICAgICB0ZXh0OiAnRXhhbXBsZXMnLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHsgdGV4dDogJ01hcmtkb3duIEV4YW1wbGVzJywgbGluazogJy9tYXJrZG93bi1leGFtcGxlcycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdSdW50aW1lIEFQSSBFeGFtcGxlcycsIGxpbms6ICcvYXBpLWV4YW1wbGVzJyB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdLFxuXG4gICAgc29jaWFsTGlua3M6IFtcbiAgICAgIHsgaWNvbjogJ2dpdGh1YicsIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vdnVlanMvdml0ZXByZXNzJyB9XG4gICAgXSxcbiAgICAvLyBcdTk4NzVcdTgxMUFcbiAgICBmb290ZXI6IHtcbiAgICAgIGNvcHlyaWdodDogJ01JVCBMaWNlbnNlIHwgXHU3NkVFXHU1MzU3XHU2Qjg3JyxcbiAgICB9LFxuICAgIC8vIFx1NTE2Q1x1NTQ0QVxuICAgIHBvcG92ZXI6IHtcbiAgICAgIHRpdGxlOiAnXHU1MTZDXHU1NDRBJyxcbiAgICAgIGJvZHk6IFtcbiAgICAgICAge3R5cGU6ICd0ZXh0JywgY29udGVudDogJ1x1OEZEOVx1NjYyRlx1NEUwMFx1Njc2MVx1NTE2Q1x1NTQ0QSd9XG4gICAgICBdXG4gICAgfVxuICB9XG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEwVCxTQUFTLG9CQUFvQjtBQUN2VixTQUFTLHNCQUFzQjtBQUUvQixJQUFNLFlBQVksZUFBZSxDQUFDLENBQUM7QUFFbkMsSUFBTyxpQkFBUSxhQUFhO0FBQUEsRUFDMUIsT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBQ2IsU0FBUztBQUFBLEVBQ1QsYUFBYTtBQUFBO0FBQUEsSUFFWCxLQUFLO0FBQUEsTUFDSCxFQUFFLE1BQU0sUUFBUSxNQUFNLElBQUk7QUFBQSxNQUMxQixFQUFFLE1BQU0sWUFBWSxNQUFNLHFCQUFxQjtBQUFBLElBQ2pEO0FBQUEsSUFFQSxTQUFTO0FBQUEsTUFDUDtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFVBQ0wsRUFBRSxNQUFNLHFCQUFxQixNQUFNLHFCQUFxQjtBQUFBLFVBQ3hELEVBQUUsTUFBTSx3QkFBd0IsTUFBTSxnQkFBZ0I7QUFBQSxRQUN4RDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFFQSxhQUFhO0FBQUEsTUFDWCxFQUFFLE1BQU0sVUFBVSxNQUFNLHFDQUFxQztBQUFBLElBQy9EO0FBQUE7QUFBQSxJQUVBLFFBQVE7QUFBQSxNQUNOLFdBQVc7QUFBQSxJQUNiO0FBQUE7QUFBQSxJQUVBLFNBQVM7QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxRQUNKLEVBQUMsTUFBTSxRQUFRLFNBQVMsdUNBQVE7QUFBQSxNQUNsQztBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
