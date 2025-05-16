declare module "game:type" {
    global {
        type Player = {
            ballType: string
            /**
             * `readonly`
             */
            get guid(): string
            position: Float3
            rotation: Float3
            rotationQuaternion: Quaternion
            /**
             * `readonly`
             */
            get physicsObject(): Component<"PhysicsObject">
            durability: float
            temperature: float
            wetness: float
            power: float
            scale: float
            recoverAll: () => void
            transfer: (targetPosition: Float3) => void
            setRendererMesh: (path: string) => void
            setRendererMaterials: (paths: string[]) => void
        }
    }
}