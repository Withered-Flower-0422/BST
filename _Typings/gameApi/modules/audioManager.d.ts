// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:module" {
    import { AssertNonNegInt, Assert0To1 } from "utils"

    namespace audioManager {
        /**
         * Plays a background music by index from the list of background music in the `BGM` component of the `Scene Settings`.
         * @param index - The index of the background music to play.
         * @param volume - The volume of the background music. The range is 0 to 1.
         * @returns
         */
        const playBgm: <T extends int, U extends float>(index: AssertNonNegInt<T>, volume: Assert0To1<U>) => void

        /**
         * Pauses the background music. The next call of `playBgm()` will resume the music from the point where it was paused.
         * @returns
         */
        const pauseBgm: () => void

        /**
         * Stops the background music. The next call of `playBgm()` will start the music from the beginning.
         * @returns
         */
        const stopBgm: () => void

        /**
         * Sets the volume of the background music.
         * @param volume - The volume of the background music. The range is 0 to 1.
         * @returns
         */
        const setBgmVolume: <T extends float>(volume: Assert0To1<T>) => void

        /**
         * Plays a sound effect by index from the list of sound effects in the `BGM` component of the `Scene Settings`.
         * @param index - The index of the sound effect to play.
         * @param volume - The volume of the sound effect. The range is 0 to 1.
         * @returns
         */
        const playSfx: <T extends int, U extends float>(index: AssertNonNegInt<T>, volume: Assert0To1<U>) => void

        /**
         * Pauses the sound effect. The next call of `playSfx()` will resume the sound effect from the point where it was paused.
         * @returns
         */
        const pauseSfx: () => void

        /**
         * Stops the sound effect. The next call of `playSfx()` will start the sound effect from the beginning.
         * @returns
         */
        const stopSfx: () => void

        /**
         * Sets the volume of the sound effect.
         * @param volume - The volume of the sound effect. The range is 0 to 1.
         * @returns
         */
        const setSfxVolume: <T extends float>(volume: Assert0To1<T>) => void
    }
}
