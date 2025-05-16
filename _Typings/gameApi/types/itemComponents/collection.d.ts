declare module "game:type" {
    type CollectionData = {
        "CollectionName": string
        "RotationVelocity": Float3
        "SFX": string
    }

    type CollectionMethod = {
        resetCollection: () => void
    }
}
