import { AREngine } from '../src/ar/AREngine';
import { Scene } from '../src/core/Scene';

describe('AREngine', () => {
  it('should create an AR engine with default config', () => {
    const engine = new AREngine();
    expect(engine).toBeDefined();
  });

  it('should initialize successfully', async () => {
    const engine = new AREngine();
    await expect(engine.initialize()).resolves.not.toThrow();
  });

  it('should throw error when initializing twice', async () => {
    const engine = new AREngine();
    await engine.initialize();
    await expect(engine.initialize()).rejects.toThrow('AREngine is already initialized');
  });

  it('should set and get scene', async () => {
    const engine = new AREngine();
    await engine.initialize();

    const scene = new Scene({ name: 'ARScene' });
    engine.setScene(scene);

    expect(engine.getScene()).toBe(scene);
  });

  it('should throw error when rendering without initialization', () => {
    const engine = new AREngine();
    const scene = new Scene({ name: 'ARScene' });
    engine.setScene(scene);

    expect(() => engine.render()).toThrow('AREngine must be initialized before rendering');
  });

  it('should throw error when rendering without scene', async () => {
    const engine = new AREngine();
    await engine.initialize();

    expect(() => engine.render()).toThrow('No scene set for rendering');
  });

  it('should render successfully with scene and initialization', async () => {
    const engine = new AREngine();
    await engine.initialize();

    const scene = new Scene({ name: 'ARScene' });
    engine.setScene(scene);

    expect(() => engine.render()).not.toThrow();
  });

  it('should dispose correctly', async () => {
    const engine = new AREngine();
    await engine.initialize();

    const scene = new Scene({ name: 'ARScene' });
    engine.setScene(scene);

    engine.dispose();
    expect(engine.getScene()).toBeNull();
  });
});
