// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:type" {
    import { Path } from "path"

    type AssetReference = {
        /**
         * BME paths to `Meshes`.
         */
        readonly Meshes: Path<"Meshes">[]
        /**
         * BME paths to `Textures`.
         */
        readonly Textures: Path<"Textures">[]
        /**
         * BME paths to `Materials`.
         */
        readonly Materials: Path<"Materials">[]
        /**
         * BME paths to `Audios`.
         */
        readonly Audios: Path<"Audios">[]
    }
}
