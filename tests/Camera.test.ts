import { Camera } from '../src/core/Camera';

describe('Camera', () => {
  it('should create a camera with default config', () => {
    const camera = new Camera();
    const config = camera.getConfig();

    expect(config.fov).toBe(75);
    expect(config.aspectRatio).toBe(16 / 9);
    expect(config.near).toBe(0.1);
    expect(config.far).toBe(1000);
  });

  it('should create a camera with custom config', () => {
    const camera = new Camera({ fov: 60, near: 1, far: 500 });
    const config = camera.getConfig();

    expect(config.fov).toBe(60);
    expect(config.near).toBe(1);
    expect(config.far).toBe(500);
  });

  it('should set position correctly', () => {
    const camera = new Camera();
    camera.setPosition(10, 20, 30);

    const transform = camera.getTransform();
    expect(transform.position.x).toBe(10);
    expect(transform.position.y).toBe(20);
    expect(transform.position.z).toBe(30);
  });

  it('should update aspect ratio', () => {
    const camera = new Camera();
    camera.updateAspectRatio(21 / 9);

    const config = camera.getConfig();
    expect(config.aspectRatio).toBe(21 / 9);
  });
});
