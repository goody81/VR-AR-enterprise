# Configuration Files

This directory contains configuration files for various environments and services.

## Files

- `database.js` - Database configuration
- `redis.js` - Redis configuration
- `storage.js` - Cloud storage configuration
- `logging.js` - Logging configuration
- `security.js` - Security settings

## Environment-specific Configs

Use environment variables (`.env`) to override default configurations for different environments (development, staging, production).

## Usage

```javascript
const dbConfig = require('./config/database');
const db = connectDatabase(dbConfig[process.env.NODE_ENV]);
```
