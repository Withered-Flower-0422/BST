// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:type" {
    import { AssertNonNegInt } from "utils"

    type Item = {
        /**
         * @readonly
         */
        readonly guid: string
        name: string

        /**
         * Sets a specified transform for the item.
         * @param position - The position to set.
         * @param rotation - The rotation to set.
         * @param scale - The scale to set.
         * @returns
         */
        setTransform: (position: Float3, rotation: Float3, scale: Float3) => void

        /**
         * Sets a specified position for the item without changing the rotation or scale.
         * @param position - The position to set.
         * @returns
         */
        setPosition: (position: Float3) => void

        /**
         * Sets a specified euler angle format rotation for the item without changing the position or scale.
         * @param rotation - The rotation to set, in euler angle format.
         * @returns
         */
        setRotation: (rotation: Float3) => void

        /**
         * Sets a specified quaternion format rotation for the item without changing the position or scale.
         * @param rotation - The rotation to set, in quaternion format.
         * @returns
         */
        setRotationQuaternion: (rotation: Quaternion) => void

        /**
         * Sets a specified scale for the item without changing the position or rotation.
         * @param scale - The scale to set.
         * @returns
         */
        setScale: (scale: Float3) => void

        /**
         * Gets the transform of the item, in the form of `[position, rotation, scale]`.
         * @returns The transform of the item, in the form of `[position, rotation, scale]`.
         */
        getTransform: () => [Float3, Float3, Float3]

        /**
         * Gets the quaternion format rotation of the item.
         * @returns The position of the item, in quaternion format.
         */
        getRotationQuaternion: () => Quaternion

        /**
         * Gets the specified component of the item. If the item doesn't have the component, returns `null`.
         * @param componentType - The type of the component to get.
         * @returns The specified component of the item, or `null` if the item doesn't have the specified component.
         */
        getComponent: <T extends keyof ComponentTypeMap>(componentType: T) => Component<T> | null

        /**
         * Moves the item to a specified transform.
         * @param targetTransform - The target transform to move to.
         * @param easeType - The ease type to use for the movement.
         * @param duration - The duration of the movement in frames.
         * @returns
         */
        moveTo: <T extends int>(targetTransform: Trans, easeType: EaseType, duration: AssertNonNegInt<T>) => void

        /**
         * Stops the movement of the item cased by `item.moveTo()`
         * @returns
         * @NOTE -
         * - Only to interrupt `item.moveTo()`, no effect for physical objects.
         */
        stopMove: () => void
    }
}
