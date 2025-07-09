// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:type" {
    type AssetReference = {
        /**
         * @description BME paths to `Meshes`
         */
        readonly Meshes: string[]
        /**
         * @description BME paths to `Textures`
         */
        readonly Textures: string[]
        /**
         * @description BME paths to `Materials`
         */
        readonly Materials: string[]
        /**
         * @description BME paths to `Audios`
         */
        readonly Audios: string[]
    }
}
