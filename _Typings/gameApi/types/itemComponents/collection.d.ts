declare module "game:type" {
    type CollectionData = {
        readonly CollectionName: string
        RotationVelocity: Float3
        SFX: string
    }

    type CollectionMethod = {
        resetCollection: () => void
    }
}
