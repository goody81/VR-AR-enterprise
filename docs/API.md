# API Documentation

## Table of Contents

1. [VREngine](#vrengine)
2. [AREngine](#arengine)
3. [Scene](#scene)
4. [Camera](#camera)
5. [Types](#types)

## VREngine

The VREngine class is responsible for rendering VR experiences.

### Constructor

```typescript
constructor(config?: EngineConfig)
```

#### Parameters

- `config` (optional): Engine configuration options
  - `canvas` (optional): HTMLCanvasElement to render to
  - `antialias` (optional): Enable antialiasing (default: true)
  - `powerPreference` (optional): GPU power preference ('high-performance' | 'low-power' | 'default')

### Methods

#### initialize()

```typescript
async initialize(): Promise<void>
```

Initializes the VR engine. Must be called before rendering.

**Throws**: Error if already initialized.

#### setScene(scene)

```typescript
setScene(scene: Scene): void
```

Sets the scene to be rendered.

#### getScene()

```typescript
getScene(): Scene | null
```

Returns the currently set scene, or null if no scene is set.

#### render()

```typescript
render(): void
```

Renders the current scene.

**Throws**: 
- Error if engine is not initialized
- Error if no scene is set

#### dispose()

```typescript
dispose(): void
```

Cleans up resources and resets the engine state.

## AREngine

The AREngine class is responsible for rendering AR experiences.

### Constructor

```typescript
constructor(config?: EngineConfig)
```

Same as VREngine constructor.

### Methods

Same methods as VREngine (initialize, setScene, getScene, render, dispose).

## Scene

The Scene class manages VR/AR environments.

### Constructor

```typescript
constructor(config: SceneConfig)
```

#### Parameters

- `config`: Scene configuration
  - `name` (required): Scene name
  - `backgroundColor` (optional): Background color (default: '#000000')
  - `ambientLight` (optional): Ambient light intensity 0-1 (default: 0.5)

### Methods

#### getName()

```typescript
getName(): string
```

Returns the scene name.

#### getConfig()

```typescript
getConfig(): SceneConfig
```

Returns a copy of the scene configuration.

#### setCamera(camera)

```typescript
setCamera(camera: Camera): void
```

Sets the camera for this scene.

#### getCamera()

```typescript
getCamera(): Camera | null
```

Returns the scene's camera, or null if no camera is set.

#### setBackgroundColor(color)

```typescript
setBackgroundColor(color: string): void
```

Sets the background color.

#### setAmbientLight(intensity)

```typescript
setAmbientLight(intensity: number): void
```

Sets the ambient light intensity (clamped between 0 and 1).

## Camera

The Camera class manages the view into VR/AR scenes.

### Constructor

```typescript
constructor(config?: Partial<CameraConfig>)
```

#### Parameters

- `config` (optional): Camera configuration
  - `fov` (optional): Field of view in degrees (default: 75)
  - `aspectRatio` (optional): Aspect ratio (default: 16/9)
  - `near` (optional): Near clipping plane (default: 0.1)
  - `far` (optional): Far clipping plane (default: 1000)

### Methods

#### getConfig()

```typescript
getConfig(): CameraConfig
```

Returns a copy of the camera configuration.

#### getTransform()

```typescript
getTransform(): Transform
```

Returns a copy of the camera's transform (position, rotation, scale).

#### setPosition(x, y, z)

```typescript
setPosition(x: number, y: number, z: number): void
```

Sets the camera position in 3D space.

#### updateAspectRatio(aspectRatio)

```typescript
updateAspectRatio(aspectRatio: number): void
```

Updates the camera's aspect ratio.

## Types

### Vector3

```typescript
interface Vector3 {
  x: number;
  y: number;
  z: number;
}
```

### Quaternion

```typescript
interface Quaternion {
  x: number;
  y: number;
  z: number;
  w: number;
}
```

### Transform

```typescript
interface Transform {
  position: Vector3;
  rotation: Quaternion;
  scale: Vector3;
}
```

### CameraConfig

```typescript
interface CameraConfig {
  fov: number;
  aspectRatio: number;
  near: number;
  far: number;
}
```

### SceneConfig

```typescript
interface SceneConfig {
  name: string;
  backgroundColor?: string;
  ambientLight?: number;
}
```

### EngineConfig

```typescript
interface EngineConfig {
  canvas?: HTMLCanvasElement;
  antialias?: boolean;
  powerPreference?: 'high-performance' | 'low-power' | 'default';
}
```

## Examples

See the main [README.md](../README.md) for usage examples.
