// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:module" {
    import { EaseType, Tween } from "game:type"
    import { AssertNonNegInt } from "utils"
    import { Float3, Quaternion, ColorRGBA } from "basicData"

    namespace tweenManager {
        const createFloatTween: {
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
            <T extends int>(
                from: float,
                to: float,
                easeType: EaseType,
                duration: AssertNonNegInt<T>,
                onUpdate: {
                    /**
                     * A callback function that is called every frame with the current value.
                     * @param curValue - The current value of the tween.
                     * @returns
                     */
                    (curValue: float): void
                },
                onFinish: {
                    /**
                     * A callback function that is called when the tween finishes.
                     * @returns
                     */
                    (): void
                },
            ): Tween
        }

        const createFloat3Tween: {
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
            <T extends int>(
                from: Float3,
                to: Float3,
                easeType: EaseType,
                duration: AssertNonNegInt<T>,
                onUpdate: {
                    /**
                     * A callback function that is called every frame with the current value.
                     * @param curValue - The current value of the tween.
                     * @returns
                     */
                    (curValue: Float3): void
                },
                onFinish: {
                    /**
                     * A callback function that is called when the tween finishes.
                     * @returns
                     */
                    (): void
                },
            ): Tween
        }

        const createQuaternionTween: {
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
            <T extends int>(
                from: Quaternion,
                to: Quaternion,
                easeType: EaseType,
                duration: AssertNonNegInt<T>,
                onUpdate: {
                    /**
                     * A callback function that is called every frame with the current value.
                     * @param curValue - The current value of the tween.
                     * @returns
                     */
                    (curValue: Quaternion): void
                },
                onFinish: {
                    /**
                     * A callback function that is called when the tween finishes.
                     * @returns
                     */
                    (): void
                },
            ): Tween
        }

        const createColorTween: {
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
            <T extends int>(
                from: ColorRGBA,
                to: ColorRGBA,
                easeType: EaseType,
                duration: AssertNonNegInt<T>,
                onUpdate: {
                    /**
                     * A callback function that is called every frame with the current value.
                     * @param curValue - The current value of the tween.
                     * @returns
                     */
                    (curValue: ColorRGBA): void
                },
                onFinish: {
                    /**
                     * A callback function that is called when the tween finishes.
                     * @returns
                     */
                    (): void
                },
            ): Tween
        }
    }
}
