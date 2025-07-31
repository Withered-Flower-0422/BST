// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:type" {
    type AssetReference = {
        /**
         * BME paths to `Meshes`.
         */
        readonly Meshes: string[]
        /**
         * BME paths to `Textures`.
         */
        readonly Textures: string[]
        /**
         * BME paths to `Materials`.
         */
        readonly Materials: string[]
        /**
         * BME paths to `Audios`.
         */
        readonly Audios: string[]
    }
}
