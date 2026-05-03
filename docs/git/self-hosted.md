---
title: 自建代码托管平台
description: 常见自建 Git 服务选型对比与部署时关注点
date: 2026-05-08
categories:
  - Git
tags:
  - 自建
  - 代码托管
  - GitLab
  - Gitea
article: true
---

# 自建代码托管平台

「自建」即在自有服务器或内网部署 **带 Web 界面的 Git 托管服务**，替代或补充 GitHub 等公有云，便于代码私有、合规审计或与内部账号体系集成。

## 常见选型（简述）

| 方案 | 特点 | 适用场景 |
|------|------|----------|
| **GitLab CE** | 功能全（CI、Registry、Wiki 等），资源占用相对大 | 中大型企业、需要完整 DevOps 链路 |
| **Gitea** | Go 编写，单二进制部署简单，社区活跃 | 小团队、个人、轻量私有仓库 |
| **Forgejo** | 自 Gitea 分叉，强调社区治理与开源协作 | 与 Gitea 类似，偏长期社区驱动 |
| **OneDev** | 内置 CI/CD、看板、包仓库等一体化 | 希望「一个产品」覆盖较多流程时调研 |

此外还有 **Gogs**（较老，不少新部署转向 Gitea）、商业版 **GitLab EE** 等，按需评估许可证与功能。

## 部署前要想清楚的点

1. **身份认证**：仅密码、LDAP/AD、OAuth（企业微信等）是否与现有系统对接。  
2. **HTTPS / SSH**：对外服务需 TLS 证书；SSH 需单独开端口并维护 `authorized_keys` 或平台自带的密钥管理。  
3. **备份**：仓库数据与数据库定期备份、恢复演练；自建意味着运维责任在你方。  
4. **升级与监控**：关注安全公告，规划磁盘与日志容量。  
5. **与 CI 的关系**：托管平台是否自带 Runner，或对接 Jenkins / GitHub Actions 式的外部流水线。

## 官方文档入口（安装请以官方为准）

- GitLab：<https://about.gitlab.com/install/>  
- Gitea：<https://docs.gitea.com/installation/install-from-binary>  
- Forgejo：<https://forgejo.org/docs/latest/admin/installation/>  

具体命令、Docker Compose、反向代理（Nginx/Caddy）等随版本变化较大，本文不抄录安装步骤，避免与最新文档冲突。

## 与本地 Git 的关系

自建平台在协议上仍是 **Git 远程**：克隆、推送地址形如 `git@你的域名:组/仓库.git` 或 `https://你的域名/组/仓库.git`。本地配置 SSH 见 [SSH 免密登录](./ssh)。
