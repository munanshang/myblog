---
title: Git 命令基础使用指南：从初始化到提交的完整流程
tag:
- Git
categorie:
- 技术工具
---
# Git 命令基础使用指南：从初始化到提交的完整流程


在日常开发中，Git 作为最流行的分布式版本控制系统，是协作和代码管理的必备工具。对于刚接触 Git 的开发者来说，掌握核心命令和基础流程，就能解决 80% 的版本控制需求。本文将从「仓库初始化」到「代码提交」，一步步拆解 Git 基础命令的使用场景和操作步骤，帮你快速上手 Git。


## 一、Git 环境准备：首次配置不可少
在使用 Git 前，需要先配置用户名和邮箱——这会关联到你的每一次代码提交，是身份标识的关键。打开终端，执行以下两条命令：
```bash
# 配置全局用户名（替换为你的名称，如 "Zhang San"）
git config --global user.name "Your Name"

# 配置全局邮箱（替换为你的邮箱，如 "zhangsan@example.com"）
git config --global user.email "your-email@example.com"
```
- 若加 `--global` 参数，配置会作用于所有本地 Git 仓库；若想针对单个仓库单独配置，进入仓库目录后去掉该参数即可。
- 验证配置是否成功：执行 `git config --list`，终端会列出所有配置项，确认 `user.name` 和 `user.email` 与输入一致即可。


## 二、核心流程：从“新建仓库”到“提交代码”
Git 的基础使用围绕「工作区→暂存区→本地仓库」的流转展开，对应的命令和步骤如下，建议跟着实操一遍（以新建一个 `my-project` 项目为例）。


### 步骤 1：初始化本地仓库（两种场景）
本地仓库是 Git 管理代码的核心，初始化仓库分「新建项目」和「关联已有远程仓库」两种场景。

#### 场景 1：本地新建项目，初始化 Git 仓库
如果你从零开始开发一个项目，先创建项目文件夹，再初始化 Git：
```bash
# 1. 创建项目文件夹并进入（替换为你的项目名）
mkdir my-project && cd my-project

# 2. 初始化 Git 仓库（执行后会生成隐藏的 .git 文件夹，存储仓库配置和版本记录）
git init
```
执行后终端会提示 `Initialized empty Git repository in /xxx/my-project/.git/`，表示仓库初始化成功。

#### 场景 2：关联远程仓库（如 GitHub/GitLab 上的已有项目）
如果项目已在远程仓库（如 GitHub）创建，需要将远程仓库克隆到本地：
```bash
# 克隆远程仓库（替换为你的远程仓库地址，HTTPS 或 SSH 格式均可）
git clone https://github.com/your-username/my-project.git

# 克隆后会自动生成与远程仓库同名的文件夹，进入该文件夹即可操作
cd my-project
```
- 远程地址获取：在 GitHub 仓库页面点击「Code」，复制 HTTPS 或 SSH 链接（SSH 需提前配置密钥，免密码登录更方便）。


### 步骤 2：查看文件状态，跟踪新文件
仓库初始化后，在 `my-project` 中新建一个文件（如 `index.html`），此时 Git 会将该文件标记为「未跟踪（Untracked）」——即未纳入版本控制。通过 `git status` 可查看文件状态：
```bash
# 查看当前仓库所有文件的状态
git status
```
终端会显示 `Untracked files: index.html`，此时需要用 `git add` 命令将文件“跟踪”起来，纳入暂存区：
```bash
# 场景 1：跟踪单个文件（替换为你的文件名）
git add index.html

# 场景 2：跟踪当前目录下所有未跟踪/修改的文件（开发中常用）
git add .

# 场景 3：跟踪指定类型的文件（如所有 .js 文件）
git add *.js
```
执行 `git add` 后，再次运行 `git status`，会看到文件状态变为「Changes to be committed」，表示文件已进入暂存区，等待提交到本地仓库。


### 步骤 3：提交代码到本地仓库
暂存区的文件需要通过 `git commit` 提交到本地仓库，形成一条版本记录。提交时必须填写「提交信息」，说明这次修改的内容（如“新增首页 index.html”）：
```bash
# 提交暂存区文件到本地仓库，-m 后接提交信息（信息要简洁明确）
git commit -m "feat: add index.html for homepage"
```
- 提交信息规范：建议遵循「类型: 描述」的格式（如 `feat` 表示新功能，`fix` 表示修复bug，`docs` 表示文档修改），方便后续查看版本记录时快速理解变更。
- 提交成功后，终端会显示提交的哈希值（如 `a1b2c3d`）、修改的文件数和行数，例如：
  ```
  [main (root-commit) a1b2c3d] feat: add index.html for homepage
   1 file changed, 5 insertions(+)
   create mode 100644 index.html
  ```


