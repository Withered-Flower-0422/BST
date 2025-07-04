// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:module" {
    namespace audioManager {
        const playBgm: (index: int, volume: float) => void
        const pauseBgm: () => void
        const stopBgm: () => void
        const setBgmVolume: (volume: float) => void
        const playSfx: (index: int, volume: float) => void
        const pauseSfx: () => void
        const stopSfx: () => void
        const setSfxVolume: (volume: float) => void
    }
}
