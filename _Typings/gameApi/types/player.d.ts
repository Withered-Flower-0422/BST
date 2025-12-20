// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:type" {
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
    type Player<Scene extends bool = false> = (Scene extends false
        ? {
              /**
               * - If the player ball is never created, the `ballType` will be `null`.
               */
              get ballType(): BallType | null

              /**
               * - Only {@link BuiltinBallType | builtin ball types} can be set for now.
               */
              set ballType(ballType: BuiltinBallType)
          }
        : {
              get ballType(): BallType
              /**
               * - Only {@link BuiltinBallType | builtin ball types} can be set for now.
               */
              set ballType(ballType: BuiltinBallType)
          }) & {
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

        /**
         * Recovers all properties of the player.
         * @returns
         */
        readonly recoverAll: () => void

        /**
         * Transfers the player to a new position. The camera will jump to the new position directly.
         * @param targetPosition - The position to transfer the player to.
         * @returns
         */
        readonly transfer: (targetPosition: Float3) => void

        /**
         * Sets the player's renderer mesh.
         * @param path - The path of the mesh to set as the player's renderer mesh.
         * @returns
         */
        readonly setRendererMesh: <T extends string>(path: AssertPath<T, "Meshes">) => void

        /**
         * Sets the player's renderer materials.
         * @param paths - The paths of the materials to set as the player's renderer materials.
         * @returns
         */
        readonly setRendererMaterials: <const T extends readonly string[]>(
            paths: T & AssertPaths<T, "Materials">
        ) => void
    }
}

declare module "__future__" {
    import { AssertPath, AssertPaths } from "path"
    import { Float3, Quaternion } from "basicData"
    import { BallType, Component } from "game:type"

    type Player<Scene extends bool = false> = (Scene extends false
        ? {
              /**
               * If the player ball is never created, the `ballType` will be `null`.
               */
              get ballType(): BallType | null
              set ballType(ballType: BallType)
          }
        : {
              ballType: BallType
          }) & {
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

        /**
         * Recovers all properties of the player.
         * @returns
         */
        readonly recoverAll: () => void

        /**
         * Transfers the player to a new position. The camera will jump to the new position directly.
         * @param targetPosition - The position to transfer the player to.
         * @returns
         */
        readonly transfer: (targetPosition: Float3) => void

        /**
         * Sets the player's renderer mesh.
         * @param path - The path of the mesh to set as the player's renderer mesh.
         * @returns
         */
        readonly setRendererMesh: <T extends string>(path: AssertPath<T, "Meshes">) => void

        /**
         * Sets the player's renderer materials.
         * @param paths - The paths of the materials to set as the player's renderer materials.
         * @returns
         */
        readonly setRendererMaterials: <const T extends readonly string[]>(
            paths: T & AssertPaths<T, "Materials">
        ) => void
    }
}
