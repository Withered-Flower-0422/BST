// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "math" {
    import { Assert0To1 } from "utils"
    import { Float2, Float3, Float4, Quaternion } from "basicData"

    namespace math {
        /**
         * Converts a Float3 to a Quaternion.
         * @param value - The Float3 to convert.
         * @returns The Quaternion representation of the Float3.
         */
        const quaternionToFloat3: (value: Quaternion) => Float3

        /**
         * Converts a Quaternion to a Float3.
         * @param value - The Quaternion to convert.
         * @returns The Float3 representation of the Quaternion.
         */
        const float3ToQuaternion: (value: Float3) => Quaternion

        /**
         * Gets a perlin noise value at the given coordinates.
         * @param x - The x coordinate.
         * @param y - The y coordinate.
         * @returns The perlin noise value at the given coordinates.
         */
        const perlinNoise: (x: float, y: float) => float

        /**
         * Linearly interpolates between two float values.
         * @param a - The first float value.
         * @param b - The second float value.
         * @param t - The interpolation value, between 0 and 1.
         * @returns The interpolated float value.
         */
        const lerp: <T extends float>(a: float, b: float, t: Assert0To1<T>) => float

        /**
         * Linearly interpolates between two angles in degrees.
         * @param a - The first angle in degrees.
         * @param b - The second angle in degrees.
         * @param t - The interpolation value, between 0 and 1.
         * @returns The interpolated angle in degrees.
         */
        const lerpAngle: <T extends float>(a: float, b: float, t: Assert0To1<T>) => float

        /**
         * Linearly interpolates between two Float2 values.
         * @param a - The first Float2 value.
         * @param b - The second Float2 value.
         * @param t - The interpolation value, between 0 and 1.
         * @returns The interpolated Float2 value.
         */
        const lerpFloat2: <T extends float>(a: Float2, b: Float2, t: Assert0To1<T>) => Float2

        /**
         * Linearly interpolates between two Float3 values.
         * @param a - The first Float3 value.
         * @param b - The second Float3 value.
         * @param t - The interpolation value, between 0 and 1.
         * @returns The interpolated Float3 value.
         */
        const lerpFloat3: <T extends float>(a: Float3, b: Float3, t: Assert0To1<T>) => Float3

        /**
         * Linearly interpolates between two Float4 values.
         * @param a - The first Float4 value.
         * @param b - The second Float4 value.
         * @param t - The interpolation value, between 0 and 1.
         * @returns The interpolated Float4 value.
         */
        const lerpFloat4: <T extends float>(a: Float4, b: Float4, t: Assert0To1<T>) => Float4

        /**
         * Linearly interpolates between two Quaternion values.
         * @param a - The first Quaternion value.
         * @param b - The second Quaternion value.
         * @param t - The interpolation value, between 0 and 1.
         * @returns The interpolated Quaternion value.
         */
        const lerpQuaternion: <T extends float>(a: Quaternion, b: Quaternion, t: Assert0To1<T>) => Quaternion

        /**
         * Spherically interpolates between two Float3 values.
         * @param a - The first Float3 value.
         * @param b - The second Float3 value.
         * @param t - The interpolation value, between 0 and 1.
         * @returns The spherically interpolated Float3 value.
         */
        const slerpFloat3: <T extends float>(a: Float3, b: Float3, t: Assert0To1<T>) => Float3

        /**
         * Normalizes a Float3 value.
         * @param value - The Float3 value to normalize.
         * @returns The normalized Float3 value.
         */
        const normalizeFloat3: (value: Float3) => Float3

        /**
         * Normalizes a Quaternion value.
         * @param value - The Quaternion value to normalize.
         * @returns The normalized Quaternion value.
         */
        const normalizeQuaternion: (value: Quaternion) => Quaternion

        /**
         * Calculates the cross product of two Float3 values.
         * @param a - The first Float3 value.
         * @param b - The second Float3 value.
         * @returns The cross product of the two Float3 values.
         */
        const crossProductFloat3: (a: Float3, b: Float3) => Float3

        /**
         * Calculates the dot product of two Float3 values.
         * @param a - The first Float3 value.
         * @param b - The second Float3 value.
         * @returns The dot product of the two Float3 values.
         */
        const dotProductFloat3: (a: Float3, b: Float3) => float

        /**
         * Calculates the projection of a Float3 value onto another Float3 value.
         * @param a - The Float3 value to project.
         * @param b - The Float3 value to project onto.
         * @returns The projection of the Float3 value onto the other Float3 value.
         */
        const projectFloat3: (a: Float3, b: Float3) => Float3

        /**
         * Calculates the reflection of a Float3 value off a surface with normal vector b.
         * @param a - The Float3 value to reflect.
         * @param b - The normal vector of the surface to reflect off.
         * @returns The reflected Float3 value.
         */
        const reflectFloat3: (a: Float3, b: Float3) => Float3

        /**
         * Calculates the angle between two Float3 values in degrees.
         * @param a - The first Float3 value.
         * @param b - The second Float3 value.
         * @returns The angle between the two Float3 values in degrees.
         */
        const angleFloat3: (a: Float3, b: Float3) => float

        /**
         * Calculates the angle between two Quaternion values in degrees.
         * @param a - The first Quaternion value.
         * @param b - The second Quaternion value.
         * @returns The angle between the two Quaternion values in degrees.
         */
        const angleQuaternion: (a: Quaternion, b: Quaternion) => float

        /**
         * Calculates the distance between two Float3 values.
         * @param a - The first Float3 value.
         * @param b - The second Float3 value.
         * @returns The distance between the two Float3 values.
         */
        const distanceFloat3: (a: Float3, b: Float3) => float

        /**
         * Calculates the length of a Float3 value.
         * @param value - The Float3 value to calculate the length of.
         * @returns The length of the Float3 value.
         */
        const lengthFloat3: (value: Float3) => float
    }
}
