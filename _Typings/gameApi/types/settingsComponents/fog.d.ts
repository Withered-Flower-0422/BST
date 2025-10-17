// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:type" {
    import { Float2, Float3, ColorRGBA } from "basicData"

    enum FogType {
        Disabled = 0,
        PhysicsFog = 1,
        ArtisticFog = 2,
    }

    enum FogBlendMode {
        Multiply = 0,
        Additive = 1,
    }

    type Fog = {
        FogType: FogType
        "PhysicsFog/FalloffDistance": float
        "PhysicsFog/FogHeight": Float2
        "PhysicsFog/MaxDistance": float
        "PhysicsFog/Tint": ColorRGBA
        /**
         * @range `0 ~ 1`
         */
        "ArtisticFog/Intensity": float
        "ArtisticFog/FogBlendMode": FogBlendMode
        "ArtisticFog/ColorStart": ColorRGBA
        "ArtisticFog/ColorEnd": ColorRGBA
        /**
         * @range `0 ~ 1`
         */
        "ArtisticFog/ColorEndBlend": float
        "ArtisticFog/FogDistance": Float2
        /**
         * @range `1 ~ 8`
         */
        "ArtisticFog/DistanceFalloff": float
        "ArtisticFog/FogHeight": Float2
        /**
         * @range `1 ~ 8`
         */
        "ArtisticFog/HeightFalloff": float
        "ArtisticFog/FarFogHeight": float
        "ArtisticFog/FarFogDistance": float
        /**
         * @range `0 ~ 1`
         */
        "ArtisticFog/SkyboxFogIntensity": float
        /**
         * @range `0 ~ 8`
         */
        "ArtisticFog/SkyboxFogHeight": float
        /**
         * @range `1 ~ 8`
         */
        "ArtisticFog/SkyboxFogFalloff": float
        /**
         * @range `-1 ~ 1`
         */
        "ArtisticFog/SkyboxFogOffset": float
        /**
         * @range `0 ~ 1`
         */
        "ArtisticFog/SkyboxFogBottom": float
        /**
         * @range `0 ~ 1`
         */
        "ArtisticFog/SkyboxFogFill": float
        /**
         * @range `0 ~ 1`
         */
        "ArtisticFog/DirectionalIntensity": float
        /**
         * @range `1 ~ 8`
         */
        "ArtisticFog/DirectionalFalloff": float
        "ArtisticFog/DirectionalColor": ColorRGBA
        /**
         * @range `0 ~ 1`
         */
        "ArtisticFog/NoiseIntensity": float
        /**
         * @range `0 ~ 1`
         */
        "ArtisticFog/NoiseMin": float
        /**
         * @range `0 ~ 1`
         */
        "ArtisticFog/NoiseMax": float
        "ArtisticFog/NoiseScale": float
        "ArtisticFog/NoiseSpeed": Float3
        "ArtisticFog/NoiseRange": float
    }
}
