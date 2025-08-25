---
title: Git 命令及基础使用流程详解
tag:
- Git
categories:
- 开发工具
sticky: 1
top: 1
---

# Git 命令及基础使用流程详解

Git 作为目前最流行的分布式版本控制系统，被广泛应用于软件开发中的代码管理、版本追踪和团队协作。掌握其核心命令与基础使用流程，是高效开展开发工作的必备技能。本文将从 Git 基础概念入手，系统梳理常用命令的功能与用法，并结合实际场景拆解完整的使用流程，帮助初学者快速上手。

## 一、Git 核心概念铺垫

在学习命令前，需先理解 Git 的三个核心工作区域，这是所有操作的基础：



1.  **工作区（Working Directory）**：本地电脑中存放项目文件的实际目录，我们日常编写、修改代码的地方。

2.  **暂存区（Stage/Index）**：临时存放待提交修改的 “缓冲区”，可通过命令将工作区的修改添加到此处，便于精准控制每次提交的内容。

3.  **本地仓库（Local Repository）**：存储项目完整版本历史的数据库，位于工作区下的 `.git` 隐藏目录中，提交到此处的修改会被永久记录。

4.  **远程仓库（Remote Repository）**：托管在服务器上的仓库（如 GitHub、GitLab），用于团队共享代码和同步协作。

## 二、Git 常用命令详解

### （一）基础配置命令

首次使用 Git 前，需配置用户信息（用于标识提交者身份），全局配置仅需执行一次。



| 命令                                     | 功能说明          | 示例                                                    |
| ---------------------------------------- | ----------------- | ------------------------------------------------------- |
| `git config --global user.name "用户名"` | 配置全局用户名    | `git config --global user.name "ZhangSan"`              |
| `git config --global user.email "邮箱"`  | 配置全局邮箱      | `git config --global user.email "zhangsan@example.com"` |
| `git config --list`                      | 查看当前 Git 配置 | `git config --list`（可验证用户名和邮箱是否配置成功）   |

### （二）仓库初始化与克隆

#### 1. 本地初始化新仓库（从零创建项目）

适用于本地已有项目，需将其纳入 Git 管理的场景：



```
\# 1. 进入项目所在目录（示例：进入桌面的 my-project 文件夹）

cd \~/Desktop/my-project

\# 2. 初始化 Git 仓库（执行后会生成 .git 隐藏目录，不可手动修改）

git init
```

#### 2. 克隆远程仓库（从服务器下载已有项目）

适用于参与团队项目或使用开源项目的场景，命令格式为 `git clone 远程仓库地址`：



```
\# 示例1：克隆 GitHub 上的开源项目（HTTPS 地址，无需配置密钥）

git clone https://github.com/username/项目名称.git

\# 示例2：克隆 GitLab 上的项目（SSH 地址，需提前配置 SSH 密钥）

git clone git@gitlab.com:username/项目名称.git
```

克隆完成后，本地会自动生成与项目名称一致的文件夹，且已关联远程仓库。

### （三）工作区与暂存区操作

#### 1. 查看文件状态

`git status`：查看工作区和暂存区的文件状态，核心输出说明：



*   **Untracked files**：未被 Git 跟踪的新文件（需执行 `git add` 加入跟踪）；

*   **Changes not staged for commit**：已跟踪文件被修改，但未添加到暂存区（需 `git add` 暂存）；

*   **Changes to be committed**：暂存区中的修改（可执行 `git commit` 提交到本地仓库）。

为简化输出，可使用 `git status -s`（简短模式），例如：



```
&#x20;M README.md  # 工作区修改未暂存（M 大写：已跟踪文件修改）

A  src/main.js # 新文件已暂存（A：已添加到暂存区）

?? test.js    # 未跟踪文件（??：Untracked）
```

#### 2. 将修改添加到暂存区

`git add`：将工作区的修改（新文件、修改文件、删除文件）添加到暂存区，常用用法：



```
\# 1. 添加指定文件（推荐：精准控制暂存内容）

git add README.md  # 仅添加 README.md 文件

\# 2. 添加指定目录（递归添加目录下所有文件）

git add src/       # 添加 src 目录下的所有文件

\# 3. 添加所有修改（包括新文件、修改、删除，谨慎使用）

git add .          # 注意：“.” 代表当前目录，避免误加无关文件（如日志、缓存）
```

#### 3. 撤销暂存区的修改

若误将文件添加到暂存区，可使用 `git reset HEAD <文件路径>` 撤销暂存：



```
\# 示例：将暂存区的 README.md 撤销回工作区

git reset HEAD README.md
```

#### 4. 撤销工作区的修改

若修改了工作区文件但未暂存，想恢复到最近一次提交 / 暂存的状态，使用 `git checkout -- <文件路径>`：



```
\# 示例：放弃工作区对 README.md 的修改（注意：此操作不可逆，未备份的修改会丢失）

git checkout -- README.md
```

### （四）本地仓库提交操作

`git commit`：将暂存区的修改提交到本地仓库，生成一条版本记录（每次提交需填写 “提交说明”，描述修改内容）。

