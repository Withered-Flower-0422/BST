// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:type" {
    import { Path } from "path"

    type BackgroundMusic = {
        /**
         * BME paths to the background music.
         */
        readonly BGM: Path<"Audios">[]
        /**
         * BME paths to the sound effects.
         */
        readonly SFX: Path<"Audios">[]
    }
}
