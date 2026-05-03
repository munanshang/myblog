---
title: Git 介绍与安装
description: Git 是什么，以及在各平台上的安装与基础配置
date: 2026-05-03
categories:
  - Git
tags:
  - 安装
  - 入门
  - 版本控制
article: true
---

# 介绍与安装

## Git 是什么

Git 是**分布式版本控制系统**：在本地完整保留项目历史，可离线提交；与远程仓库同步后，多人能基于同一套历史协作、合并与回溯。

与「只存最新文件」的网盘不同，Git 记录的是**每次变更的快照（提交）**，因此可以对比差异、切换分支、撤销或拣选某次修改。

## 安装

### Windows

1. 打开 [Git for Windows](https://git-scm.com/download/win) 下载安装包。
2. 安装时若无特殊需求，可一路保持默认；建议勾选 **「Git from the command line and also from 3rd-party software」**，便于在终端里直接使用 `git`。
3. 安装完成后打开 **PowerShell** 或 **Git Bash**，执行 `git --version` 确认输出版本号。

### macOS

- **Homebrew**：`brew install git`
- 或安装 **Xcode Command Line Tools**：`xcode-select --install`（会附带较旧但可用的 Git）

终端执行 `git --version` 验证。

### Linux（Debian / Ubuntu）

```bash
sudo apt update
sudo apt install git
git --version
```

其他发行版可用对应包管理器安装 `git` 包。

## 首次配置（必做）

安装后请至少配置**用户名**和**邮箱**（会写入提交记录，便于识别作者）：

```bash
git config --global user.name "你的名字或昵称"
git config --global user.email "you@example.com"
```

查看当前配置：

```bash
git config --global --list
```

仅对当前仓库生效时，去掉 `--global` 并在该仓库目录下执行。

## 可选配置

- **默认分支名**（许多团队使用 `main`）：

  ```bash
  git config --global init.defaultBranch main
  ```

- **换行符**（Windows 与 Unix 协作时常见）：按需设置 `core.autocrlf`（`true` / `input` / `false`），团队内宜统一约定。

配置完成后，可进入 [常用命令](./commands) 创建第一个仓库并练习提交。
