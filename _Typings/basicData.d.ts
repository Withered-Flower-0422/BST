declare module "basicData" {
    global {
        type int = number
        type float = number
        type bool = boolean
        type json = string

        class Float2 {
            x: float
            y: float
            constructor(x: float, y: float)
        }

        class Float3 {
            x: float
            y: float
            z: float
            constructor(x: float, y: float, z: float)
        }

        class Float4 {
            x: float
            y: float
            z: float
            w: float
            constructor(x: float, y: float, z: float, w: float)
        }

        class Quaternion {
            x: float
            y: float
            z: float
            w: float
            constructor(x: float, y: float, z: float, w: float)
        }

        class Bool3 {
            x: bool
            y: bool
            z: bool
            constructor(x: bool, y: bool, z: bool)
        }

        class Trans {
            pos: Float3
            rot: Quaternion
            scl: Float3
            constructor(pos: Float3, rot: Quaternion, scl: Float3)
        }

        class ColorRGBA {
            r: float
            g: float
            b: float
            a: float
            constructor(r: float, g: float, b: float, a: float)
        }
    }
}
