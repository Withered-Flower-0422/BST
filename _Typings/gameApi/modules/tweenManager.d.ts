declare module "game:module:tweenManager" {
    import { EaseType } from "game:type:easeType"
    import { Tween } from "game:type:tween"

    export namespace tweenManager {
        const createFloatTween: (
            from: float,
            to: float,
            easeType: EaseType,
            duration: int,
            onUpdate: (curValue: float) => void,
            onFinish: () => void,
        ) => Tween
        const createFloat3Tween: (
            from: Float3,
            to: Float3,
            easeType: EaseType,
            duration: int,
            onUpdate: (curValue: Float3,) => void,
            onFinish: () => void,
        ) => Tween
        const createQuaternionTween: (
            from: Quaternion,
            to: Quaternion,
            easeType: EaseType,
            duration: int,
            onUpdate: (curValue: Quaternion) => void,
            onFinish: () => void,
        ) => Tween
        const createColorTween: (
            from: ColorRGBA,
            to: ColorRGBA,
            easeType: EaseType,
            duration: int,
            onUpdate: (curValue: ColorRGBA) => void,
            onFinish: () => void,
        ) => Tween
    }
}
