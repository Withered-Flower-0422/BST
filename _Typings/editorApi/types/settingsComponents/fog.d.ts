declare module "editor:type" {
    const enum FogType {
        Disabled = 0,
        PhysicsFog = 1,
        ArtisticFog = 2,
    }

    const enum FogBlendMode {
        Multiply = 0,
        Additive = 1,
    }

    type PhysicsFog = {
        FalloffDistance: float
        FogHeight: Float2
        MaxDistance: float
        Tint: ColorRGBA
    }

    type ArtisticFog = {
        /**
         * @range `0 ~ 1`
         */
        Intensity: float
        FogBlendMode: FogBlendMode
        ColorStart: ColorRGBA
        ColorEnd: ColorRGBA
        /**
         * @range `0 ~ 1`
         */
        ColorEndBlend: float
        FogDistance: Float2
        /**
         * @range `1 ~ 8`
         */
        DistanceFalloff: float
        FogHeight: Float2
        /**
         * @range `1 ~ 8`
         */
        HeightFalloff: float
        FarFogHeight: float
        FarFogDistance: float
        /**
         * @range `0 ~ 1`
         */
        SkyboxFogIntensity: float
        /**
         * @range `0 ~ 8`
         */
        SkyboxFogHeight: float
        /**
         * @range `1 ~ 8`
         */
        SkyboxFogFalloff: float
        /**
         * @range `-1 ~ 1`
         */
        SkyboxFogOffset: float
        /**
         * @range `0 ~ 1`
         */
        SkyboxFogBottom: float
        /**
         * @range `0 ~ 1`
         */
        SkyboxFogFill: float
        /**
         * @range `0 ~ 1`
         */
        DirectionalIntensity: float
        /**
         * @range `1 ~ 8`
         */
        DirectionalFalloff: float
        DirectionalColor: ColorRGBA
        /**
         * @range `0 ~ 1`
         */
        NoiseIntensity: float
        /**
         * @range `0 ~ 1`
         */
        NoiseMin: float
        /**
         * @range `0 ~ 1`
         */
        NoiseMax: float
        NoiseScale: float
        NoiseSpeed: Float3
        NoiseRange: float
    }

    type Fog = {
        FogType: FogType
        PhysicsFog: PhysicsFog
        ArtisticFog: ArtisticFog
    }
}
