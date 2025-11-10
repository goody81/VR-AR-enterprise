/**
 * Core system utilities and configurations
 * @module core
 */

class CoreSystem {
  constructor() {
    this.initialized = false;
    this.features = {
      vr: true,
      ar: true,
      ai: true,
    };
  }

  initialize() {
    console.log('Initializing Core System...');
    this.initialized = true;
    return this;
  }

  getStatus() {
    return {
      initialized: this.initialized,
      features: this.features,
      timestamp: new Date().toISOString(),
    };
  }

  enableFeature(feature) {
    if (Object.prototype.hasOwnProperty.call(this.features, feature)) {
      this.features[feature] = true;
      return true;
    }
    return false;
  }

  disableFeature(feature) {
    if (Object.prototype.hasOwnProperty.call(this.features, feature)) {
      this.features[feature] = false;
      return true;
    }
    return false;
  }
}

module.exports = CoreSystem;
