declare module "editor:type" {
    type CollectionData = {
        CollectionName: string
        RotationVelocity: Float3
        SFX: string
    }

    type CollectionMethod = {
        [key: string | symbol]: never
    }
}
