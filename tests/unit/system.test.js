/**
 * Unit tests for Core System
 */

const CoreSystem = require('../../src/core/system');

describe('CoreSystem', () => {
  let coreSystem;

  beforeEach(() => {
    coreSystem = new CoreSystem();
  });

  test('should initialize correctly', () => {
    expect(coreSystem.initialized).toBe(false);
    coreSystem.initialize();
    expect(coreSystem.initialized).toBe(true);
  });

  test('should have default features', () => {
    expect(coreSystem.features.vr).toBe(true);
    expect(coreSystem.features.ar).toBe(true);
    expect(coreSystem.features.ai).toBe(true);
  });

  test('should enable feature', () => {
    coreSystem.features.vr = false;
    const result = coreSystem.enableFeature('vr');
    expect(result).toBe(true);
    expect(coreSystem.features.vr).toBe(true);
  });

  test('should disable feature', () => {
    const result = coreSystem.disableFeature('ar');
    expect(result).toBe(true);
    expect(coreSystem.features.ar).toBe(false);
  });

  test('should get status', () => {
    coreSystem.initialize();
    const status = coreSystem.getStatus();
    expect(status.initialized).toBe(true);
    expect(status.features).toBeDefined();
    expect(status.timestamp).toBeDefined();
  });
});
