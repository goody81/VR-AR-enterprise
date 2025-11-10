# Integration Tests

This directory contains integration tests that verify multiple components working together.

## Running Tests

```bash
npm run test:integration
```

## Test Structure

- Test database interactions
- Test API endpoints with middleware
- Test VR/AR manager integrations
- Test authentication flows

## Guidelines

- Use real database instances (test DB)
- Clean up test data after each test
- Mock external services when appropriate
- Test realistic user scenarios
