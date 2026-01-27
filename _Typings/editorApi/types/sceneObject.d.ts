// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "editor:type" {
    import { Float3 } from "basicData"

    type Item = {
        /** @readonly */
        readonly type: "Item"

        readonly getComponent: {
            /**
             * Gets a component of the item.
             * @param componentType - The type of the component to get.
             * @returns The component of the specified type, or `null` if the item does not have a component of that type.
             */
            <U extends keyof ItemComponentTypeMap>(
                componentType: U,
            ): U extends "Settings" ? ItemComponent<"Settings"> : ItemComponent<U> | null
        }

        readonly addComponent: {
            /**
             * Adds a component to the item. `Settings` component cannot be added.
             * @param componentType - The type of the component to add.
             * @returns The added component of the specified type.
             */
            <U extends Exclude<keyof ItemComponentTypeMap, "Settings">>(componentType: U): ItemComponent<U>
        }

        readonly removeComponent: {
            /**
             * Removes a component from the item. `Settings` component cannot be removed.
             * @param componentType - The type of the component to remove.
             * @returns
             */
            <U extends Exclude<keyof ItemComponentTypeMap, "Settings">>(componentType: U): void
        }
    }

    type Settings = {
        /** @readonly */
        readonly type: "Settings"

        readonly getComponent: {
            /**
             * Gets a component of the `Scene Settings`.
             * @param componentType - The type of the component to get.
             * @returns The component of the specified type.
             */
            <U extends keyof SettingsComponentTypeMap>(componentType: U): SettingsComponent<U>
        }
    }

    /** @deprecated */
    type Folder = {
        /** @readonly */
        readonly type: "Folder"
    }

    type SceneObjectTypeMap = {
        Item: Item
        Settings: Settings
        Folder: Folder
    }

    type SceneObjectType = keyof SceneObjectTypeMap

    type SceneObject<T extends SceneObjectType = SceneObjectType> = {
        /** @readonly */
        readonly guid: guid

        /** The name of the object, which is displayed in the `Hierarchy` panel. */
        name: string

        readonly getNewGuid: {
            /**
             * Generates a new guid for the object.
             * @returns The new guid of the object.
             */
            (): guid
        }

        readonly setTransform: {
            /**
             * Sets a specified local transform to the object.
             * @param position - The local position to set.
             * @param rotation - The local rotation to set.
             * @param scale - The local scale to set.
             * @returns
             */
            (position: Float3, rotation: Float3, scale: Float3): void
        }

        readonly setPosition: {
            /**
             * Sets a specified local position to the object without changing the rotation or scale.
             * @param position - The local position to set.
             * @returns
             */
            (position: Float3): void
        }

        readonly setRotation: {
            /**
             * Sets a specified local rotation to the object without changing the position or scale.
             * @param rotation - The local rotation to set.
             * @returns
             */
            (rotation: Float3): void
        }

        readonly setScale: {
            /**
             * Sets a specified local scale to the object without changing the position or rotation.
             * @param scale - The local scale to set.
             * @returns
             */
            (scale: Float3): void
        }

        readonly getTransform: {
            /**
             * Gets the local transform of the object, in the form of `[position, rotation, scale]`.
             * @returns The local transform of the object, in the form of `[position, rotation, scale]`.
             */
            (): [pos: Float3, rot: Float3, scl: Float3]
        }

        readonly getGlobalPosition: {
            /**
             * Gets the global position of the object.
             * @returns The global position of the object.
             */
            (): Float3
        }

        readonly getGlobalRotation: {
            /**
             * Gets the global rotation of the object.
             * @returns The global rotation of the object.
             */
            (): Float3
        }

        readonly getGlobalScale: {
            /**
             * Gets the global scale of the object.
             * @returns The global scale of the object.
             */
            (): Float3
        }

        readonly getParent: {
            /**
             * Gets the parent of the object. If the object has no parent, returns `null`.
             * @returns The parent of the object, or `null` if the object has no parent.
             */
            (): SceneObject | null
        }

        readonly setParent: {
            /**
             * Sets the parent of the object. If `null` is passed, the object will be removed from its parent.
             * @param parent - The parent to set. If `null`, the object will be removed from its parent.
             * @returns
             */
            (parent: SceneObject | null): void
        }

        readonly getChildren: {
            /**
             * Gets the children of the object.
             * @returns The children of the object.
             */
            (): SceneObject[]
        }
    } & SceneObjectTypeMap[T]
}
