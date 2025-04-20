#!/bin/bash
cd /Users/zhangxijing/Desktop/ITEM/Code/UI/GROUP_CHAT/Chat_interface

# 配置Git凭据
git config --local credential.helper store


# 推送到远程仓库
git push -u origin main

# 清除凭据文件（为了安全）
rm ~/.git-credentials 