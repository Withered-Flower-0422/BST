// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:module" {
    import { EaseType, Tween } from "game:type"
    import { AssertInt } from "utils"

    namespace tweenManager {
        /**
         * Creates a tween that can interpolate a float from a start value to an end value.
         * @param from - The start value.
         * @param to - The end value.
         * @param easeType - The easing type to use.
         * @param duration - The duration from the start value to the end value in frames.
         * @param onUpdate - A callback function that is called every frame with the current value.
         * @param onFinish - A callback function that is called when the tween finishes.
         * @returns A tween object that can be played, stopped, or paused.
         */
        const createFloatTween: <T extends int>(
            from: float,
            to: float,
            easeType: EaseType,
            duration: AssertInt<T>,
            onUpdate: (curValue: float) => void,
            onFinish: () => void
        ) => Tween

        /**
         * Creates a tween that can interpolate a Float3 from a start value to an end value.
         * @param from - The start value.
         * @param to - The end value.
         * @param easeType - The easing type to use.
         * @param duration - The duration from the start value to the end value in frames.
         * @param onUpdate - A callback function that is called every frame with the current value.
         * @param onFinish - A callback function that is called when the tween finishes.
         * @returns A tween object that can be played, stopped, or paused.
         */
        const createFloat3Tween: <T extends int>(
            from: Float3,
            to: Float3,
            easeType: EaseType,
            duration: AssertInt<T>,
            onUpdate: (curValue: Float3) => void,
            onFinish: () => void
        ) => Tween

        /**
         * Creates a tween that can interpolate a Quaternion from a start value to an end value.
         * @param from - The start value.
         * @param to - The end value.
         * @param easeType - The easing type to use.
         * @param duration - The duration from the start value to the end value in frames.
         * @param onUpdate - A callback function that is called every frame with the current value.
         * @param onFinish - A callback function that is called when the tween finishes.
         * @returns A tween object that can be played, stopped, or paused.
         */
        const createQuaternionTween: <T extends int>(
            from: Quaternion,
            to: Quaternion,
            easeType: EaseType,
            duration: AssertInt<T>,
            onUpdate: (curValue: Quaternion) => void,
            onFinish: () => void
        ) => Tween

        /**
         * Creates a tween that can interpolate a ColorRGBA from a start value to an end value.
         * @param from - The start value.
         * @param to - The end value.
         * @param easeType - The easing type to use.
         * @param duration - The duration from the start value to the end value in frames.
         * @param onUpdate - A callback function that is called every frame with the current value.
         * @param onFinish - A callback function that is called when the tween finishes.
         * @returns A tween object that can be played, stopped, or paused.
         */
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
