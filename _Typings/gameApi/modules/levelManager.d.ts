// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:module" {
    import { BallType, Component } from "game:type"
    import { AssertGuid } from "guid"
    import {
        Assert0To1,
        Assert0To1s,
        AssertNonNeg,
        AssertNonNegInt,
    } from "utils"
    import { KeyboardKey, KeyboardKeyEnum } from "keys"
    import { AssertPath } from "path"
    import { Float3, ColorRGBA } from "basicData"

    type TipGuid = string & { readonly _TipGuidBrand: unique symbol }

    enum Skin {
        Default = 0,
        Mush = 1,
    }

    enum CameraMode {
        FourDirection = 0,
        FreeLook = 1,
        FirstPerson = 2,
    }

    enum CameraDirection {
        /** Face to `z+`. */
        North = 0,
        /** Face to `x+`. */
        East = 1,
        /** Face to `z-`. */
        South = 2,
        /** Face to `x-`. */
        West = 3,
    }

    type VfxType =
        | "SpawnPlayer"
        | "SwitchBall"
        | "DestroyObject"
        | "WaterRipple"
        | "CollectScore"
        | "CollectRecover"
        | "CollectCure"
        | "CollectFroze"
        | "CollectElectric"
        | "CollectCollection"
        | "TransportStart"
        | "TransportEnd"
        | "Explosion"
        | "DeathTransfer"

    namespace levelManager {
        /**
         * @range `0.1 ~ 2`
         */
        let timeScale: float
        let score: float
        let spawnPointPosition: Float3
        let spawnPointRotation: float
        /** @deprecated Not implemented yet. */
        let spawnBallType: BallType
        /**
         * Click to see {@link CameraMode | all camera modes}.
         */
        let cameraMode: CameraMode
        /**
         * Click to see {@link CameraDirection | all camera directions}.
         */
        let cameraDirection: CameraDirection
        let cameraAngle: float
        let cameraPitch: float
        let cameraZoom: float
        /**
         * @readonly
         */
        const mapTesting: bool
        /**
         * @readonly
         */
        const time: int
        /**
         * Click to see {@link Skin | all skins}.
         * @readonly
         */
        const skin: Skin
        /**
         * @readonly
         */
        const timerEnabled: bool

        const callLevelComplete: {
            /**
             * Completes the level without the completion animation.
             * @returns
             */
            (): void
        }

        const callLevelCompleteWithAnimation: {
            /**
             * Completes the level with the completion animation.
             * @param position - The position of the completion animation.
             * @returns
             */
            (position: Float3): void
        }

        const callSuicide: {
            /**
             * Suicides the player ball.
             * @returns
             */
            (): void
        }

        const callRestart: {
            /**
             * Restarts the level.
             * @returns
             */
            (): void
        }

        const transferPlayer: {
            /**
             * Transfers the player ball to the specified position. The camera will jump to the position directly.
             * @param targetPosition - The position to transfer the player ball to.
             * @returns
             */
            (targetPosition: Float3): void
        }

        const setCameraTarget: {
            /**
             * Sets the camera to follow the specified item.
             * @param guid - The guid string of the item to be followed by the camera.
             * @param displayName - The name shown on the ui. This parameter only works when `guid` is **not** `null`.
             * @returns
             */
            <S extends guid>(guid: AssertGuid<S>, displayName: string): void

            /**
             * Sets the camera to follow the specified item.
             * @param guid - If `null` is passed, the camera will follow back to the player ball.
             * @param displayName - If `guid` is `null`, the name shown on the ui will always be the name of the player ball.
             * @returns
             */
            (guid: null, displayName: null): void
        }

        const showTip: {
            /**
             * Shows a tip with the specified content.
             * @param content - The content of the tip to be shown.
             * @returns The shown tip's guid.
             */
            (content: string): TipGuid
        }

        const hideTip: {
            /**
             * Hides the tip with the specified guid.
             * @param guid - The guid of the tip to be hidden.
             * @returns
             */
            (guid: TipGuid): void
        }

        const hideAllTips: {
            /**
             * Hides all tips.
             * @returns
             */
            (): void
        }

        const hideTipDelay: {
            /**
             * Hides the tip with the specified guid after a specified number of frames.
             * @param guid - The guid of the tip to be hidden.
             * @param frame - The number of frames to wait before hiding the tip.
             * @returns
             */
            <T extends int>(guid: TipGuid, frame: AssertNonNegInt<T>): void
        }

        const hideAllTipsDelay: {
            /**
             * Hides all tips after a specified number of frames.
             * @param frame - The number of frames to wait before hiding all tips.
             * @returns
             */
            <T extends int>(frame: AssertNonNegInt<T>): void
        }

        const save: {
            /**
             * Saves data to the local storage.
             * @param data - A `json` string to save.
             * @returns Whether the data is saved successfully.
             * @NOTE -
             * - **NOT** a JSON object, needs to be stringified first.
             */
            (data: json): bool
        }

        const load: {
            /**
             * Loads data from the local storage.
             * @returns A `json` string of the saved data.
             * @NOTE -
             * - **NOT** a JSON object, needs to be parsed before use.
             */
            (): json
        }

        const cancelEvent: {
            /**
             * Cancels the specified event. The event must be cancelable (i.e. starts with `OnPre`).
             * @param eventName - The name of the event to be canceled.
             * @returns
             */
            <RE extends RegisterEvent[] = RegisterEvent[]>(
                eventName: `OnPre${string}` & RE[number],
            ): void
        }

        const sendCustomEvent: {
            /**
             * Sends a custom event with the specified message. Other scripts can listen to this event by registering `OnReceiveCustomEvent`.
             * @param message - The message to be sent.
             * @returns
             */
            (message: any): void
        }

        const spawnVfx: {
            /**
             * Spawns a visual effect with the specified type at the specified position.
             * @param type - The type of the visual effect to be spawned.
             * @param position - The position to spawn the visual effect at.
             * @returns
             */
            (type: VfxType, position: Float3): void
        }

        const spawnVfxPRS: {
            /**
             * Spawns a visual effect with the specified type at the specified position, rotation, and scale.
             * @param type - The type of the visual effect to be spawned.
             * @param position - The position to spawn the visual effect at.
             * @param rotation - The rotation of the visual effect.
             * @param scale - The scale of the visual effect.
             * @returns
             */
            (
                type: VfxType,
                position: Float3,
                rotation: Float3,
                scale: Float3,
            ): void
        }

        const setCustomCamera: {
            /**
             * Uses a custom camera. If `null` is passed, default camera will be used.
             * @param camera - The camera component to be used as custom camera. If `null` is passed, default camera will be used.
             * @returns
             */
            (camera: Component<"Camera"> | null): void
        }

        const invoke: {
            /**
             * Invokes a function after a specified number of frames.
             * @param func - The function to be invoked.
             * @param delayFrame - The number of frames to wait before invoking the function.
             * @returns
             */
            <T extends int>(
                func: { (): void },
                delayFrame: AssertNonNegInt<T>,
            ): void
        }

        const startTimer: {
            /**
             * Starts the game's internal timer.
             * @returns
             */
            (): void
        }

        const stopTimer: {
            /**
             * Stops the game's internal timer.
             * @returns The time elapsed since the last `startTimer()` call, in milliseconds.
             */
            (): float
        }

        const getDefaultCameraPosition: {
            /**
             * Gets the default camera position.
             * @returns The default camera position.
             */
            (): Float3
        }

        const getDefaultCameraRotation: {
            /**
             * Gets the default camera rotation.
             * @returns The default camera rotation.
             */
            (): float
        }

        const getDefaultCameraFov: {
            /**
             * Gets the default camera fov.
             * @returns The default camera fov.
             */
            (): float
        }

        const getCameraOffsetSmooth: {
            /**
             * Gets the default camera's offset smoothness value.
             * @returns The default camera's offset smoothness value.
             */
            (): float
        }

        const setCameraOffsetSmooth: {
            /**
             * Sets a value to the default camera's offset smoothness.
             * @param value - The value to be set to the default camera's offset smoothness.
             * @returns
             */
            <T extends float>(value: AssertNonNeg<T>): void
        }

        const createCustomStatusBar: {
            /**
             * Creates a custom status bar which will show on the bottom of the screen.
             * @param statusBarName - The unique name of the status bar to be created.
             * @param iconPath - The path of the icon to be shown on the left side of the status bar.
             * @param marks - The marks to be shown on the status bar, range from `0` to `1`.
             * @param value - The value of the status bar to be shown, range from `0` to `1`.
             * @param valueString - The string to be shown on the right side of the status bar, no related logic with the value, can be any text.
             * @param color - The color of the status bar.
             * @returns
             */
            <
                const T extends readonly float[],
                U extends float,
                V extends string,
            >(
                statusBarName: string,
                iconPath: AssertPath<V, "Textures">,
                marks: T & Assert0To1s<T>,
                value: Assert0To1<U>,
                valueString: string,
                color: ColorRGBA,
            ): void
        }

        const setCustomStatusBarValue: {
            /**
             * Sets the value of the custom status bar with the specified name.
             * @param statusBarName - The unique name of the status bar to be set.
             * @param value - The value of the status bar to be shown, range from `0` to `1`.
             * @param valueString - The string to be shown on the right side of the status bar, no related logic with the value, can be any text.
             * @param color - The color of the status bar.
             * @returns
             */
            <T extends float>(
                statusBarName: string,
                value: Assert0To1<T>,
                valueString: string,
                color: ColorRGBA,
            ): void
        }

        const destroyCustomStatusBar: {
            /**
             * Destroys the custom status bar with the specified name.
             * @param statusBarName - The unique name of the status bar to be destroyed.
             * @returns
             */
            (statusBarName: string): void
        }

        /** @deprecated Not implemented yet. */
        const isCustomStatusBarExist: {
            /**
             * Checks if the custom status bar with the specified name exists.
             * @param statusBarName - The unique name of the status bar to be checked.
             * @returns Whether the custom status bar with the specified name exists.
             */
            (statusBarName: string): bool
        }

        const getConfig: {
            /**
             * Gets the index of the custom value that selected by the player.
             * @param name - The name of the custom value.
             * @returns The index of the custom value that selected by the player.
             * @NOTE -
             * - If the custom value is a keyboard key, returns the index of the key in the {@link KeyboardKeyEnum | `KeyboardKey` enum}.
             */
            (name: string): int
        }

        const getConfigInputKey: {
            /**
             * Gets the custom keyboard key that selected by the player.
             * @param key - The name of the key.
             * @returns The custom keyboard key that selected by the player.
             * @NOTE -
             * - If the key is not set or valid, or the custom value is not a keyboard key, returns `"None"`.
             */
            (key: string): KeyboardKey
        }
    }
}
