declare module "game:type" {
    type AssetReference = {
        /**
         * @description BME paths to `Scenes`
         */
        // readonly "Scenes": string[]
        /**
         * @description BME paths to `Items`
         */
        // readonly "Items": string[]
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
