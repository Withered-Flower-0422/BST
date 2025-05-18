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
        getTransform: () => Float3[]
        getRotationQuaternion: () => Quaternion
        getComponent: <T extends keyof ComponentTypeMap>(componentType: T) => Component<T> | null
        addComponent: <T extends keyof ComponentTypeMap>(componentType: T) => Component<T>
        removeComponent: (componentType: keyof ComponentTypeMap) => void
        moveTo: (
            targetTransform: Trans,
            easeType: EaseType,
            duration: int,
        ) => void
        /**
         * @description only to interupt `item.moveTo()`, no effect for physical objects
         */
        stopMove: () => void
    }
}
