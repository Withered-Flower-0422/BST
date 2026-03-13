// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "brand" {
    const Float2Brand: unique symbol
    const Float3Brand: unique symbol
    const Float4Brand: unique symbol
    const QuaternionBrand: unique symbol
    const Bool3Brand: unique symbol
    const TransBrand: unique symbol
    const ColorRGBABrand: unique symbol
}

declare module "basicData" {
    import { ExecutorVariable } from "editor:type"
    import { Assert0To1 } from "utils"
    import {
        Float2Brand,
        Float3Brand,
        Float4Brand,
        QuaternionBrand,
        Bool3Brand,
        TransBrand,
        ColorRGBABrand,
    } from "brand"

    global {
        type int = number
        type float = number
        type bool = boolean
        /** A string formatted as `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`, where each `x` is a hexadecimal digit in lower case. */
        type guid = `${string}-${string}-${string}-${string}-${string}`
        /** All basic types that provided by BME. */
        type Any = ExecutorVariable[keyof ExecutorVariable & `${string}Var`]
    }

    class Float2 {
        private [Float2Brand]: never

        x: float
        y: float

        /**
         * @param x - The x component of the float2.
         * @param y - The y component of the float2.
         */
        constructor(x: float, y: float)
    }

    class Float3 {
        private [Float3Brand]: never

        x: float
        y: float
        z: float

        /**
         * @param x - The x component of the float3.
         * @param y - The y component of the float3.
         * @param z - The z component of the float3.
         */
        constructor(x: float, y: float, z: float)
    }

    class Float4 {
        private [Float4Brand]: never

        x: float
        y: float
        z: float
        w: float

        /**
         * @param x - The x component of the float4.
         * @param y - The y component of the float4.
         * @param z - The z component of the float4.
         * @param w - The w component of the float4.
         */
        constructor(x: float, y: float, z: float, w: float)
    }

    class Quaternion {
        private [QuaternionBrand]: never

        x: float
        y: float
        z: float
        w: float

        /**
         * @param x - The x component of the quaternion.
         * @param y - The y component of the quaternion.
         * @param z - The z component of the quaternion.
         * @param w - The w component of the quaternion.
         */
        constructor(x: float, y: float, z: float, w: float)
    }

    class Bool3 {
        private [Bool3Brand]: never

        x: bool
        y: bool
        z: bool

        /**
         * @param x - The x component of the bool3.
         * @param y - The y component of the bool3.
         * @param z - The z component of the bool3.
         */
        constructor(x: bool, y: bool, z: bool)
    }

    class Trans {
        private [TransBrand]: never

        pos: Float3
        rot: Float3
        scl: Float3

        /**
         * @param pos - The position component of the transform.
         * @param rot - The rotation component of the transform.
         * @param scl - The scale component of the transform.
         */
        constructor(pos: Float3, rot: Float3, scl: Float3)
    }

    interface ColorRGBA {
        [ColorRGBABrand]: never

        r: float
        g: float
        b: float
        a: float
    }

    interface ColorRGBAConstructor {
        /**
         * @param r - The red component of the color, between 0 and 1.
         * @param g - The green component of the color, between 0 and 1.
         * @param b - The blue component of the color, between 0 and 1.
         * @param a - The alpha component of the color, between 0 and 1.
         */
        new <
            R extends float = float,
            G extends float = float,
            B extends float = float,
            A extends float = float,
        >(
            r: Assert0To1<R>,
            g: Assert0To1<G>,
            b: Assert0To1<B>,
            a: Assert0To1<A>,
        ): ColorRGBA

        prototype: ColorRGBA
    }

    const ColorRGBA: ColorRGBAConstructor
}
