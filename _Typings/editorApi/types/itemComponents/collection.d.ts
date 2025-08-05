// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "editor:type" {
    type CollectionData = {
        CollectionName: string
        RotationVelocity: Float3
        SFX: string
    }

    type CollectionMethod = {
        [key: PropertyKey]: never
    }
}
