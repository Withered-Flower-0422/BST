declare module "editor:type:assetReference" {
    export type AssetReference = {
        /**
         * @description BME pathes to `Scenes`
         */
        // Scenes: string[]
        /**
         * @description BME pathes to `Items`
         */
        // Items: string[]
        /**
         * @description BME pathes to `Meshes`
         */
        Meshes: string[]
        /**
         * @description BME pathes to `Textures`
         */
        Textures: string[]
        /**
         * @description BME pathes to `Materials`
         */
        Materials: string[]
        /**
         * @description BME pathes to `Audios`
         */
        Audios: string[]
    }
}
