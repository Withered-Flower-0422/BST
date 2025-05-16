declare module "game:module:levelManager" {
    import { Component } from "game:type:component"

    type CancelableEvent = (
        "OnPreRestartLevel" |
        "OnPrePlayerDeadStart" |
        "OnPreCheckpointReached" |
        "OnPreDestinationReached" |
        "OnPreGetCollection" |
        "OnPreSwitchBallStart" |
        "OnPreSwitchBallEnd" |
        "OnPreTransferBallStart" |
        "OnPreTransferBallEnd"
    )

    type VfxType = (
        "SpawnPlayer" |
        "SwitchBall" |
        "DestroyObject" |
        "WaterRipple" |
        "CollectScore" |
        "CollectRecover" |
        "CollectCure" |
        "CollectFroze" |
        "CollectElectric" |
        "CollectCollection" |
        "TransportStart" |
        "TransportEnd" |
        "Explosion"
    )

    export namespace levelManager {
        let timeScale: float
        let score: float
        let spawnPointPosition: Float3
        let spawnPointRotation: float
        let cameraMode: int
        let cameraDirection: int
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
         */
        const timerEnabled: bool
        const callLevelComplete: () => void
        const callLevelCompleteWithAnimation: (position: Float3) => void
        const callSuicide: () => void
        const callRestart: () => void
        const transferPlayer: (targetPosition: Float3) => void
        /**
         * @description if `null` is passed, the camera will return to the player ball"s view.
         */
        const setCameraTarget: (guid: string | null, displayName: string) => void
        /**
         * @returns returns the shown tip's guid
         */
        const showTip: (content: string) => string
        const hideTip: (guid: string) => void
        const hideAllTips: () => void
        /**
         * @param data `json` string to save.
         * @NOTE not a JSON object, needs to be stringified first.
         */
        const save: (data: json) => bool
        /**
         * @returns `json` string of the saved data.
         * @NOTE not a JSON object, needs to be parsed before use.
         */
        const load: () => json
        const cancelEvent: (eventName: CancelableEvent) => void
        const sendCustomEvent: (message: any) => void
        const spawnVfx: (type: VfxType, position: Float3) => void
        /**
         * @description if `null` is passed, default camera will be used.
         */
        const setCustomCamera: (camera: Component<"Camera"> | null) => void
        const invoke: (func: (...args: any[]) => any, delayFrame: int) => void
        const startTimer: () => void
        const stopTimer: () => float
        const getDefaultCameraPosition: () => Float3
        const getDefaultCameraRotation: () => float
        const getDefaultCameraFov: () => float
        const getCameraOffsetSmooth: () => float
        const setCameraOffsetSmooth: (value: float) => void
    }
}
