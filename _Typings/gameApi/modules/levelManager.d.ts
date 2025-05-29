declare module "game:module" {
    import { Component } from "game:type"
    import { AssertGuid } from "guid"

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

    namespace levelManager {
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
         * @param guid `string`: the guid string of the item to be followed by the camera; if `null` is passed, the camera will follow the player ball's view
         * @param displayName the name shown on the ui
         */
        const setCameraTarget: <S extends string>(guid: AssertGuid<S> | null, displayName: string) => void
        /**
         * @returns returns the shown tip's guid
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
        /**
         * @param camera the camera component to be used as custom camera; if `null` is passed, default camera will be used
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
