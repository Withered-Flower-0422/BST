declare module "game:type" {
    global {
        type Player = {
            ballType: BallType
            /**
             * `readonly`
             */
            readonly guid: string
            position: Float3
            rotation: Float3
            rotationQuaternion: Quaternion
            /**
             * `readonly`
             */
            readonly physicsObject: Component<"PhysicsObject">
            /**
             * @range `0 ~ 100`
             */
            durability: float
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
            recoverAll: () => void
            transfer: (targetPosition: Float3) => void
            setRendererMesh: (path: string) => void
            setRendererMaterials: (paths: string[]) => void
        }
    }
}
