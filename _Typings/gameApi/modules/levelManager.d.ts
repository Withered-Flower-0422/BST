// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:module" {
    import { Component } from "game:type"
    import { AssertGuid } from "guid"

    const enum Skin {
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
         * - `0`: Four Direction View
         * - `1`: Free View
         * - `2`: First Person View
         */
        let cameraMode: 0 | 1 | 2
        /**
         * - `0`: face to z+
         * - `1`: face to x+
         * - `2`: face to z-
         * - `3`: face to x-
         */
        let cameraDirection: 0 | 1 | 2 | 3
        let cameraAngle: float
        let cameraPitch: float
        let cameraZoom: float
        /**
         * `readonly`
         */
        const mapTesting: bool
        /**
         * `readonly`
         */
        const time: int
        /**
         * `readonly`
         *
         * click to see {@link Skin | all skins}
         */
        const skin: Skin
        /**
         * `readonly`
         */
        const timerEnabled: bool
        const callLevelComplete: () => void
        const callLevelCompleteWithAnimation: (position: Float3) => void
        const callSuicide: () => void
        const callRestart: () => void
        const transferPlayer: (targetPosition: Float3) => void
        /**
         * @param guid `string`: the guid string of the item to be followed by the camera; if `null` is passed, the camera will follow the player ball's view
         * @param displayName the name shown on the ui
         */
        const setCameraTarget: <S extends string>(guid: AssertGuid<S> | null, displayName: string) => void
        /**
         * @returns the shown tip's guid
         */
        const showTip: (content: string) => string
        const hideTip: (guid: string) => void
        const hideAllTips: () => void
        const hideTipDelay: (guid: string, frame: int) => void
        const hideAllTipsDelay: (frame: int) => void
        /**
         * @param data `json` string to save
         * @NOTE not a JSON object, needs to be stringified first
         */
        const save: (data: json) => bool
        /**
         * @returns `json` string of the saved data
         * @NOTE not a JSON object, needs to be parsed before use
         */
        const load: () => json
        const cancelEvent: (eventName: CancelableEvent) => void
        const sendCustomEvent: (message: any) => void
        const spawnVfx: (type: VfxType, position: Float3) => void
        const spawnVfxPRS: (type: VfxType, position: Float3, rotation: Float3, scale: Float3) => void
        /**
         * @param camera the camera component to be used as custom camera; if `null` is passed, default camera will be used
         */
        const setCustomCamera: (camera: Component<"Camera"> | null) => void
        const invoke: (func: () => void, delayFrame: int) => void
        const startTimer: () => void
        const stopTimer: () => float
        const getDefaultCameraPosition: () => Float3
        const getDefaultCameraRotation: () => float
        const getDefaultCameraFov: () => float
        const getCameraOffsetSmooth: () => float
        const setCameraOffsetSmooth: (value: float) => void
        /**
         * @param statusBarName the unique name of the status bar to be created
         * @param iconPath the path of the icon to be shown on the left side of the status bar
         * @param marks the marks to be shown on the status bar, range from 0 to 1
         * @param value the value of the status bar to be shown, range from 0 to 1
         * @param valueString the string to be shown on the right side of the status bar, no related logic with the value, can be any text
         * @param color the color of the status bar
         */
        const createCustomStatusBar: (
            statusBarName: string,
            iconPath: string,
            marks: float[],
            value: float,
            valueString: string,
            color: ColorRGBA
        ) => void
        /**
         * @param statusBarName the unique name of the status bar to be set
         * @param value the value of the status bar to be shown, range from 0 to 1
         * @param valueString the string to be shown on the right side of the status bar, no related logic with the value, can be any text
         * @param color the color of the status bar
         */
        const setCustomStatusBarValue: (
            statusBarName: string,
            value: float,
            valueString: string,
            color: ColorRGBA
        ) => void
        /**
         * @param statusBarName the unique name of the status bar to be destroyed
         */
        const destroyCustomStatusBar: (statusBarName: string) => void
    }
}
