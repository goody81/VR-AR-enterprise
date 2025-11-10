#!/bin/bash

# Build script for VR/AR Enterprise Platform

echo "🚀 Building VR/AR Enterprise Platform..."

# Check Node.js version
NODE_VERSION=$(node -v | cut -d 'v' -f 2 | cut -d '.' -f 1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Error: Node.js 18 or higher is required"
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Run linter
echo "🔍 Running linter..."
npm run lint

# Run tests
echo "🧪 Running tests..."
npm test

# Build application
echo "🔨 Building application..."
if [ -f "webpack.config.js" ]; then
    npm run build
fi

echo "✅ Build completed successfully!"
