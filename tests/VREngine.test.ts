import { VREngine } from '../src/vr/VREngine';
import { Scene } from '../src/core/Scene';

describe('VREngine', () => {
  it('should create a VR engine with default config', () => {
    const engine = new VREngine();
    expect(engine).toBeDefined();
  });

  it('should initialize successfully', async () => {
    const engine = new VREngine();
    await expect(engine.initialize()).resolves.not.toThrow();
  });

  it('should throw error when initializing twice', async () => {
    const engine = new VREngine();
    await engine.initialize();
    await expect(engine.initialize()).rejects.toThrow('VREngine is already initialized');
  });

  it('should set and get scene', async () => {
    const engine = new VREngine();
    await engine.initialize();

    const scene = new Scene({ name: 'VRScene' });
    engine.setScene(scene);

    expect(engine.getScene()).toBe(scene);
  });

  it('should throw error when rendering without initialization', () => {
    const engine = new VREngine();
    const scene = new Scene({ name: 'VRScene' });
    engine.setScene(scene);

    expect(() => engine.render()).toThrow('VREngine must be initialized before rendering');
  });

  it('should throw error when rendering without scene', async () => {
    const engine = new VREngine();
    await engine.initialize();

    expect(() => engine.render()).toThrow('No scene set for rendering');
  });

  it('should render successfully with scene and initialization', async () => {
    const engine = new VREngine();
    await engine.initialize();

    const scene = new Scene({ name: 'VRScene' });
    engine.setScene(scene);

    expect(() => engine.render()).not.toThrow();
  });

  it('should dispose correctly', async () => {
    const engine = new VREngine();
    await engine.initialize();

    const scene = new Scene({ name: 'VRScene' });
    engine.setScene(scene);

    engine.dispose();
    expect(engine.getScene()).toBeNull();
  });
});
