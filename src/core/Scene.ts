import { SceneConfig } from '../types';
import { Camera } from './Camera';

/**
 * Scene class for managing VR/AR environments
 */
export class Scene {
  private config: SceneConfig;
  private camera: Camera | null = null;

  constructor(config: SceneConfig) {
    this.config = {
      name: config.name,
      backgroundColor: config.backgroundColor ?? '#000000',
      ambientLight: config.ambientLight ?? 0.5,
    };
  }

  public getName(): string {
    return this.config.name;
  }

  public getConfig(): SceneConfig {
    return { ...this.config };
  }

  public setCamera(camera: Camera): void {
    this.camera = camera;
  }

  public getCamera(): Camera | null {
    return this.camera;
  }

  public setBackgroundColor(color: string): void {
    this.config.backgroundColor = color;
  }

  public setAmbientLight(intensity: number): void {
    this.config.ambientLight = Math.max(0, Math.min(1, intensity));
  }
}
