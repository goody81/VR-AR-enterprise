/**
 * Type definitions for VR/AR Enterprise platform
 */

export interface Vector3 {
  x: number;
  y: number;
  z: number;
}

export interface Quaternion {
  x: number;
  y: number;
  z: number;
  w: number;
}

export interface Transform {
  position: Vector3;
  rotation: Quaternion;
  scale: Vector3;
}

export interface CameraConfig {
  fov: number;
  aspectRatio: number;
  near: number;
  far: number;
}

export interface SceneConfig {
  name: string;
  backgroundColor?: string;
  ambientLight?: number;
}

export interface EngineConfig {
  canvas?: HTMLCanvasElement;
  antialias?: boolean;
  powerPreference?: 'high-performance' | 'low-power' | 'default';
}
