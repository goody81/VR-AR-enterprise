# VR-AR-enterprise

[![CI/CD Pipeline](https://github.com/goody81/VR-AR-enterprise/actions/workflows/ci.yml/badge.svg)](https://github.com/goody81/VR-AR-enterprise/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2+-blue.svg)](https://www.typescriptlang.org/)

Enterprise-grade VR/AR platform by 18PlusAi Studios for building immersive virtual and augmented reality experiences.

## 🚀 Features

- **VR Engine**: High-performance virtual reality rendering engine
- **AR Engine**: Advanced augmented reality capabilities
- **Scene Management**: Powerful scene and camera management system
- **TypeScript**: Full TypeScript support with type definitions
- **Enterprise-Grade**: Production-ready with comprehensive testing and CI/CD
- **Cross-Platform**: Works across multiple platforms and devices

## 📋 Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

## 🔧 Installation

```bash
# Clone the repository
git clone https://github.com/goody81/VR-AR-enterprise.git
cd VR-AR-enterprise

# Install dependencies
npm install

# Build the project
npm run build
```

## 🎯 Usage

### Basic VR Scene

```typescript
import { VREngine, Scene, Camera } from 'vr-ar-enterprise';

// Create VR engine
const vrEngine = new VREngine({
  antialias: true,
  powerPreference: 'high-performance',
});

// Initialize the engine
await vrEngine.initialize();

// Create a scene
const scene = new Scene({
  name: 'MyVRScene',
  backgroundColor: '#000000',
  ambientLight: 0.5,
});

// Create and configure camera
const camera = new Camera({
  fov: 75,
  aspectRatio: 16 / 9,
});
camera.setPosition(0, 0, 5);

// Set up the scene
scene.setCamera(camera);
vrEngine.setScene(scene);

// Render
vrEngine.render();
```

### Basic AR Scene

```typescript
import { AREngine, Scene, Camera } from 'vr-ar-enterprise';

// Create AR engine
const arEngine = new AREngine({
  antialias: true,
});

// Initialize the engine
await arEngine.initialize();

// Create and configure scene
const scene = new Scene({
  name: 'MyARScene',
  backgroundColor: '#FFFFFF',
  ambientLight: 0.8,
});

const camera = new Camera();
scene.setCamera(camera);
arEngine.setScene(scene);

// Render
arEngine.render();
```

## 🛠️ Development

### Available Scripts

```bash
# Build the project
npm run build

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Lint the code
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format

# Check code formatting
npm run format:check
```

### Project Structure

```
VR-AR-enterprise/
├── .github/              # GitHub configuration
│   ├── workflows/        # CI/CD workflows
│   ├── ISSUE_TEMPLATE/   # Issue templates
│   └── PULL_REQUEST_TEMPLATE/ # PR templates
├── src/                  # Source code
│   ├── ar/              # AR engine
│   ├── vr/              # VR engine
│   ├── core/            # Core components
│   ├── types.ts         # Type definitions
│   └── index.ts         # Main entry point
├── tests/               # Test files
├── docs/                # Documentation
├── dist/                # Build output
└── coverage/            # Test coverage reports
```

## 🧪 Testing

The project includes comprehensive unit tests with Jest:

```bash
# Run all tests
npm test

# Run tests with coverage report
npm run test:coverage

# Run tests in watch mode for development
npm run test:watch
```

## 📦 Building

Build the project for production:

```bash
npm run build
```

The compiled JavaScript and type definitions will be generated in the `dist/` directory.

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📜 Code of Conduct

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) before contributing.

## 🔒 Security

For security concerns, please see our [Security Policy](SECURITY.md).

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **18PlusAi Studios Enterprise**

## 🙏 Acknowledgments

- Built with TypeScript
- Tested with Jest
- Continuous Integration with GitHub Actions

## 📞 Support

For support, please open an issue in the GitHub issue tracker.

---

Made with ❤️ by 18PlusAi Studios Enterprise
