declare module "game:type" {
    type AssetReference = {
        /**
         * @description BME pathes to `Scenes`
         */
        // readonly "Scenes": string[]
        /**
         * @description BME pathes to `Items`
         */
        // readonly "Items": string[]
        /**
         * @description BME pathes to `Meshes`
         */
        readonly "Meshes": string[]
        /**
         * @description BME pathes to `Textures`
         */
        readonly "Textures": string[]
        /**
         * @description BME pathes to `Materials`
         */
        readonly "Materials": string[]
        /**
         * @description BME pathes to `Audios`
         */
        readonly "Audios": string[]
    }
}
