declare module "editor:type" {
    type Item = {
        /**
         * - `Folder` deprecated
         * - `readonly`
         */
        readonly type: "Item"
        getComponent: <U extends keyof ItemComponentTypeMap>(componentType: U) => ItemComponent<U> | null
        addComponent: <U extends Exclude<keyof ItemComponentTypeMap, "Settings">>(componentType: U) => ItemComponent<U>
        removeComponent: <U extends Exclude<keyof ItemComponentTypeMap, "Settings">>(componentType: U) => void
    }

    type Settings = {
        /**
         * - `Folder` deprecated
         * - `readonly`
         */
        readonly type: "Settings"
        getComponent: <U extends keyof SettingsComponentTypeMap>(componentType: U) => SettingsComponent<U>
    }

    type Folder = {
        /**
         * - `Folder` deprecated
         * - `readonly`
         */
        readonly type: "Folder"
    }

    type SceneObjectTypeMap = {
        Item: Item
        Settings: Settings
        Folder: Folder
    }

    type SceneObjectType = keyof SceneObjectTypeMap

    type SceneObject<T extends SceneObjectType> = {
        /**
         * `readonly`
         */
        readonly guid: string
        name: string
        getNewGuid: () => string
        setTransform: (position: Float3, rotation: Float3, scale: Float3) => void
        setPosition: (position: Float3) => void
        setRotation: (rotation: Float3) => void
        setScale: (scale: Float3) => void
        getTransform: () => [Float3, Float3, Float3]
        getGlobalPosition: () => Float3
        getGlobalRotation: () => Float3
        getGlobalScale: () => Float3
        getParent: () => SceneObject<SceneObjectType> | null
        setParent: (parent: SceneObject<SceneObjectType> | null) => void
        getChildren: () => SceneObject<SceneObjectType>[]
    } & SceneObjectTypeMap[T]
}