#### 1. 基本用法



```
\# 提交暂存区内容，并在弹出的编辑器中填写提交信息

git commit
```

执行后会弹出默认编辑器（如 Vim），格式建议：



*   第一行：简短标题（不超过 50 字符，说明核心修改）；

*   空一行；

*   后续行：详细描述（可选，说明修改原因、逻辑等）。

#### 2. 快捷提交（直接在命令行填写信息）

若修改简单，可使用 `-m` 参数直接在命令行添加提交信息，无需打开编辑器：



```
git commit -m "feat: 添加用户登录功能（修复密码验证bug）"
```

**提交信息规范建议**：使用 “类型：描述” 格式（如 feat：新功能、fix：bug 修复、docs：文档修改、style：代码格式调整），便于后续版本追踪。

#### 3. 补充提交（修改最近一次提交）

若提交后发现遗漏文件或提交信息错误，可使用 `git commit --amend` 补充修改，避免生成多余的版本记录：



```
\# 1. 先将遗漏的文件添加到暂存区

git add 遗漏的文件.js

\# 2. 补充提交（会覆盖最近一次的提交信息，需重新填写）

git commit --amend
```

### （五）版本历史查看与回滚

#### 1. 查看提交历史

`git log`：查看本地仓库的所有提交记录，包括提交者、时间、提交信息、提交 ID（版本唯一标识）。

常用参数（简化输出，提升效率）：



```
\# 1. 查看简洁历史（每行一条记录，显示提交ID前7位、提交者、时间、标题）

git log --oneline

\# 2. 查看最近 N 次提交（示例：查看最近3次）

git log -3

\# 3. 图形化展示分支与合并历史（直观查看分支关系）

git log --graph --oneline
```

示例输出（`git log --oneline`）：



```
a1b2c3d (HEAD -> main) feat: 添加购物车结算功能

d4e5f6g fix: 修复商品详情页图片加载失败问题

7h8i9j0 docs: 更新API文档说明
```

#### 2. 版本回滚（回到指定历史版本）

当需要撤销已提交的修改（如引入 bug）时，可通过 `git reset` 回滚到指定版本，核心参数：



*   `--hard`：彻底回滚（工作区、暂存区、本地仓库均同步到目标版本，**谨慎使用**，未提交的修改会丢失）；

*   `--soft`：仅回滚本地仓库，暂存区和工作区保持不变（便于重新修改后提交）；

*   `--mixed`（默认）：回滚本地仓库和暂存区，工作区保持不变（常用，避免误删工作区修改）。

**操作步骤**：



1.  先通过 `git log --oneline` 获取目标版本的提交 ID（如 `d4e5f6g`）；

2.  执行回滚命令：



```
\# 示例：彻底回滚到 d4e5f6g 版本（确保工作区无未提交的重要修改）

git reset --hard d4e5f6g

\# 若回滚后想恢复到最新版本，需先通过 git reflog 找到最新版本的提交ID

git reflog  # 查看所有操作记录（包括已被回滚的提交）

git reset --hard 最新版本的提交ID
```

### （六）分支操作（核心：并行开发与代码隔离）

分支是 Git 最强大的功能之一，可实现 “多任务并行开发”（如主线开发、bug 修复、新功能开发互不干扰）。默认情况下，Git 初始化后会创建 `main` 分支（部分旧版本为 `master`）。

#### 1. 查看分支



```
\# 查看本地所有分支（当前所在分支前会有 "\*" 标记）

git branch

\# 查看本地+远程所有分支（显示远程分支关联关系）

git branch -a
```

#### 2. 创建与切换分支



```
\# 1. 创建新分支（示例：创建 feature/login 分支，用于开发登录功能）

git branch feature/login

\# 2. 切换到新分支（切换后，后续修改会在该分支上生效）

git checkout feature/login

\# 3. 创建并切换分支（一步完成，推荐）

git checkout -b feature/login
```

#### 3. 合并分支（将分支修改合并到当前分支）

当分支开发完成（如登录功能测试通过），需将其合并到主线分支（如 `main`）：



```
\# 步骤1：切换到目标分支（如合并到 main 分支，需先切到 main）

git checkout main

\# 步骤2：执行合并命令（将 feature/login 分支的修改合并到 main）

git merge feature/login
```

**合并冲突处理**：若合并时两个分支修改了同一文件的同一行，Git 会提示 “Merge conflict”，需手动解决冲突：



1.  打开冲突文件，Git 会用 `<<<<<<< HEAD`（当前分支内容）、`=======`（待合并分支内容）、`>>>>>>> 分支名` 标记冲突位置；

2.  根据业务逻辑修改文件，删除冲突标记；

3.  执行 `git add 冲突文件` 标记冲突已解决；

4.  执行 `git commit` 完成合并（无需额外参数，Git 会自动生成合并提交信息）。

#### 4. 删除分支（分支合并后可删除，避免冗余）



