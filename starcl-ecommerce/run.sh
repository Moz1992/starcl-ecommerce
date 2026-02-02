#!/bin/bash

echo "🚀 Starcl 电商网站 - 启动脚本"
echo "================================"
echo ""

# 检查目录
if [ ! -f "package.json" ]; then
    echo "❌ 错误: 未找到 package.json"
    echo "请先执行: cd /workspace/starcl-ecommerce"
    exit 1
fi

echo "📦 正在安装依赖..."
npm install 2>&1

if [ $? -ne 0 ]; then
    echo "❌ 依赖安装失败"
    exit 1
fi

echo ""
echo "✅ 依赖安装成功!"
echo ""
echo "🚀 启动开发服务器..."
echo "🌐 访问地址: http://localhost:3000"
echo ""
echo "按 Ctrl+C 停止服务器"
echo ""

npm run dev
