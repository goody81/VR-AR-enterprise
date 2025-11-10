/**
 * Utility functions for VR/AR Enterprise Platform
 * @module utils
 */

/**
 * Verify user age
 * @param {number} age - User's age
 * @returns {boolean} True if age is 18 or above
 */
function verifyAge(age) {
  return age >= 18;
}

/**
 * Generate unique identifier
 * @returns {string} Unique ID
 */
function generateId() {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Format timestamp
 * @param {Date} date - Date object
 * @returns {string} Formatted timestamp
 */
function formatTimestamp(date = new Date()) {
  return date.toISOString();
}

/**
 * Validate environment configuration
 * @returns {Object} Validation result
 */
function validateConfig() {
  const required = ['NODE_ENV', 'PORT'];
  const missing = required.filter((key) => !process.env[key]);

  return {
    valid: missing.length === 0,
    missing,
  };
}

module.exports = {
  verifyAge,
  generateId,
  formatTimestamp,
  validateConfig,
};
