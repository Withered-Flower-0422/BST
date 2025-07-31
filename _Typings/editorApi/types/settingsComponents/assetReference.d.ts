// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "editor:type" {
    type AssetReference = {
        /**
         * BME paths to `Meshes`.
         */
        Meshes: string[]
        /**
         * BME paths to `Textures`.
         */
        Textures: string[]
        /**
         * BME paths to `Materials`.
         */
        Materials: string[]
        /**
         * BME paths to `Audios`.
         */
        Audios: string[]
    }
}
