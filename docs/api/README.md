# API Documentation

## 18PlusAi Studios VR/AR Enterprise Platform API

**Version:** 1.0.0  
**Base URL:** `/api/v1`

---

## Authentication

All API endpoints (except health checks) require age verification.

### Headers
```
X-Age-Verified: true
Authorization: Bearer <token>
```

---

## Endpoints

### Health Check

#### GET `/health`
Check system health status.

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2025-11-10T19:20:00.000Z"
}
```

---

### System Info

#### GET `/api/info`
Get platform information.

**Headers Required:** Yes

**Response:**
```json
{
  "features": ["VR Support", "AR Support", "AI Integration", "Enterprise Tools"],
  "requirements": { "minAge": 18 },
  "environment": "production"
}
```

---

### VR Endpoints

#### POST `/api/vr/devices`
Register a VR device.

**Request Body:**
```json
{
  "name": "Meta Quest 2",
  "type": "headset"
}
```

**Response:**
```json
{
  "id": 1699999999999,
  "name": "Meta Quest 2",
  "type": "headset",
  "connected": true
}
```

#### GET `/api/vr/devices`
Get all registered VR devices.

**Response:**
```json
{
  "devices": [
    {
      "id": 1699999999999,
      "name": "Meta Quest 2",
      "type": "headset",
      "connected": true
    }
  ]
}
```

---

### AR Endpoints

#### POST `/api/ar/markers`
Add an AR marker.

**Request Body:**
```json
{
  "name": "Product Marker",
  "type": "image",
  "position": { "x": 0, "y": 0, "z": 0 }
}
```

**Response:**
```json
{
  "id": 1699999999999,
  "name": "Product Marker",
  "type": "image",
  "position": { "x": 0, "y": 0, "z": 0 }
}
```

#### GET `/api/ar/markers`
Get all AR markers.

---

## Error Responses

### 403 Forbidden
```json
{
  "error": "Age verification required",
  "message": "You must be 18+ to access this platform"
}
```

### 500 Internal Server Error
```json
{
  "error": "Internal Server Error",
  "message": "Something went wrong"
}
```

---

## Rate Limiting

- Window: 15 minutes
- Max Requests: 100 per window

---

## Support

For API support, contact: support@18plusai.com
