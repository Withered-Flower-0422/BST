declare module "editor:type:collection" {
    export type CollectionData = {
        CollectionName: string
        RotationVelocity: Float3
        SFX: string
    }

    export type CollectionMethod = {
        [key: string | symbol]: never
    }
}
