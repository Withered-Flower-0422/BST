// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "editor:type" {
    import { Path } from "path"

    type AssetReference = {
        /**
         * BME paths to `Meshes`.
         */
        Meshes: Path<"Meshes">[]
        /**
         * BME paths to `Textures`.
         */
        Textures: Path<"Textures">[]
        /**
         * BME paths to `Materials`.
         */
        Materials: Path<"Materials">[]
        /**
         * BME paths to `Audios`.
         */
        Audios: Path<"Audios">[]
    }
}
