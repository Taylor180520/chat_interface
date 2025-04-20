#!/bin/bash

# 使用curl上传仓库内容
# 创建一个临时文件来存储仓库信息
cd /Users/zhangxijing/Desktop/ITEM/Code/UI/GROUP_CHAT/Chat_interface
echo "尝试直接通过GitHub API创建仓库"
echo "GitHub API尝试推送..."

echo "提示：请尝试使用以下方法之一："
echo "1. 使用GitHub Desktop应用程序："
echo "   - 下载并安装GitHub Desktop"
echo "   - 添加本地仓库 /Users/zhangxijing/Desktop/ITEM/Code/UI/GROUP_CHAT/Chat_interface"
echo "   - 推送到GitHub"
echo ""
echo "2. 使用HTTPS克隆URL进行推送："
echo "   git remote set-url origin https://Taylor180520:GITHUB_TOKEN@github.com/Taylor180520/chat_interface.git"
echo "   git push -u origin main"
echo ""
echo "3. 或者使用SSH密钥进行身份验证（需要先设置SSH密钥）"
echo ""
echo "由于命令行工具执行限制，我们无法直接完成推送，但上述方法应该可以帮助您完成。" 