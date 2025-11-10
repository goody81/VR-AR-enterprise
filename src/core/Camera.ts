import { CameraConfig, Transform } from '../types';

/**
 * Camera class for VR/AR scenes
 */
export class Camera {
  private config: CameraConfig;
  private transform: Transform;

  constructor(config: Partial<CameraConfig> = {}) {
    this.config = {
      fov: config.fov ?? 75,
      aspectRatio: config.aspectRatio ?? 16 / 9,
      near: config.near ?? 0.1,
      far: config.far ?? 1000,
    };

    this.transform = {
      position: { x: 0, y: 0, z: 5 },
      rotation: { x: 0, y: 0, z: 0, w: 1 },
      scale: { x: 1, y: 1, z: 1 },
    };
  }

  public getConfig(): CameraConfig {
    return { ...this.config };
  }

  public getTransform(): Transform {
    return { ...this.transform };
  }

  public setPosition(x: number, y: number, z: number): void {
    this.transform.position = { x, y, z };
  }

  public updateAspectRatio(aspectRatio: number): void {
    this.config.aspectRatio = aspectRatio;
  }
}