### 步骤 4：查看提交历史，回溯版本
提交后若想查看所有版本记录，或找到某个历史版本的哈希值（用于回滚），用 `git log` 命令：
```bash
# 查看完整提交历史（按时间倒序，最新的提交在最上面）
git log

# 查看简洁版历史（只显示哈希值前7位和提交信息，开发中更常用）
git log --oneline

# 查看指定数量的历史（如最近3次提交）
git log -3
```
执行 `git log --oneline` 后，终端会显示类似以下内容，每一行对应一次提交：
```
a1b2c3d (HEAD -> main) feat: add index.html for homepage
e4f5g6h feat: add style.css for homepage
```


## 三、常用高频命令：解决日常小问题
除了上述核心流程，以下几个命令在开发中也经常用到，覆盖“撤销修改”“分支查看”“远程同步”等场景。

### 1. 撤销工作区的修改（未执行 git add 前）
如果在工作区修改了文件（如误删 `index.html` 内容），但还没执行 `git add`，想恢复到最近一次 `commit` 的状态：
```bash
# 撤销单个文件的工作区修改（替换为你的文件名）
git checkout -- index.html

# 撤销当前目录下所有未 add 的修改（谨慎使用，会丢失未跟踪的新文件）
git checkout .
```

### 2. 撤销暂存区的修改（已执行 git add 但未 commit）
如果文件已 `git add` 到暂存区，想撤回到工作区（比如误加了不需要的文件）：
```bash
# 第一步：将文件从暂存区撤回到工作区
git reset HEAD index.html

# 第二步：（可选）若需要同时撤销工作区修改，再执行 checkout
git checkout -- index.html
```

### 3. 查看分支，切换分支（基础分支操作）
Git 分支是并行开发的核心（如主分支 `main`、开发分支 `dev`），基础的分支命令如下：
```bash
# 查看当前所有分支（带 * 的是当前所在分支）
git branch

# 创建新分支（如创建 dev 分支，基于当前分支创建）
git branch dev

# 切换到指定分支（如切换到 dev 分支）
git checkout dev

# 创建并切换分支（一步完成，比上面两条命令更高效）
git checkout -b dev
```

### 4. 同步远程仓库代码（协作必备）
如果多人协作，需要拉取远程仓库的最新代码，或推送本地代码到远程：
```bash
# 拉取远程 main 分支的最新代码到本地（避免冲突）
git pull origin main

# 推送本地 main 分支代码到远程（首次推送需加 -u 关联远程分支）
git push -u origin main

# 后续推送（已关联远程分支后，直接执行）
git push
```
- `origin` 是远程仓库的默认别名，执行 `git remote -v` 可查看远程仓库的地址和别名。


## 四、Git 基础命令速查表
为了方便你快速查阅，整理了本文涉及的核心命令，按场景分类：

| 操作场景                | 命令示例                                  | 备注                                  |
|-------------------------|-------------------------------------------|---------------------------------------|
| 环境配置                | `git config --global user.name "Name"`    | 全局配置用户名/邮箱                   |
| 仓库初始化              | `git init` / `git clone 远程地址`         | 本地新建/克隆远程仓库                 |
| 文件状态查看            | `git status`                              | 查看未跟踪/修改/暂存的文件            |
| 跟踪文件到暂存区        | `git add 文件名` / `git add .`            | 单个文件/所有文件                     |
| 提交到本地仓库          | `git commit -m "提交信息"`                | 必须填写提交信息                     |
| 查看提交历史            | `git log --oneline` / `git log -3`        | 简洁版/指定数量的历史                |
| 撤销工作区修改          | `git checkout -- 文件名`                  | 未 add 前有效                        |
| 分支操作                | `git branch` / `git checkout -b 新分支`   | 查看分支/创建并切换分支              |
| 远程同步                | `git pull origin main` / `git push`       | 拉取远程代码/推送本地代码            |


## 总结
Git 的基础使用并不复杂，核心是理解「工作区→暂存区→本地仓库」的流转逻辑，再记住对应的命令（如 `add` 到暂存区，`commit` 到仓库）。本文覆盖的命令和流程，能满足个人开发和小型团队协作的基本需求；后续若涉及复杂场景（如分支合并、冲突解决），再逐步学习进阶命令即可。

建议把本文的「命令速查表」保存下来，遇到忘记的命令时随时查阅，多实操几次就能熟练掌握 Git 啦！