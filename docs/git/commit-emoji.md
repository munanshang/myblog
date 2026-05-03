---
title: Commit 常用表情（Gitmoji 风格）
description: 在提交说明前用 emoji 标示改动类型，便于扫日志
date: 2026-05-09
categories:
  - Git
tags:
  - Gitmoji
  - Commit
  - 提交规范
article: true
---

# Commit 常用表情

在 **commit message** 开头加一个 **emoji**（或 emoji + 空格 + 文字），扫 `git log` 时能快速分辨提交类型。常见做法参考开源约定 **Gitmoji**（<https://gitmoji.dev/>），团队也可自定表。

下列为日常高频用法，**不必全记**，复制常用几条即可。

## 类型与示例

| Emoji | 含义 | 示例说明 |
|:-----:|------|----------|
| ✨ `:sparkles:` | 新功能 | `✨ 用户登录支持验证码` |
| 🐛 `:bug:` | 修 Bug | `🐛 修复列表分页总数错误` |
| 📝 `:memo:` | 文档 / 注释 | `📝 补充 API 参数说明` |
| 💄 `:lipstick:` | 样式 / UI（无逻辑大改） | `💄 调整按钮间距` |
| ♻️ `:recycle:` | 重构（行为不变） | `♻️ 抽取订单校验为独立模块` |
| ⚡ `:zap:` | 性能优化 | `⚡ 列表查询加索引与缓存` |
| 🔥 `:fire:` | 删除代码 / 文件 | `🔥 移除已废弃的 v1 接口` |
| 🚀 `:rocket:` | 部署 / CI / 构建相关 | `🚀 流水线增加镜像缓存` |
| ✅ `:white_check_mark:` | 增加或修正测试 | `✅ 为支付回调补单测` |
| 🔒 `:lock:` | 安全相关 | `🔒 修复依赖 CVE-xxxx` |
| ⬆️ `:arrow_up:` | 升级依赖 | `⬆️ 升级 vite 至 6.x` |
| ⬇️ `:arrow_down:` | 降级依赖 | `⬇️ 回退 xx 库版本以兼容 Node 18` |
| 🔧 `:wrench:` | 配置文件 / 脚本 | `🔧 统一 eslint 规则到根目录` |
| 🏷️ `:label:` | 类型 / 接口定义 | `🏷️ 补全用户信息 TS 类型` |
| 🚧 `:construction:` | 进行中（半成品） | `🚧 订单导出接口骨架` |
| 💥 `:boom:` | **破坏性变更** | `💥 登录接口返回结构不兼容旧版` |
| 🎨 `:art:` | 代码格式（仅风格） | `🎨 prettier 格式化 src/views` |
| 🔀 `:twisted_rightwards_arrows:` | 合并分支 | `🔀 合并 release/1.2 到 main` |

## 写法示例

```text
✨ 支持 Markdown 表格粘贴为 HTML
🐛 修复 Safari 下日期选择器错位
📝 在 README 中说明 Node 版本要求
```

一行主题 + 空行 + 正文（可选）仍适用 **Conventional Commits** 时，也有人写成：

```text
feat: ✨ 支持导出 CSV
```

以团队规范为准，**统一比「哪种更正统」更重要**。

## 在命令行输入 Emoji

- 直接粘贴图形字符；或  
- 打 `:sparkles:` 等形式（取决于终端与编辑器是否做替换）。  
- **IDEA**：提交窗口可直接选系统表情面板或粘贴。

## 参考链接

- Gitmoji 官方列表：<https://gitmoji.dev/>  
- Conventional Commits：<https://www.conventionalcommits.org/zh-hans/>
