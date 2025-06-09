declare module "editor:type" {
    type AssetReference = {
        /**
         * @description BME paths to `Scenes`
         */
        // Scenes: string[]
        /**
         * @description BME paths to `Items`
         */
        // Items: string[]
        /**
         * @description BME paths to `Meshes`
         */
        Meshes: string[]
        /**
         * @description BME paths to `Textures`
         */
        Textures: string[]
        /**
         * @description BME paths to `Materials`
         */
        Materials: string[]
        /**
         * @description BME paths to `Audios`
         */
        Audios: string[]
    }
}
