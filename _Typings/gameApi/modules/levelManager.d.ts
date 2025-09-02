// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:module" {
    import { Component } from "game:type"
    import { AssertGuid } from "guid"
    import { Assert0To1, Assert0To1s, AssertNonNeg, AssertNonNegInt } from "utils"
    import { KeyboardKey, KeyboardKeyEnum } from "keys"
    import { AssertPath } from "path"

    enum Skin {
        Default = 0,
        Mush = 1,
    }

    type CancelableEvent =
        | "OnPreRestartLevel"
        | "OnPrePlayerDeadStart"
        | "OnPreCheckpointReached"
        | "OnPreDestinationReached"
        | "OnPreGetCollection"
        | "OnPreSwitchBallStart"
        | "OnPreSwitchBallEnd"
        | "OnPreTransferBallStart"
        | "OnPreTransferBallEnd"

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
        let timeScale: float
        let score: float
        let spawnPointPosition: Float3
        let spawnPointRotation: float
        /**
         * - `0`: Four Direction View.
         * - `1`: Free View.
         * - `2`: First Person View.
         */
        let cameraMode: 0 | 1 | 2
        /**
         * - `0`: Face to `z+`.
         * - `1`: Face to `x+`.
         * - `2`: Face to `z-`.
         * - `3`: Face to `x-`.
         */
        let cameraDirection: 0 | 1 | 2 | 3
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

        /**
         * Completes the level without the completion animation.
         * @returns
         */
        const callLevelComplete: () => void

        /**
         * Completes the level with the completion animation.
         * @param position - The position of the completion animation.
         * @returns
         */
        const callLevelCompleteWithAnimation: (position: Float3) => void

        /**
         * Suicides the player ball.
         * @returns
         */
        const callSuicide: () => void

        /**
         * Restarts the level.
         * @returns
         */
        const callRestart: () => void

        /**
         * Transfers the player ball to the specified position.
         * @param targetPosition - The position to transfer the player ball to.
         * @returns
         */
        const transferPlayer: (targetPosition: Float3) => void

        /**
         * Sets the camera to follow the specified item.
         * @param guid - The guid string of the item to be followed by the camera. If `null` is passed, the camera will follow back to the player ball.
         * @param displayName - The name shown on the ui. If `null` is passed, the name will be the player ball's name.
         * @returns
         */
        const setCameraTarget: <S extends string>(guid: AssertGuid<S> | null, displayName: string | null) => void

        /**
         * Shows a tip with the specified content.
         * @param content - The content of the tip to be shown.
         * @returns The shown tip's guid.
         */
        const showTip: (content: string) => string

        /**
         * Hides the tip with the specified guid.
         * @param guid - The guid of the tip to be hidden.
         * @returns
         */
        const hideTip: (guid: string) => void

        /**
         * Hides all tips.
         * @returns
         */
        const hideAllTips: () => void

        /**
         * Hides the tip with the specified guid after a specified number of frames.
         * @param guid - The guid of the tip to be hidden.
         * @param frame - The number of frames to wait before hiding the tip.
         * @returns
         */
        const hideTipDelay: <T extends int>(guid: string, frame: AssertNonNegInt<T>) => void

        /**
         * Hides all tips after a specified number of frames.
         * @param frame - The number of frames to wait before hiding all tips.
         * @returns
         */
        const hideAllTipsDelay: <T extends int>(frame: AssertNonNegInt<T>) => void

        /**
         * Saves data to the local storage.
         * @param data - A `json` string to save.
         * @returns Whether the data is saved successfully.
         * @NOTE -
         * - **NOT** a JSON object, needs to be stringified first.
         */
        const save: (data: json) => bool

        /**
         * Loads data from the local storage.
         * @returns A `json` string of the saved data.
         * @NOTE -
         * - **NOT** a JSON object, needs to be parsed before use.
         */
        const load: () => json

        /**
         * Cancels the specified event. The event must be cancelable.
         * @param eventName - The name of the event to be canceled.
         * @returns
         * @CancelableEvent Click to see {@link CancelableEvent | all cancelable events}.
         */
        const cancelEvent: (eventName: CancelableEvent) => void

        /**
         * Sends a custom event with the specified message. Other scripts can listen to this event by registering `OnReceiveCustomEvent`.
         * @param message - The message to be sent.
         * @returns
         */
        const sendCustomEvent: (message: any) => void

        /**
         * Spawns a visual effect with the specified type at the specified position.
         * @param type - The type of the visual effect to be spawned.
         * @param position - The position to spawn the visual effect at.
         * @returns
         */
        const spawnVfx: (type: VfxType, position: Float3) => void

        /**
         * Spawns a visual effect with the specified type at the specified position, rotation, and scale.
         * @param type - The type of the visual effect to be spawned.
         * @param position - The position to spawn the visual effect at.
         * @param rotation - The rotation of the visual effect.
         * @param scale - The scale of the visual effect.
         * @returns
         */
        const spawnVfxPRS: (type: VfxType, position: Float3, rotation: Float3, scale: Float3) => void

        /**
         * Uses a custom camera. If `null` is passed, default camera will be used.
         * @param camera - The camera component to be used as custom camera. If `null` is passed, default camera will be used.
         * @returns
         */
        const setCustomCamera: (camera: Component<"Camera"> | null) => void

        /**
         * Invokes a function after a specified number of frames.
         * @param func - The function to be invoked.
         * @param delayFrame - The number of frames to wait before invoking the function.
         * @returns
         */
        const invoke: <T extends int>(func: () => void, delayFrame: AssertNonNegInt<T>) => void

        /**
         * Starts the game's internal timer.
         * @returns
         */
        const startTimer: () => void

        /**
         * Stops the game's internal timer and returns the time elapsed in seconds.
         * @returns The time elapsed in seconds.
         */
        const stopTimer: () => float

        /**
         * Gets the default camera position.
         * @returns The default camera position.
         */
        const getDefaultCameraPosition: () => Float3

        /**
         * Gets the default camera rotation.
         * @returns The default camera rotation.
         */
        const getDefaultCameraRotation: () => float

        /**
         * Gets the default camera fov.
         * @returns The default camera fov.
         */
        const getDefaultCameraFov: () => float

        /**
         * Gets the default camera's offset smoothness value.
         * @returns The default camera's offset smoothness value.
         */
        const getCameraOffsetSmooth: () => float

        /**
         * Sets a value to the default camera's offset smoothness.
         * @param value - The value to be set to the default camera's offset smoothness.
         * @returns
         */
        const setCameraOffsetSmooth: <T extends float>(value: AssertNonNeg<T>) => void

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
        const createCustomStatusBar: <const T extends float[], U extends float, V extends string>(
            statusBarName: string,
            iconPath: AssertPath<V, "Textures">,
            marks: Assert0To1s<T>,
            value: Assert0To1<U>,
            valueString: string,
            color: ColorRGBA
        ) => void

        /**
         * Sets the value of the custom status bar with the specified name.
         * @param statusBarName - The unique name of the status bar to be set.
         * @param value - The value of the status bar to be shown, range from `0` to `1`.
         * @param valueString - The string to be shown on the right side of the status bar, no related logic with the value, can be any text.
         * @param color - The color of the status bar.
         * @returns
         */
        const setCustomStatusBarValue: <T extends float>(
            statusBarName: string,
            value: Assert0To1<T>,
            valueString: string,
            color: ColorRGBA
        ) => void

        /**
         * Destroys the custom status bar with the specified name.
         * @param statusBarName - The unique name of the status bar to be destroyed.
         * @returns
         */
        const destroyCustomStatusBar: (statusBarName: string) => void

        /**
         * Gets the index of the custom value that selected by the player.
         * @param name - The name of the custom value.
         * @returns The index of the custom value that selected by the player.
         * @NOTE -
         * - If the custom value is a keyboard key, returns the index of the key in the {@link KeyboardKeyEnum | `KeyboardKey` enum}.
         */
        const getConfig: (name: string) => int

        /**
         * Gets the custom keyboard key that selected by the player.
         * @param key - The name of the key.
         * @returns The custom keyboard key that selected by the player.
         * @NOTE -
         * - If the key is not set or valid, or the custom value is not a keyboard key, returns `"None"`.
         */
        const getConfigInputKey: (key: string) => KeyboardKey
    }
}
