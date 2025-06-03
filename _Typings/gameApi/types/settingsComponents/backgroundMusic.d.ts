declare module "game:type" {
    type BackgroundMusic = {
        /**
         * @description BME paths to the background music
         */
        readonly BGM: string[]
        /**
         * @description BME paths to the sound effects
         */
        readonly SFX: string[]
    }
}
