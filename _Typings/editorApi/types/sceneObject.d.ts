// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "editor:type" {
    import { Float3 } from "basicData"

    type Item = {
        /**
         * `Folder` deprecated
         * @readonly
         */
        readonly type: "Item"

        /**
         * Gets a component of the item.
         * @param componentType - The type of the component to get.
         * @returns The component of the specified type, or `null` if the item does not have a component of that type.
         */
        readonly getComponent: <U extends keyof ItemComponentTypeMap>(
            componentType: U
        ) => U extends "Settings" ? ItemComponent<"Settings"> : ItemComponent<U> | null

        /**
         * Adds a component to the item. `Settings` component cannot be added.
         * @param componentType - The type of the component to add.
         * @returns The added component of the specified type.
         */
        readonly addComponent: <U extends Exclude<keyof ItemComponentTypeMap, "Settings">>(
            componentType: U
        ) => ItemComponent<U>

        /**
         * Removes a component from the item. `Settings` component cannot be removed.
         * @param componentType - The type of the component to remove.
         * @returns
         */
        readonly removeComponent: <U extends Exclude<keyof ItemComponentTypeMap, "Settings">>(componentType: U) => void
    }

    type Settings = {
        /**
         * `Folder` deprecated
         * @readonly
         */
        readonly type: "Settings"

        /**
         * Gets a component of the `Scene Settings`.
         * @param componentType - The type of the component to get.
         * @returns The component of the specified type.
         */
        readonly getComponent: <U extends keyof SettingsComponentTypeMap>(componentType: U) => SettingsComponent<U>
    }

    type Folder = {
        /**
         * `Folder` deprecated
         * @readonly
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
         * @readonly
         */
        readonly guid: string

        /**
         * The name of the object, which is displayed in the `Hierarchy` panel.
         */
        name: string

        /**
         * Generates a new guid for the object.
         * @returns The new guid of the object.
         */
        readonly getNewGuid: () => string

        /**
         * Sets a specified local transform to the object.
         * @param position - The local position to set.
         * @param rotation - The local rotation to set.
         * @param scale - The local scale to set.
         * @returns
         */
        readonly setTransform: (position: Float3, rotation: Float3, scale: Float3) => void

        /**
         * Sets a specified local position to the object without changing the rotation or scale.
         * @param position - The local position to set.
         * @returns
         */
        readonly setPosition: (position: Float3) => void

        /**
         * Sets a specified local rotation to the object without changing the position or scale.
         * @param rotation - The local rotation to set.
         * @returns
         */
        readonly setRotation: (rotation: Float3) => void

        /**
         * Sets a specified local scale to the object without changing the position or rotation.
         * @param scale - The local scale to set.
         * @returns
         */
        readonly setScale: (scale: Float3) => void

        /**
         * Gets the local transform of the object.
         * @returns The local transform of the object.
         */
        readonly getTransform: () => [Float3, Float3, Float3]

        /**
         * Gets the global position of the object.
         * @returns The global position of the object.
         */
        readonly getGlobalPosition: () => Float3

        /**
         * Gets the global rotation of the object.
         * @returns The global rotation of the object.
         */
        readonly getGlobalRotation: () => Float3

        /**
         * Gets the global scale of the object.
         * @returns The global scale of the object.
         */
        readonly getGlobalScale: () => Float3

        /**
         * Gets the parent of the object. If the object has no parent, returns `null`.
         * @returns The parent of the object, or `null` if the object has no parent.
         */
        readonly getParent: () => SceneObject<SceneObjectType> | null

        /**
         * Sets the parent of the object. If `null` is passed, the object will be removed from its parent.
         * @param parent - The parent to set. If `null`, the object will be removed from its parent.
         * @returns
         */
        readonly setParent: (parent: SceneObject<SceneObjectType> | null) => void

        /**
         * Gets the children of the object.
         * @returns The children of the object.
         */
        readonly getChildren: () => SceneObject<SceneObjectType>[]
    } & SceneObjectTypeMap[T]
}
