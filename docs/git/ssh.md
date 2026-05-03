---
title: Git SSH 免密登录
description: 生成 SSH 密钥、添加到托管平台与 Git 远程地址切换
date: 2026-05-04
categories:
  - Git
tags:
  - SSH
  - 免密登录
  - 远程仓库
article: true
---

# SSH 免密登录

用 **SSH 公钥** 认证后，推送、拉取时不必反复输入 HTTPS 密码或 Token（前提是远程支持 SSH，且本机私钥权限正确）。

## 1. 检查是否已有密钥

```bash
ls -al ~/.ssh
```

若已存在 `id_ed25519` + `id_ed25519.pub`（或 `id_rsa` / `id_rsa.pub`），可复用；否则生成新密钥。

## 2. 生成密钥（推荐 Ed25519）

```bash
ssh-keygen -t ed25519 -C "you@example.com" -f ~/.ssh/id_ed25519_git
```

- `-C`：注释，一般写邮箱，会出现在公钥末尾。
- `-f`：自定义路径与文件名，避免多台机器或多平台密钥混在一起；若省略则默认 `~/.ssh/id_ed25519`。

提示输入 **passphrase** 时：可直接回车（无口令）；或设置口令，安全性更高，但每次使用需输入（可用 ssh-agent 缓存）。

**权限**：私钥仅本人可读，例如：

```bash
chmod 600 ~/.ssh/id_ed25519_git
```

## 3. 把公钥加到托管平台

查看公钥内容（整段复制）：

```bash
cat ~/.ssh/id_ed25519_git.pub
```

在 **GitHub / GitLab / Gitee** 等网站的「SSH 公钥」设置页粘贴保存。各平台名称略有不同，例如 GitHub：**Settings → SSH and GPG keys → New SSH key**。

## 4. 本机 ssh-agent（可选，有 passphrase 时很有用）

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519_git
```

Windows 上若用 Git Bash，同样可用；PowerShell 可配合 `Start-Service ssh-agent`（视系统而定）。

## 5. 指定用哪把钥匙连接哪个主机（推荐）

编辑 `~/.ssh/config`：

```sshconfig
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_git
  IdentitiesOnly yes

Host gitlab.example.com
  HostName gitlab.example.com
  User git
  IdentityFile ~/.ssh/id_ed25519_git
  IdentitiesOnly yes
```

`IdentitiesOnly yes` 可避免 SSH 把一堆默认密钥都试一遍导致认证混乱。

## 6. 把仓库远程改为 SSH

查看当前地址：

```bash
git remote -v
```

HTTPS 改为 SSH（以 GitHub 为例）：

```bash
git remote set-url origin git@github.com:用户名/仓库名.git
```

首次连接会问是否信任主机指纹，输入 `yes` 后会把记录写入 `~/.ssh/known_hosts`。

## 7. 验证

```bash
ssh -T git@github.com
```

成功时 GitHub 会返回欢迎语；GitLab 常用 `ssh -T git@gitlab.com` 或你的自建域名。

## 常见问题

| 现象 | 可尝试 |
|------|--------|
| `Permission denied (publickey)` | 确认公钥已添加到网站；`IdentityFile` 是否指向当前使用的私钥；私钥权限是否为 `600`。 |
| 公司代理 / 非标准端口 | 在 `Host` 下增加 `ProxyJump` 或 `Port`，按运维文档配置。 |
| Windows 路径 | `IdentityFile` 可写为 `C:/Users/你/.ssh/id_ed25519_git` 等形式。 |

更多 Git 日常使用见 [常用命令](./commands)。
