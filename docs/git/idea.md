---
title: IntelliJ IDEA 集成 Git
description: 在 IDEA 中配置 Git、克隆仓库、提交、分支与合并冲突处理
date: 2026-05-05
categories:
  - Git
tags:
  - IntelliJ IDEA
  - IDE
  - 图形界面
article: true
---

# IntelliJ IDEA 集成 Git

以下以 **IntelliJ IDEA**（Ultimate / Community）为例；**WebStorm、PyCharm** 等同系 IDE 的 Git 入口与选项高度相似。

## 1. 确认本机已安装 Git

IDEA 只负责调用本机的 `git` 可执行文件。终端能跑 `git --version` 即可。

**指定 Git 路径**：`File → Settings`（macOS 为 `IntelliJ IDEA → Settings`）→ `Version Control → Git`，在 **Path to Git executable** 中填写 `git.exe` 或完整路径（Windows 常见为 `C:\Program Files\Git\bin\git.exe`），点击 **Test** 应显示版本号。

## 2. 从远程克隆

`File → New → Project from Version Control`，选择 **Git**，填入 URL：

- HTTPS：`https://github.com/用户/仓库.git`
- SSH：`git@github.com:用户/仓库.git`

选择本地目录后 **Clone**。首次用 SSH 若失败，先在本机终端完成 [SSH 免密](./ssh) 配置。

## 3. 日常界面入口

| 功能 | 常见入口 |
|------|----------|
| 提交 | 工具栏 **Commit**（或 `Ctrl+K` / `⌘K`） |
| 推送 / 拉取 | **Git → Push…** / **Git → Pull…** |
| 日志与分支 | 底栏 **Git** 工具窗口，或 **Git → Show Git Log** |
| 分支切换 / 新建 | 右下角分支名，或 **Git → Branches…** |

## 4. 提交（Commit）

- **Commit** 窗口左侧勾选要纳入本次提交的文件；可展开文件查看 diff。
- **Commit Message** 写清楚本次改动；团队若约定 [emoji 前缀](./commit-emoji)，在此书写即可。
- **Amend**：勾选 **Amend** 可修改最近一次提交（已推送的提交慎用，需团队规范允许）。

部分提交：只勾选部分文件或部分 hunk（在 diff 里用 **Include** 片段级暂存）。

## 5. 合并与冲突

拉取或合并产生冲突时，IDEA 会标出冲突文件。打开文件可见 **Accept Yours / Accept Theirs / Merge…** 等操作；也可用内置 **三栏合并工具** 逐段选择。

处理完后将文件标记为已解决并继续完成合并提交。

## 6. 建议写入 .gitignore 的内容

IDEA 会在项目下生成 **`.idea/`** 与若干个人化文件。若团队不共享整套 `.idea`，可忽略：

```gitignore
.idea/
*.iml
out/
```

若团队**统一共享**部分运行配置，可只忽略敏感或个人子目录，按团队约定即可。

## 7. 终端与 IDEA 双开

IDEA 内置 **Terminal** 与系统 Git 一致；命令行与图形界面操作同一仓库无冲突，注意不要同时对同一文件做冲突编辑即可。

命令行速查见 [常用命令](./commands)。
