// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:type" {
    import { Path } from "path"
    import { Trans } from "basicData"

    type AudioPlayerData = {
        TransformOffset: Trans
        AudioPath: Path<"Audios">
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
        play: {
            /**
             * Plays the audio.
             * @returns
             */
            (): void
        }

        pause: {
            /**
             * Pauses the audio. The next call of `play()` will resume the audio from the paused position.
             * @returns
             */
            (): void
        }

        stop: {
            /**
             * Stops the audio. The next call of `play()` will start the audio from the beginning.
             * @returns
             */
            (): void
        }
    }
}
