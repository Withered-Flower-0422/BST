declare module "editor:type" {
    type SceneObjectType = "Item" | "Settings" | "Folder"

    type SceneObject<T extends SceneObjectType> = {
        /**
         * `readonly`
         */
        readonly guid: string
        /**
         * - `Floder` deprecated
         * - `readonly`
         */
        readonly type: T
        name: string
        getNewGuid: () => string
        setTransform: (position: Float3, rotation: Float3, scale: Float3) => void
        setPosition: (position: Float3) => void
        setRotation: (rotation: Float3) => void
        setScale: (scale: Float3) => void
        getTransform: () => Float3[]
        getGlobalPosition: () => Float3
        getGlobalRotation: () => Float3
        getGlobalScale: () => Float3
        getParent: () => SceneObject<SceneObjectType> | null

        getComponent: (
            T extends "Item" ?
            <U extends keyof ItemComponentTypeMap>(componentType: U) => ItemComponent<U> | null :
            T extends "Settings" ?
            <U extends keyof SettingsComponentTypeMap>(componentType: U) => SettingsComponent<U> :
            never
        )

        addComponent: (
            T extends "Item" ?
            <U extends Exclude<keyof ItemComponentTypeMap, "Settings">>(componentType: U) => ItemComponent<U> :
            never
        )

        removeComponent: (
            T extends "Item" ?
            <U extends Exclude<keyof ItemComponentTypeMap, "Settings">>(componentType: U) => void :
            never
        )

        setParent: (parent: SceneObject<SceneObjectType> | null) => void
        getChildren: () => SceneObject<SceneObjectType>[]
    }
}
