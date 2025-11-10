/**
 * Unit tests for utility helpers
 */

const { verifyAge, generateId, formatTimestamp, validateConfig } = require('../../src/utils/helpers');

describe('Utility Helpers', () => {
  describe('verifyAge', () => {
    test('should return true for age 18', () => {
      expect(verifyAge(18)).toBe(true);
    });

    test('should return true for age above 18', () => {
      expect(verifyAge(25)).toBe(true);
    });

    test('should return false for age below 18', () => {
      expect(verifyAge(17)).toBe(false);
    });

    test('should return false for age 0', () => {
      expect(verifyAge(0)).toBe(false);
    });
  });

  describe('generateId', () => {
    test('should generate a unique ID', () => {
      const id1 = generateId();
      const id2 = generateId();
      expect(id1).not.toBe(id2);
    });

    test('should return a string', () => {
      const id = generateId();
      expect(typeof id).toBe('string');
    });
  });

  describe('formatTimestamp', () => {
    test('should return ISO string format', () => {
      const timestamp = formatTimestamp();
      expect(timestamp).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/);
    });

    test('should format provided date', () => {
      const date = new Date('2025-01-01T00:00:00Z');
      const timestamp = formatTimestamp(date);
      expect(timestamp).toBe('2025-01-01T00:00:00.000Z');
    });
  });

  describe('validateConfig', () => {
    test('should validate required environment variables', () => {
      process.env.NODE_ENV = 'test';
      process.env.PORT = '3000';
      
      const result = validateConfig();
      expect(result.valid).toBe(true);
      expect(result.missing).toHaveLength(0);
    });
  });
});
