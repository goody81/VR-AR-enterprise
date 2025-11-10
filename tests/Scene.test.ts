import { Scene } from '../src/core/Scene';
import { Camera } from '../src/core/Camera';

describe('Scene', () => {
  it('should create a scene with required config', () => {
    const scene = new Scene({ name: 'TestScene' });

    expect(scene.getName()).toBe('TestScene');
    expect(scene.getConfig().backgroundColor).toBe('#000000');
    expect(scene.getConfig().ambientLight).toBe(0.5);
  });

  it('should create a scene with custom config', () => {
    const scene = new Scene({
      name: 'CustomScene',
      backgroundColor: '#FFFFFF',
      ambientLight: 0.8,
    });

    expect(scene.getName()).toBe('CustomScene');
    expect(scene.getConfig().backgroundColor).toBe('#FFFFFF');
    expect(scene.getConfig().ambientLight).toBe(0.8);
  });

  it('should set and get camera', () => {
    const scene = new Scene({ name: 'TestScene' });
    const camera = new Camera();

    expect(scene.getCamera()).toBeNull();

    scene.setCamera(camera);
    expect(scene.getCamera()).toBe(camera);
  });

  it('should set background color', () => {
    const scene = new Scene({ name: 'TestScene' });
    scene.setBackgroundColor('#FF0000');

    expect(scene.getConfig().backgroundColor).toBe('#FF0000');
  });

  it('should clamp ambient light between 0 and 1', () => {
    const scene = new Scene({ name: 'TestScene' });

    scene.setAmbientLight(1.5);
    expect(scene.getConfig().ambientLight).toBe(1);

    scene.setAmbientLight(-0.5);
    expect(scene.getConfig().ambientLight).toBe(0);

    scene.setAmbientLight(0.7);
    expect(scene.getConfig().ambientLight).toBe(0.7);
  });
});
