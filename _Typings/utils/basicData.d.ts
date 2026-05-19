// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "basicData" /* global */ {
    import { ExecutorVariable } from "editor:type"

    global {
        type int = number
        type float = number
        type bool = boolean
        /** A string formatted as `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`, where each `x` is a hexadecimal digit in lower case. */
        type guid = `${string}-${string}-${string}-${string}-${string}`
        /** All basic types that provided by BME. */
        type Any = ExecutorVariable[keyof ExecutorVariable & `${string}Var`]
    }
}

declare module "basicData" /* Float2 */ {
    import { Float2Brand } from "brand"

    interface ReadonlyFloat2 {
        readonly [Float2Brand]: never

        readonly x: float
        readonly y: float
    }

    interface Float2 extends ReadonlyFloat2 {
        x: float
        y: float
    }

    interface Float2Constructor {
        /**
         * @deprecated `new` keyword recommended.
         * @param x The x component of the float2.
         * @param y The y component of the float2.
         */
        (x: float, y: float): Float2

        /**
         * @param x The x component of the float2.
         * @param y The y component of the float2.
         */
        new (x: float, y: float): Float2

        readonly prototype: Float2
    }

    const Float2: Float2Constructor
}

declare module "basicData" /* Float3 */ {
    import { Float3Brand } from "brand"

    interface ReadonlyFloat3 {
        readonly [Float3Brand]: never

        readonly x: float
        readonly y: float
        readonly z: float
    }

    interface Float3 extends ReadonlyFloat3 {
        x: float
        y: float
        z: float
    }

    interface Float3Constructor {
        /**
         * @deprecated `new` keyword recommended.
         * @param x The x component of the float3.
         * @param y The y component of the float3.
         * @param z The z component of the float3.
         */
        (x: float, y: float, z: float): Float3

        /**
         * @param x The x component of the float3.
         * @param y The y component of the float3.
         * @param z The z component of the float3.
         */
        new (x: float, y: float, z: float): Float3

        readonly prototype: Float3
    }

    const Float3: Float3Constructor
}

declare module "basicData" /* Float4 */ {
    import { Float4Brand } from "brand"

    interface ReadonlyFloat4 {
        readonly [Float4Brand]: never

        readonly x: float
        readonly y: float
        readonly z: float
        readonly w: float
    }

    interface Float4 extends ReadonlyFloat4 {
        x: float
        y: float
        z: float
        w: float
    }

    interface Float4Constructor {
        /**
         * @deprecated `new` keyword recommended.
         * @param x The x component of the float4.
         * @param y The y component of the float4.
         * @param z The z component of the float4.
         * @param w The w component of the float4.
         */
        (x: float, y: float, z: float, w: float): Float4

        /**
         * @param x The x component of the float4.
         * @param y The y component of the float4.
         * @param z The z component of the float4.
         * @param w The w component of the float4.
         */
        new (x: float, y: float, z: float, w: float): Float4

        readonly prototype: Float4
    }

    const Float4: Float4Constructor
}

declare module "basicData" /* Quaternion */ {
    import { QuaternionBrand } from "brand"

    interface ReadonlyQuaternion {
        readonly [QuaternionBrand]: never

        readonly x: float
        readonly y: float
        readonly z: float
        readonly w: float
    }

    interface Quaternion extends ReadonlyQuaternion {
        x: float
        y: float
        z: float
        w: float
    }

    interface QuaternionConstructor {
        /**
         * @deprecated `new` keyword recommended.
         * @param x The x component of the quaternion.
         * @param y The y component of the quaternion.
         * @param z The z component of the quaternion.
         * @param w The w component of the quaternion.
         */
        (x: float, y: float, z: float, w: float): Quaternion

        /**
         * @param x The x component of the quaternion.
         * @param y The y component of the quaternion.
         * @param z The z component of the quaternion.
         * @param w The w component of the quaternion.
         */
        new (x: float, y: float, z: float, w: float): Quaternion

        readonly prototype: Quaternion
    }

    const Quaternion: QuaternionConstructor
}

declare module "basicData" /* Bool3 */ {
    import { Bool3Brand } from "brand"

    interface ReadonlyBool3 {
        readonly [Bool3Brand]: never

        readonly x: bool
        readonly y: bool
        readonly z: bool
    }

    interface Bool3 extends ReadonlyBool3 {
        x: bool
        y: bool
        z: bool
    }

    interface Bool3Constructor {
        /**
         * @deprecated `new` keyword recommended.
         * @param x The x component of the bool3.
         * @param y The y component of the bool3.
         * @param z The z component of the bool3.
         */
        (x: bool, y: bool, z: bool): Bool3

        /**
         * @param x The x component of the bool3.
         * @param y The y component of the bool3.
         * @param z The z component of the bool3.
         */
        new (x: bool, y: bool, z: bool): Bool3

        readonly prototype: Bool3
    }

    const Bool3: Bool3Constructor
}

declare module "basicData" /* Trans */ {
    import { TransBrand } from "brand"

    interface ReadonlyTrans {
        readonly [TransBrand]: never

        readonly pos: ReadonlyFloat3
        readonly rot: ReadonlyFloat3
        readonly scl: ReadonlyFloat3
    }

    interface Trans extends ReadonlyTrans {
        pos: ReadonlyFloat3
        rot: ReadonlyFloat3
        scl: ReadonlyFloat3
    }

    interface TransConstructor {
        /**
         * @deprecated `new` keyword recommended.
         * @param pos The position component of the transform.
         * @param rot The rotation component of the transform.
         * @param scl The scale component of the transform.
         */
        (pos: Float3, rot: Float3, scl: Float3): Trans

        /**
         * @param pos The position component of the transform.
         * @param rot The rotation component of the transform.
         * @param scl The scale component of the transform.
         */
        new (pos: Float3, rot: Float3, scl: Float3): Trans

        readonly prototype: Trans
    }

    const Trans: TransConstructor
}

declare module "basicData" /* ColorRGBA */ {
    import { Assert0To1 } from "utils"
    import { ColorRGBABrand } from "brand"

    interface ReadonlyColorRGBA {
        readonly [ColorRGBABrand]: never

        readonly r: float
        readonly g: float
        readonly b: float
        readonly a: float
    }

    interface ColorRGBA extends ReadonlyColorRGBA {
        r: float
        g: float
        b: float
        a: float
    }

    interface ColorRGBAConstructor {
        /**
         * @deprecated `new` keyword recommended.
         * @param r The red component of the color, between 0 and 1.
         * @param g The green component of the color, between 0 and 1.
         * @param b The blue component of the color, between 0 and 1.
         * @param a The alpha component of the color, between 0 and 1.
         */
        <
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

        /**
         * @param r The red component of the color, between 0 and 1.
         * @param g The green component of the color, between 0 and 1.
         * @param b The blue component of the color, between 0 and 1.
         * @param a The alpha component of the color, between 0 and 1.
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

        readonly prototype: ColorRGBA
    }

    const ColorRGBA: ColorRGBAConstructor
}
