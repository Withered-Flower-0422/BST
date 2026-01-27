// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:type" {
    import { Assert0To1 } from "utils"
    import { AssertPath, AssertPaths } from "path"
    import { Float3, Quaternion } from "basicData"

    type BuiltinBallType =
        | "WoodenBall"
        | "StoneBall"
        | "PaperBall"
        | "IceBall"
        | "SteelBall"
        | "RubberBall"
        | "BalloonBall"
        | "StickyBall"
        | "SpongeBall"

    type BallType = BuiltinBallType | (string & {})

    /**
     * If the player ball is never created, errors will occur when trying to access it's properties other than `ballType` and `guid`.
     */
    type Player<Scene extends bool = false> = {
        /**
         * - If the player ball is never created, the `ballType` will be `null`.
         * - Only {@link BuiltinBallType | builtin ball types} can be set for now.
         */
        get ballType(): BallType | (Scene extends false ? null : never)
        set ballType(ballType: BuiltinBallType)

        /**
         * @readonly
         */
        readonly guid: guid
        /**
         * - Assigning a value to this property will change the player's position with camera following smoothly.
         * - If you want the camera to jump to the player's position directly, use `player.transfer()` or `levelManager.transferPlayer()` instead.
         */
        position: Float3
        rotation: Float3
        rotationQuaternion: Quaternion
        /**
         * @readonly
         */
        readonly physicsObject: Component<"PhysicsObject">
        /**
         * @range `0 ~ 100`
         */
        durability: float
        /**
         * @range `-273.15 ~ 1000`
         */
        temperature: float
        /**
         * @range `0 ~ 100`
         */
        wetness: float
        /**
         * @range `0 ~ 100`
         */
        power: float
        /**
         * @range `0.2 ~ 2.5`
         */
        scale: float

        readonly recoverAll: {
            /**
             * Recovers all properties of the player.
             * @returns
             */
            (): void
        }

        readonly transfer: {
            /**
             * Transfers the player to a new position. The camera will jump to the new position directly.
             * @param targetPosition - The position to transfer the player to.
             * @returns
             */
            (targetPosition: Float3): void
        }

        readonly setRendererMesh: {
            /**
             * Sets the player's renderer mesh.
             * @param path - The path of the mesh to set as the player's renderer mesh.
             * @returns
             */
            <T extends string>(path: AssertPath<T, "Meshes">): void
        }

        readonly setRendererMaterials: {
            /**
             * Sets the player's renderer materials.
             * @param paths - The paths of the materials to set as the player's renderer materials.
             * @returns
             */
            <const T extends readonly string[]>(paths: T & AssertPaths<T, "Materials">): void
        }

        /** @deprecated Not implemented yet. */
        readonly setRendererOpacity: {
            /**
             * Sets the player's renderer opacity.
             * @param opacity - The opacity of the player's renderer.
             * @returns
             */
            <T extends float>(opacity: Assert0To1<T>): void
        }
    }
}

declare module "__future__" {
    import { Assert0To1 } from "utils"
    import { AssertPath, AssertPaths } from "path"
    import { Float3, Quaternion } from "basicData"
    import { BallType, Component } from "game:type"

    /**
     * If the player ball is never created, errors will occur when trying to access it's properties other than `ballType` and `guid`.
     */
    type Player<Scene extends bool = false> = {
        /**
         * - If the player ball is never created, the `ballType` will be `null`.
         */
        get ballType(): BallType | (Scene extends false ? null : never)
        set ballType(ballType: BallType)

        /**
         * @readonly
         */
        readonly guid: guid
        /**
         * - Assigning a value to this property will change the player's position with camera following smoothly.
         * - If you want the camera to jump to the player's position directly, use `player.transfer()` or `levelManager.transferPlayer()` instead.
         */
        position: Float3
        rotation: Float3
        rotationQuaternion: Quaternion
        /**
         * @readonly
         */
        readonly physicsObject: Component<"PhysicsObject">
        /**
         * @range `0 ~ 100`
         */
        durability: float
        /**
         * @range `-273.15 ~ 1000`
         */
        temperature: float
        /**
         * @range `0 ~ 100`
         */
        wetness: float
        /**
         * @range `0 ~ 100`
         */
        power: float
        /**
         * @range `0.2 ~ 2.5`
         */
        scale: float

        readonly recoverAll: {
            /**
             * Recovers all properties of the player.
             * @returns
             */
            (): void
        }

        readonly transfer: {
            /**
             * Transfers the player to a new position. The camera will jump to the new position directly.
             * @param targetPosition - The position to transfer the player to.
             * @returns
             */
            (targetPosition: Float3): void
        }

        readonly setRendererMesh: {
            /**
             * Sets the player's renderer mesh.
             * @param path - The path of the mesh to set as the player's renderer mesh.
             * @returns
             */
            <T extends string>(path: AssertPath<T, "Meshes">): void
        }

        readonly setRendererMaterials: {
            /**
             * Sets the player's renderer materials.
             * @param paths - The paths of the materials to set as the player's renderer materials.
             * @returns
             */
            <const T extends readonly string[]>(paths: T & AssertPaths<T, "Materials">): void
        }

        /** @deprecated Not implemented yet. */
        readonly setRendererOpacity: {
            /**
             * Sets the player's renderer opacity.
             * @param opacity - The opacity of the player's renderer.
             * @returns
             */
            <T extends float>(opacity: Assert0To1<T>): void
        }
    }
}
