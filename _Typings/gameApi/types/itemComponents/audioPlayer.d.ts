declare module "game:type" {
    type AudioPlayerData = {
        TransformOffset: Trans
        AudioPath: string
        Loop: bool
        /**
         * @range `0 ~ 1`
         */
        Volume: float
        SpatializeAudio: bool
        /**
         * @range `0 ~ 100`
         */
        MinDistance: float
        /**
         * @range `0 ~ 100`
         */
        MaxDistance: float
    }

    type AudioPlayerMethod = {
        play: () => void
        pause: () => void
        stop: () => void
    }
}
