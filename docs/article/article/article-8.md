# Git 常用命令

## 常用命令

| 命令                      | 简要说明                      |
| ------------------------- | ----------------------------- |
| git clone 仓库地址        | 克隆版本库                    |
| git status                | 查看状态                      |
| git add .                 | 添加至暂存区                  |
| git commit -m '说明'      | 提交并添加说明                |
| git push -u origin master | 推送至远程仓库 master 分支    |
| git branch -a             | 列出所有分支                  |
| git branch dev            | 创建 dev 分支                 |
| git checkout dev          | 切换到 dev 分支               |
| git merge dev             | 把 dev 分支合并到 master 分支 |
| git branch -d dev         | 删除 dev 分支                 |
| git pull origin master    | 同步分支到本地                |
| git pull origin master    | 同步分支到本地                |
| git reset --hard 版本号   | 获取历史版本                  |

## 分支管理

```shell
# 创建 dev 分支
git branch dev

# 切换到 dev 分支
git checkout dev
```

- 合并分支

```shell
# 先切换为 master 分支
git checkout master

# 合并分支 把 dev 分支合并到 master 分支
git merge dev

# 将合并的分支提交到仓库
git push
```