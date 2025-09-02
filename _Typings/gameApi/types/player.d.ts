// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:type" {
    import { AssertPath, AssertPaths } from "path"

    type BallType =
        | "WoodenBall"
        | "StoneBall"
        | "PaperBall"
        | "IceBall"
        | "SteelBall"
        | "RubberBall"
        | "BalloonBall"
        | "StickyBall"
        | "SpongeBall"

    global {
        type Player = {
            ballType: BallType
            /**
             * @readonly
             */
            readonly guid: string
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
            recoverAll: () => void

            /**
             * Transfers the player to a new position.
             * @param targetPosition - The position to transfer the player to.
             * @returns
             */
            transfer: (targetPosition: Float3) => void

            /**
             * Sets the player's renderer mesh.
             * @param path - The path of the mesh to set as the player's renderer mesh.
             * @returns
             */
            setRendererMesh: <T extends string>(path: AssertPath<T, "Meshes">) => void

            /**
             * Sets the player's renderer materials.
             * @param paths - The paths of the materials to set as the player's renderer materials.
             * @returns
             */
            setRendererMaterials: <const T extends string[]>(paths: AssertPaths<T, "Materials">) => void
        }
    }
}
