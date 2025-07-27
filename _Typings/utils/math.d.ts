// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "math" {
    namespace math {
        const quaternionToFloat3: (value: Quaternion) => Float3
        const float3ToQuaternion: (value: Float3) => Quaternion
        const perlinNoise: (x: float, y: float) => float
        const lerp: (a: float, b: float, t: float) => float
        const lerpAngle: (a: float, b: float, t: float) => float
        const lerpFloat2: (a: Float2, b: Float2, t: float) => Float2
        const lerpFloat3: (a: Float3, b: Float3, t: float) => Float3
        const lerpFloat4: (a: Float4, b: Float4, t: float) => Float4
        const lerpQuaternion: (a: Quaternion, b: Quaternion, t: float) => Quaternion
        const slerpFloat3: (a: Float3, b: Float3, t: float) => Float3
        const normalizeFloat3: (value: Float3) => Float3
        const normalizeQuaternion: (value: Quaternion) => Quaternion
        const crossProductFloat3: (a: Float3, b: Float3) => Float3
        const dotProductFloat3: (a: Float3, b: Float3) => float
        const projectFloat3: (a: Float3, b: Float3) => Float3
        const reflectFloat3: (a: Float3, b: Float3) => Float3
        const angleFloat3: (a: Float3, b: Float3) => float
        const angleQuaternion: (a: Quaternion, b: Quaternion) => float
        const distanceFloat3: (a: Float3, b: Float3) => float
        const lengthFloat3: (value: Float3) => float
    }
}
