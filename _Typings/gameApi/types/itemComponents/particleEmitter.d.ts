// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:type" {
    import { NonNegIntRange } from "utils"
    import { Path } from "path"
    import { Float2, Float3, ColorRGBA, Trans } from "basicData"

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
        TransformOffset: Trans
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
        TexturePath: Path<"Textures">
        BlendMode: ParticleEmitterBlendMode
        Life: Float2
        Size: Float2
        TimeNodes: ParticleEmitterTimeNode[]
        Gravity: float
        TurbulenceIntensity: float
        TurbulenceFrequency: float
        /**
         * @range `1 ~ 32`
         */
        AnimationTilesX: NonNegIntRange<1, 32>
        /**
         * @range `1 ~ 32`
         */
        AnimationTilesY: NonNegIntRange<1, 32>
    }

    type ParticleEmitterMethod = {
        play: {
            /**
             * Starts playing the particle emitter.
             * @returns
             */
            (): void
        }

        pause: {
            /**
             * Pauses the particle emitter. The next time it is played, it will continue from where it left off.
             * @returns
             */
            (): void
        }

        stop: {
            /**
             * Stops the particle emitter. The next time it is played, it will start from the beginning.
             * @returns
             */
            (): void
        }
    }
}
