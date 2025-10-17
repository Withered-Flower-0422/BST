// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:type" {
    import { Path } from "path"
    import { Float3 } from "basicData"

    type CollectionData = {
        readonly CollectionName: string
        RotationVelocity: Float3
        SFX: Path<"Audios">
    }

    type CollectionMethod = {
        /**
         * Resets the collection.
         * @returns
         */
        resetCollection: () => void
    }
}
