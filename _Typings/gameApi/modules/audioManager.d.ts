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
