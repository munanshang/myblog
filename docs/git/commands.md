---
title: Git 常用命令
description: 仓库初始化、提交、分支、远程与合并等日常命令速查
date: 2026-05-06
categories:
  - Git
tags:
  - 命令速查
  - 分支
  - 合并
article: true
---

# 常用命令

下列命令在仓库根目录或子目录执行均可（Git 会向上查找 `.git`）。

## 创建与克隆

| 场景 | 命令 |
|------|------|
| 当前目录初始化仓库 | `git init` |
| 克隆远程仓库 | `git clone <仓库 URL> [本地目录名]` |

## 状态与差异

| 场景 | 命令 |
|------|------|
| 查看工作区与暂存区状态 | `git status` |
| 查看未暂存改动 | `git diff` |
| 查看已暂存改动 | `git diff --staged` |
| 查看提交历史（简洁） | `git log --oneline --graph -n 20` |

## 提交

| 场景 | 命令 |
|------|------|
| 暂存单个文件 | `git add <路径>` |
| 暂存全部跟踪文件变更 | `git add -u` |
| 暂存所有（含新文件） | `git add .` |
| 提交 | `git commit -m "说明本次修改"` |
| 修改上一次提交说明（未推送时） | `git commit --amend` |

## 分支

| 场景 | 命令 |
|------|------|
| 列出本地分支 | `git branch` |
| 创建分支 | `git branch <分支名>` |
| 切换分支 | `git checkout <分支名>` 或 `git switch <分支名>` |
| 创建并切换 | `git checkout -b <分支名>` 或 `git switch -c <分支名>` |
| 删除已合并分支 | `git branch -d <分支名>` |

## 远程

| 场景 | 命令 |
|------|------|
| 查看远程 | `git remote -v` |
| 添加远程 | `git remote add origin <URL>` |
| 拉取并合并当前分支跟踪的远程 | `git pull` |
| 推送当前分支 | `git push` |
| 首次推送并建立跟踪 | `git push -u origin <分支名>` |

## 撤销与暂存

| 场景 | 命令 |
|------|------|
| 丢弃工作区对某文件的修改（危险） | `git checkout -- <文件>` 或 `git restore <文件>` |
| 取消暂存 | `git restore --staged <文件>` |
| 临时搁置未提交改动 | `git stash`；恢复 `git stash pop` |

## 合并与冲突

| 场景 | 命令 |
|------|------|
| 将分支 B 合并进当前分支 | `git merge <B>` |
| 冲突时：编辑文件去掉标记后 | `git add <文件>` → `git commit` |

冲突标记形如 `<<<<<<<`、`=======`、`>>>>>>>`，需人工保留正确内容再提交。

## 忽略文件

在仓库根目录创建 `.gitignore`，每行一个模式，例如：

```gitignore
node_modules/
dist/
.env
*.log
```

已跟踪的文件需先从索引移除再忽略：`git rm -r --cached <路径>`。

更多「为什么这样设计」见 [基础原理](./internals)。
