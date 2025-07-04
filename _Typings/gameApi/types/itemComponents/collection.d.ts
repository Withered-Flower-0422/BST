// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

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
