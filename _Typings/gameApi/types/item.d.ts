// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:type" {
    import { AssertNonNegInt } from "utils"
    import { Float3, Quaternion, Trans } from "basicData"

    type Item = {
        /** @readonly */
        readonly guid: guid
        name: string

        readonly setTransform: {
            /**
             * Sets a specified transform for the item.
             * @param position - The position to set.
             * @param rotation - The rotation to set.
             * @param scale - The scale to set.
             * @returns
             */
            (position: Float3, rotation: Float3, scale: Float3): void
        }

        readonly setPosition: {
            /**
             * Sets a specified position for the item without changing the rotation or scale.
             * @param position - The position to set.
             * @returns
             */
            (position: Float3): void
        }

        readonly setRotation: {
            /**
             * Sets a specified euler angle format rotation for the item without changing the position or scale.
             * @param rotation - The rotation to set, in euler angle format.
             * @returns
             */
            (rotation: Float3): void
        }

        readonly setRotationQuaternion: {
            /**
             * Sets a specified quaternion format rotation for the item without changing the position or scale.
             * @param rotation - The rotation to set, in quaternion format.
             * @returns
             */
            (rotation: Quaternion): void
        }

        readonly setScale: {
            /**
             * Sets a specified scale for the item without changing the position or rotation.
             * @param scale - The scale to set.
             * @returns
             */
            (scale: Float3): void
        }

        readonly getTransform: {
            /**
             * Gets the transform of the item, in the form of `[position, rotation, scale]`.
             * @returns The transform of the item, in the form of `[position, rotation, scale]`.
             */
            (): [pos: Float3, rot: Float3, scl: Float3]
        }

        readonly getRotationQuaternion: {
            /**
             * Gets the quaternion format rotation of the item.
             * @returns The position of the item, in quaternion format.
             */
            (): Quaternion
        }

        readonly getComponent: {
            /**
             * Gets the specified component of the item. If the item doesn't have the component, returns `null`.
             * @param componentType - The type of the component to get.
             * @returns The specified component of the item, or `null` if the item doesn't have the specified component.
             */
            <T extends keyof ComponentTypeMap>(
                componentType: T,
            ): T extends "Settings" ? Component<"Settings"> : Component<T> | null
        }

        readonly moveTo: {
            /**
             * Moves the item to a specified transform.
             * @param targetTransform - The target transform to move to.
             * @param easeType - The ease type to use for the movement.
             * @param duration - The duration of the movement in frames.
             * @returns
             */
            <T extends int>(targetTransform: Trans, easeType: EaseType, duration: AssertNonNegInt<T>): void
        }

        readonly stopMove: {
            /**
             * Stops the movement of the item cased by `item.moveTo()`
             * @returns
             * @NOTE -
             * - Only to interrupt `item.moveTo()`, no effect for physical objects.
             */
            (): void
        }
    }
}
