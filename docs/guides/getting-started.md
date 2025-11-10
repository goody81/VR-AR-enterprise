# Getting Started Guide

## Welcome to 18PlusAi Studios VR/AR Enterprise Platform

This guide will help you get started with the VR/AR Enterprise Platform.

---

## Prerequisites

Before you begin, ensure you have:

- **Age Requirement**: You must be 18 years or older
- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 9.0.0 or higher
- **Git**: Latest version
- **VR/AR Device** (optional): Meta Quest 2, HoloLens 2, or compatible device

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/goody81/VR-AR-enterprise.git
cd VR-AR-enterprise
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment

```bash
cp .env.example .env
```

Edit `.env` and update the configuration values.

### 4. Start the Application

#### Development Mode
```bash
npm run dev
```

#### Production Mode
```bash
npm start
```

The application will be available at `http://localhost:3000`

---

## Quick Start

### 1. Verify Age

All users must verify they are 18+ before accessing the platform.

### 2. Check System Status

```bash
curl http://localhost:3000/health
```

### 3. Explore the API

```bash
curl -H "X-Age-Verified: true" http://localhost:3000/api/info
```

---

## Docker Setup

### Using Docker Compose

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

---

## Development Workflow

### Running Tests

```bash
# Run all tests
npm test

# Run unit tests
npm run test:unit

# Run with coverage
npm test -- --coverage
```

### Linting

```bash
# Check code style
npm run lint

# Auto-fix issues
npm run lint:fix
```

### Formatting

```bash
npm run format
```

---

## Project Structure

```
VR-AR-enterprise/
├── src/                # Source code
│   ├── core/          # Core system modules
│   ├── vr/            # VR functionality
│   ├── ar/            # AR functionality
│   ├── api/           # API routes
│   ├── ui/            # User interface
│   └── utils/         # Utility functions
├── tests/             # Test files
│   ├── unit/          # Unit tests
│   ├── integration/   # Integration tests
│   └── e2e/           # End-to-end tests
├── docs/              # Documentation
├── config/            # Configuration files
└── scripts/           # Build and utility scripts
```

---

## VR/AR Device Setup

### Meta Quest 2

1. Enable developer mode
2. Connect via USB or Wi-Fi
3. Configure in the platform settings

### HoloLens 2

1. Install companion app
2. Pair device
3. Configure spatial mapping

---

## Troubleshooting

### Common Issues

**Port already in use:**
```bash
# Change port in .env file
PORT=3001
```

**Dependencies not installing:**
```bash
# Clear cache and reinstall
npm cache clean --force
npm install
```

**VR device not detected:**
- Check USB connection
- Verify device is in developer mode
- Restart the application

---

## Next Steps

- Read the [API Documentation](../api/README.md)
- Explore [Architecture Guide](../architecture/README.md)
- Check out [Examples](../guides/examples.md)

---

## Support

- **Documentation**: https://github.com/goody81/VR-AR-enterprise/wiki
- **Issues**: https://github.com/goody81/VR-AR-enterprise/issues
- **Discussions**: https://github.com/goody81/VR-AR-enterprise/discussions

---

## License

MIT License - See [LICENSE](../../LICENSE) for details
