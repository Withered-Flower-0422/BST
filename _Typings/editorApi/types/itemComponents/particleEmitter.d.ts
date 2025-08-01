// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "editor:type" {
    import { IntRange } from "utils"

    enum ParticleEmitterBlendMode {
        Alpha = 0,
        Additive = 1,
        Premultiply = 2,
    }

    type ParticleEmitterTimeNode = {
        Time: float
        Color: ColorRGBA
        Size: float
    }

    type ParticleEmitterData = {
        TransformOffset: Transform
        AutoStart: bool
        Loop: bool
        SimulationInLocal: bool
        Duration: float
        SpawnRate: Float2
        BurstCount: Float2
        SpawnBoxSize: Float3
        Velocity: Float2
        StartRotation: Float2
        AngularVelocity: Float2
        FollowCamera: bool
        TexturePath: string
        BlendMode: ParticleEmitterBlendMode
        Life: Float2
        Size: Float2
        TimeNodes: Partial<ParticleEmitterTimeNode>[]
        Gravity: float
        TurbulenceIntensity: float
        TurbulenceFrequency: float
        /**
         * @range `1 ~ 32`
         */
        AnimationTilesX: IntRange<1, 32>
        /**
         * @range `1 ~ 32`
         */
        AnimationTilesY: IntRange<1, 32>
    }

    type ParticleEmitterMethod = {
        /**
         * Refresh the particle emitter animation in the editor.
         * @returns
         */
        refresh: () => void

        /**
         * Start playing the particle emitter animation in the editor.
         * @returns
         */
        play: () => void

        /**
         * Pause the particle emitter animation in the editor.
         * The next time you call `play()`, the animation will resume from the paused point.
         * @returns
         */
        pause: () => void

        /**
         * Stop the particle emitter animation in the editor.
         * The next time you call `play()`, the animation will start from the beginning.
         * @returns
         */
        stop: () => void
    }
}
