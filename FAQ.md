# Frequently Asked Questions (FAQ)

## 18PlusAi Studios VR/AR Enterprise Platform

---

## General Questions

### What is this platform?

The 18PlusAi Studios VR/AR Enterprise Platform is a comprehensive enterprise-grade solution for building Virtual Reality (VR) and Augmented Reality (AR) applications with built-in AI capabilities.

### Why is there an age restriction?

This platform is designed for adult audiences (18+) and may include content or features intended for mature users. Age verification is a core requirement for all users and contributors.

### Is this platform free to use?

Yes, this platform is open-source under the MIT License. You can use, modify, and distribute it freely according to the license terms.

### What technologies does it use?

- **Backend**: Node.js, Express.js
- **Databases**: PostgreSQL, MongoDB, Redis
- **VR/AR**: WebXR, Three.js, AR.js
- **DevOps**: Docker, GitHub Actions, Kubernetes
- **Testing**: Jest, ESLint, Prettier

---

## Getting Started

### What are the system requirements?

- Node.js 18.0.0 or higher
- npm 9.0.0 or higher
- 4GB RAM minimum (8GB recommended)
- Modern web browser with WebXR support
- VR/AR device (optional but recommended)

### How do I install the platform?

```bash
git clone https://github.com/goody81/VR-AR-enterprise.git
cd VR-AR-enterprise
npm install
cp .env.example .env
npm start
```

See the [Getting Started Guide](docs/guides/getting-started.md) for detailed instructions.

### Can I use Docker?

Yes! We provide full Docker support:

```bash
docker-compose up -d
```

### What VR/AR devices are supported?

- Meta Quest 2/3/Pro
- HTC Vive
- Valve Index
- PlayStation VR
- Microsoft HoloLens 2
- Magic Leap
- Any WebXR-compatible device

---

## Development

### How do I contribute?

See our [Contributing Guidelines](CONTRIBUTING.md) for details. All contributors must be 18+ and follow our [Code of Conduct](CODE_OF_CONDUCT.md).

### How do I run tests?

```bash
npm test                # Run all tests
npm run test:unit       # Unit tests only
npm run test:integration # Integration tests
npm test -- --coverage  # With coverage
```

### How do I report bugs?

Open an issue on GitHub using our [bug report template](.github/ISSUE_TEMPLATE/bug_report.md).

### How do I request features?

Use our [feature request template](.github/ISSUE_TEMPLATE/feature_request.md) on GitHub Issues.

### What coding standards do you use?

We use ESLint and Prettier for code quality. Run `npm run lint` to check your code.

---

## VR/AR Features

### How do I register a VR device?

Use the VR Manager API:

```javascript
const VRManager = require('./src/vr/manager');
const vrManager = new VRManager();
vrManager.registerDevice({
  name: 'Meta Quest 2',
  type: 'headset'
});
```

### How do I add AR markers?

Use the AR Manager API:

```javascript
const ARManager = require('./src/ar/manager');
const arManager = new ARManager();
arManager.addMarker({
  name: 'Product Marker',
  type: 'image'
});
```

### Can I build custom VR experiences?

Yes! The platform is designed to be extensible. Create your own modules in the `src/` directory.

### Does it support multiplayer VR?

Not in v1.0.0, but it's planned for v1.1.0. See our [Roadmap](ROADMAP.md).

---

## API

### Is there API documentation?

Yes! See our [API Documentation](docs/api/README.md).

### How do I authenticate API requests?

Include the age verification header:

```
X-Age-Verified: true
Authorization: Bearer <your-token>
```

### What's the rate limit?

100 requests per 15-minute window per IP address.

### Is there a GraphQL API?

Not yet, but it's planned for v1.1.0.

---

## Deployment

### Can I deploy to production?

Yes! The platform is production-ready. Use Docker Compose or Kubernetes for deployment.

### What cloud providers are supported?

- AWS
- Google Cloud Platform
- Microsoft Azure
- DigitalOcean
- Any provider with Docker/Kubernetes support

### How do I configure for production?

1. Set `NODE_ENV=production` in `.env`
2. Configure secure secrets
3. Set up SSL/TLS certificates
4. Configure database backups
5. Set up monitoring

### Is it scalable?

Yes! The platform is designed for horizontal scaling with load balancing and container orchestration.

---

## Security

### How is age verification handled?

Currently, it's header-based. In production, integrate with a third-party age verification service.

### How do I report security vulnerabilities?

Email security@18plusai.com. Do NOT open public issues for security concerns.

### Is data encrypted?

Yes, both at rest and in transit (TLS 1.3).

### Is it GDPR compliant?

The platform includes features for GDPR compliance, but you must configure them according to your specific requirements.

---

## Troubleshooting

### The application won't start

Check:
- Node.js version (must be 18+)
- Port 3000 is not in use
- `.env` file exists and is configured
- Dependencies are installed (`npm install`)

### Tests are failing

```bash
npm cache clean --force
rm -rf node_modules
npm install
npm test
```

### VR device not detected

- Ensure device is in developer mode
- Check USB connection
- Verify device drivers are installed
- Restart the application

### Docker containers won't start

```bash
docker-compose down -v
docker-compose up -d --build
docker-compose logs -f
```

---

## Community

### Where can I get help?

- GitHub Discussions
- GitHub Issues
- Email: support@18plusai.com
- Documentation Wiki

### How can I stay updated?

- Watch the GitHub repository
- Follow releases
- Join our community discussions
- Subscribe to the newsletter (coming soon)

### Can I use this for commercial projects?

Yes! The MIT License allows commercial use.

---

## Licensing

### What is the license?

MIT License - see [LICENSE](LICENSE) file.

### Can I modify the code?

Yes, you can modify and distribute under the MIT License terms.

### Do I need to credit the project?

Attribution is appreciated but not required by the MIT License.

---

## Performance

### What are the performance benchmarks?

Performance depends on your hardware and configuration. Typical metrics:
- API response time: < 50ms
- VR frame rate: 90+ FPS
- AR tracking: 30+ FPS
- Concurrent users: 1000+ per instance

### How do I optimize performance?

- Enable Redis caching
- Use a CDN for assets
- Optimize database queries
- Scale horizontally with load balancing
- Use production builds

---

## Future Plans

### What's coming next?

See our [Roadmap](ROADMAP.md) for upcoming features.

### Can I request features?

Yes! Open a feature request issue on GitHub.

### Will there be a mobile app?

iOS and Android SDKs are planned for v2.0.0.

---

## Still Have Questions?

If your question isn't answered here:
- Check the [Documentation](docs/)
- Search [GitHub Issues](https://github.com/goody81/VR-AR-enterprise/issues)
- Ask in [GitHub Discussions](https://github.com/goody81/VR-AR-enterprise/discussions)
- Contact us: support@18plusai.com

---

*Last updated: November 2025*
