// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:module" {
    import { EaseType, Tween } from "game:type"
    import { AssertInt } from "utils"

    namespace tweenManager {
        const createFloatTween: <T extends int>(
            from: float,
            to: float,
            easeType: EaseType,
            duration: AssertInt<T>,
            onUpdate: (curValue: float) => void,
            onFinish: () => void
        ) => Tween

        const createFloat3Tween: <T extends int>(
            from: Float3,
            to: Float3,
            easeType: EaseType,
            duration: AssertInt<T>,
            onUpdate: (curValue: Float3) => void,
            onFinish: () => void
        ) => Tween

        const createQuaternionTween: <T extends int>(
            from: Quaternion,
            to: Quaternion,
            easeType: EaseType,
            duration: AssertInt<T>,
            onUpdate: (curValue: Quaternion) => void,
            onFinish: () => void
        ) => Tween

        const createColorTween: <T extends int>(
            from: ColorRGBA,
            to: ColorRGBA,
            easeType: EaseType,
            duration: AssertInt<T>,
            onUpdate: (curValue: ColorRGBA) => void,
            onFinish: () => void
        ) => Tween
    }
}
