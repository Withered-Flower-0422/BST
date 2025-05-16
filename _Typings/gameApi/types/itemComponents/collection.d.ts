declare module "game:type:collection" {
    export type CollectionData = {
        "CollectionName": string
        "RotationVelocity": Float3
        "SFX": string
    }

    export type CollectionMethod = {
        resetCollection: () => void
    }
}
