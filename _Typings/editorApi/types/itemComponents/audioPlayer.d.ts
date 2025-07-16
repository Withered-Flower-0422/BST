// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "editor:type" {
    type AudioPlayerData = {
        TransformOffset: Transform
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
        [key: string | symbol]: never
    }
}
