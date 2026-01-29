// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "math" {
    import { Assert0To1 } from "utils"
    import { Float2, Float3, Float4, Quaternion } from "basicData"

    namespace math {
        const quaternionToFloat3: {
            /**
             * Converts a Quaternion to a Float3.
             * @param value - The Quaternion to convert.
             * @returns The Float3 representation of the Quaternion.
             */
            (value: Quaternion): Float3
        }

        const float3ToQuaternion: {
            /**
             * Converts a Float3 to a Quaternion.
             * @param value - The Float3 to convert.
             * @returns The Quaternion representation of the Float3.
             */
            (value: Float3): Quaternion
        }

        const perlinNoise: {
            /**
             * Gets a perlin noise value at the given coordinates.
             * @param x - The x coordinate.
             * @param y - The y coordinate.
             * @returns The perlin noise value at the given coordinates.
             */
            (x: float, y: float): float
        }

        const lerp: {
            /**
             * Linearly interpolates between two float values.
             * @param a - The first float value.
             * @param b - The second float value.
             * @param t - The interpolation value, between 0 and 1.
             * @returns The interpolated float value.
             */
            <T extends float>(a: float, b: float, t: Assert0To1<T>): float
        }

        const lerpAngle: {
            /**
             * Linearly interpolates between two angles in degrees.
             * @param a - The first angle in degrees.
             * @param b - The second angle in degrees.
             * @param t - The interpolation value, between 0 and 1.
             * @returns The interpolated angle in degrees.
             */
            <T extends float>(a: float, b: float, t: Assert0To1<T>): float
        }

        const lerpFloat2: {
            /**
             * Linearly interpolates between two Float2 values.
             * @param a - The first Float2 value.
             * @param b - The second Float2 value.
             * @param t - The interpolation value, between 0 and 1.
             * @returns The interpolated Float2 value.
             */
            <T extends float>(a: Float2, b: Float2, t: Assert0To1<T>): Float2
        }

        const lerpFloat3: {
            /**
             * Linearly interpolates between two Float3 values.
             * @param a - The first Float3 value.
             * @param b - The second Float3 value.
             * @param t - The interpolation value, between 0 and 1.
             * @returns The interpolated Float3 value.
             */
            <T extends float>(a: Float3, b: Float3, t: Assert0To1<T>): Float3
        }

        const lerpFloat4: {
            /**
             * Linearly interpolates between two Float4 values.
             * @param a - The first Float4 value.
             * @param b - The second Float4 value.
             * @param t - The interpolation value, between 0 and 1.
             * @returns The interpolated Float4 value.
             */
            <T extends float>(a: Float4, b: Float4, t: Assert0To1<T>): Float4
        }

        const lerpQuaternion: {
            /**
             * Linearly interpolates between two Quaternion values.
             * @param a - The first Quaternion value.
             * @param b - The second Quaternion value.
             * @param t - The interpolation value, between 0 and 1.
             * @returns The interpolated Quaternion value.
             */
            <T extends float>(
                a: Quaternion,
                b: Quaternion,
                t: Assert0To1<T>,
            ): Quaternion
        }

        const slerpFloat3: {
            /**
             * Spherically interpolates between two Float3 values.
             * @param a - The first Float3 value.
             * @param b - The second Float3 value.
             * @param t - The interpolation value, between 0 and 1.
             * @returns The spherically interpolated Float3 value.
             */
            <T extends float>(a: Float3, b: Float3, t: Assert0To1<T>): Float3
        }

        const normalizeFloat3: {
            /**
             * Normalizes a Float3 value.
             * @param value - The Float3 value to normalize.
             * @returns The normalized Float3 value.
             */
            (value: Float3): Float3
        }

        const normalizeQuaternion: {
            /**
             * Normalizes a Quaternion value.
             * @param value - The Quaternion value to normalize.
             * @returns The normalized Quaternion value.
             */
            (value: Quaternion): Quaternion
        }

        const crossProductFloat3: {
            /**
             * Calculates the cross product of two Float3 values.
             * @param a - The first Float3 value.
             * @param b - The second Float3 value.
             * @returns The cross product of the two Float3 values.
             */
            (a: Float3, b: Float3): Float3
        }

        const dotProductFloat3: {
            /**
             * Calculates the dot product of two Float3 values.
             * @param a - The first Float3 value.
             * @param b - The second Float3 value.
             * @returns The dot product of the two Float3 values.
             */
            (a: Float3, b: Float3): float
        }

        const projectFloat3: {
            /**
             * Calculates the projection of a Float3 value onto another Float3 value.
             * @param a - The Float3 value to project.
             * @param b - The Float3 value to project onto.
             * @returns The projection of the Float3 value onto the other Float3 value.
             */
            (a: Float3, b: Float3): Float3
        }

        const reflectFloat3: {
            /**
             * Calculates the reflection of a Float3 value off a surface with normal vector b.
             * @param a - The Float3 value to reflect.
             * @param b - The normal vector of the surface to reflect off.
             * @returns The reflected Float3 value.
             */
            (a: Float3, b: Float3): Float3
        }

        const angleFloat3: {
            /**
             * Calculates the angle between two Float3 values in degrees.
             * @param a - The first Float3 value.
             * @param b - The second Float3 value.
             * @returns The angle between the two Float3 values in degrees.
             */
            (a: Float3, b: Float3): float
        }

        const angleQuaternion: {
            /**
             * Calculates the angle between two Quaternion values in degrees.
             * @param a - The first Quaternion value.
             * @param b - The second Quaternion value.
             * @returns The angle between the two Quaternion values in degrees.
             */
            (a: Quaternion, b: Quaternion): float
        }

        const distanceFloat3: {
            /**
             * Calculates the distance between two Float3 values.
             * @param a - The first Float3 value.
             * @param b - The second Float3 value.
             * @returns The distance between the two Float3 values.
             */
            (a: Float3, b: Float3): float
        }

        const lengthFloat3: {
            /**
             * Calculates the length of a Float3 value.
             * @param value - The Float3 value to calculate the length of.
             * @returns The length of the Float3 value.
             */
            (value: Float3): float
        }
    }
}
