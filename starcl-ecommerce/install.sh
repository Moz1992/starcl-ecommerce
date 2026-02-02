#!/bin/bash

echo "🚀 开始安装 Starcl 电商网站..."
echo "📁 项目位置: $(pwd)"

# 检查是否在正确的目录
if [ ! -f "package.json" ]; then
    echo "❌ 错误: 未找到 package.json，请先进入项目目录"
    echo "   cd /workspace/starcl-ecommerce"
    exit 1
fi

# 安装依赖
echo "📦 安装依赖包..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ 依赖安装成功!"
    echo ""
    echo "🚀 启动开发服务器..."
    echo "🌐 网站将在 http://localhost:3000 打开"
    echo ""
    echo "按 Ctrl+C 停止服务器"
    npm run dev
else
    echo "❌ 依赖安装失败"
    exit 1
fi
