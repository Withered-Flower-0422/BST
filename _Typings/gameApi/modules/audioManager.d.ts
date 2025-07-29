// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:module" {
    import { AssertInt } from "utils"

    namespace audioManager {
        const playBgm: <T extends int>(index: AssertInt<T>, volume: float) => void
        const pauseBgm: () => void
        const stopBgm: () => void
        const setBgmVolume: (volume: float) => void
        const playSfx: <T extends int>(index: AssertInt<T>, volume: float) => void
        const pauseSfx: () => void
        const stopSfx: () => void
        const setSfxVolume: (volume: float) => void
    }
}
