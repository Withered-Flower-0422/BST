// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:type" {
    type Item = {
        /**
         * `readonly`
         */
        readonly guid: string
        name: string
        setTransform: (position: Float3, rotation: Float3, scale: Float3) => void
        setPosition: (position: Float3) => void
        setRotation: (rotation: Float3) => void
        setRotationQuaternion: (rotation: Quaternion) => void
        setScale: (scale: Float3) => void
        getTransform: () => [Float3, Float3, Float3]
        getRotationQuaternion: () => Quaternion
        getComponent: <T extends keyof ComponentTypeMap>(componentType: T) => Component<T> | null
        moveTo: (targetTransform: Trans, easeType: EaseType, duration: int) => void
        /**
         * @description only to interrupt `item.moveTo()`, no effect for physical objects
         */
        stopMove: () => void
    }
}
