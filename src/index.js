/**
 * Main entry point for VR/AR Enterprise Platform
 * @module index
 */

require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Age verification middleware
app.use((req, res, next) => {
  // In production, implement proper age verification
  const ageVerified = req.headers['x-age-verified'] === 'true';
  if (!ageVerified && req.path !== '/health' && req.path !== '/') {
    return res.status(403).json({
      error: 'Age verification required',
      message: 'You must be 18+ to access this platform',
    });
  }
  next();
});

// Routes
app.get('/', (req, res) => {
  res.json({
    name: '18PlusAi Studios VR/AR Enterprise Platform',
    version: '1.0.0',
    status: 'operational',
    message: 'Welcome to the VR/AR Enterprise Platform (18+ only)',
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
  });
});

app.get('/api/info', (req, res) => {
  res.json({
    features: ['VR Support', 'AR Support', 'AI Integration', 'Enterprise Tools'],
    requirements: { minAge: 18 },
    environment: process.env.NODE_ENV || 'development',
  });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong',
  });
});

// Start server
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`🚀 VR/AR Enterprise Platform running on http://${HOST}:${PORT}`);
    console.log(`📋 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`🔞 Age Restriction: 18+ only`);
  });
}

module.exports = app;