```
\# 1. 删除已合并的本地分支（推荐：避免误删未合并分支）

git branch -d feature/login

\# 2. 强制删除未合并的本地分支（谨慎使用：未合并的修改会丢失）

git branch -D feature/login

\# 3. 删除远程分支（示例：删除远程的 feature/login 分支）

git push origin --delete feature/login
```

### （七）远程仓库操作（团队协作核心）

#### 1. 关联远程仓库

若本地仓库是 `git init` 初始化的（非克隆），需手动关联远程仓库：



```
\# 命令格式：git remote add 远程仓库别名 远程仓库地址（别名通常用 origin，代表“默认远程仓库”）

git remote add origin git@github.com:username/项目名称.git
```

#### 2. 查看远程仓库信息



```
\# 查看已关联的远程仓库列表（显示别名和地址）

git remote -v
```

#### 3. 拉取远程仓库代码（同步团队修改）

`git pull`：从远程仓库拉取最新代码，并自动合并到当前本地分支（相当于 `git fetch` + `git merge`）：



```
\# 拉取 origin 远程仓库的 main 分支，合并到当前本地分支

git pull origin main
```

**注意**：拉取前建议先通过 `git status` 确保本地工作区干净（无未提交修改），避免合并冲突；若有未提交修改，可先执行 `git stash` 暂存（后续用 `git stash pop` 恢复）。

#### 4. 推送本地代码到远程仓库

`git push`：将本地仓库的提交推送到远程仓库，首次推送需指定分支关联：



```
\# 1. 首次推送（将本地 main 分支推送到 origin 远程仓库，并设置关联）

git push -u origin main  # "-u" 表示设置 upstream，后续推送可简化命令

\# 2. 后续推送（已设置关联后，直接执行即可）

git push
```

若推送失败提示 “rejected”，通常是远程仓库有本地没有的最新代码，需先执行 `git pull` 同步后再推送。

## 三、Git 基础使用流程（实际场景示例）

以 “本地开发新功能并提交到远程仓库” 为例，完整流程如下：

### 步骤 1：准备工作（首次使用或新项目）



```
\# 1. 配置 Git 用户名和邮箱（全局仅需一次）

git config --global user.name "Your Name"

git config --global user.email "your.email@example.com"

\# 2. 克隆远程仓库（或本地初始化并关联远程）

git clone https://github.com/username/项目名称.git

cd 项目名称  # 进入克隆后的项目目录
```

### 步骤 2：创建分支开发新功能



```
\# 创建并切换到 feature/payment 分支（开发支付功能）

git checkout -b feature/payment
```

### 步骤 3：编写代码并提交到本地仓库



```
\# 1. 编写代码（如修改 src/payment.js 文件）

\# 2. 查看文件状态，确认修改

git status

\# 3. 将修改添加到暂存区

git add src/payment.js

\# 4. 提交到本地仓库，填写清晰的提交信息

git commit -m "feat(payment): 实现支付宝支付接口调用"
```

### 步骤 4：同步远程主线代码（避免合并冲突）



```
\# 1. 切换到 main 分支

git checkout main

\# 2. 拉取远程 main 分支的最新代码（同步团队其他成员的修改）

git pull origin main

\# 3. 切换回 feature/payment 分支，将 main 分支的最新代码合并过来

git checkout feature/payment

git merge main

\# 4. 若合并时有冲突，按前文“合并冲突处理”步骤解决，再提交
```

### 步骤 5：推送分支到远程仓库，发起协作



```
\# 推送 feature/payment 分支到远程仓库

git push -u origin feature/payment
```

推送完成后，可在 GitHub/GitLab 上发起 “Pull Request（PR）” 或 “Merge Request（MR）”，邀请团队成员代码审核，审核通过后合并到远程 `main` 分支。

### 步骤 6：合并完成后，清理本地分支



```
\# 1. 切换到 main 分支，拉取合并后的最新代码

git checkout main

git pull origin main

\# 2. 删除本地的 feature/payment 分支（已合并，无需保留）

git branch -d feature/payment
```

## 四、常见问题与注意事项



1.  **忽略无关文件**：在工作区根目录创建 `.gitignore` 文件，列出无需 Git 跟踪的文件（如 `node_modules/`、`*.log`、`dist/`），避免提交冗余文件；

2.  **SSH 密钥配置**：若使用 SSH 地址克隆 / 推送，需在本地生成 SSH 密钥，并添加到远程仓库（如 GitHub 的 “Settings -> SSH and GPG keys”），避免每次输入密码；

3.  **谨慎使用 **`--hard`** 参数**：`git reset --hard` 和 `git checkout -- <文件>` 均为不可逆操作，执行前需确认未提交的修改已备份；

4.  **提交频率**：建议 “小步提交”，每次提交对应一个完整的功能点或 bug 修复，便于后续版本回滚和代码审查。

通过以上命令与流程的实践，可快速掌握 Git 的基础用法，应对日常开发与团队协作需求。后续可进一步学习 Git 进阶功能（如 `git stash` 暂存工作区、`git rebase` 变基、标签管理 `git tag` 等），提升版本控制效率。