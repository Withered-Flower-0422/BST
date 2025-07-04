// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "basicData" {
    global {
        type int = number
        type float = number
        type bool = boolean
        type json = string

        class Float2 {
            private _brand?: never

            x: float
            y: float
            constructor(x: float, y: float)
        }

        class Float3 {
            private _brand?: never

            x: float
            y: float
            z: float
            constructor(x: float, y: float, z: float)
        }

        class Float4 {
            private _brand?: never

            x: float
            y: float
            z: float
            w: float
            constructor(x: float, y: float, z: float, w: float)
        }

        class Quaternion {
            private _brand?: never

            x: float
            y: float
            z: float
            w: float
            constructor(x: float, y: float, z: float, w: float)
        }

        class Bool3 {
            private _brand?: never

            x: bool
            y: bool
            z: bool
            constructor(x: bool, y: bool, z: bool)
        }

        class Trans {
            private _brand?: never

            pos: Float3
            rot: Float3
            scl: Float3
            constructor(pos: Float3, rot: Float3, scl: Float3)
        }

        class ColorRGBA {
            private _brand?: never

            r: float
            g: float
            b: float
            a: float
            constructor(r: float, g: float, b: float, a: float)
        }
    }
}
