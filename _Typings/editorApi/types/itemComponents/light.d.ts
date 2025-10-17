// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "editor:type" {
    import { NonNegIntRange } from "utils"
    import { Path } from "path"
    import { Float2, Float3, ColorRGBA } from "basicData"

    enum LightType {
        Point = 0,
        Spot = 1,
        RectArea = 2,
        CircleArea = 3,
    }

    enum ShadowQuality {
        Off = 0,
        Low = 1,
        Medium = 2,
        High = 3,
    }

    enum LightBlendMode {
        Additive = 0,
        Blend = 1,
        PreMultiply = 2,
        Subtractive = 3,
    }

    type PointLight = {
        Temperature: float
        Filter: ColorRGBA
        Intensity: float
        Range: float
        ShadowQuality: ShadowQuality
        /**
         * @range `0 ~ 10`
         */
        ShadowNearClip: float
    }

    type SpotLight = {
        Temperature: float
        Filter: ColorRGBA
        Intensity: float
        Range: float
        ShadowQuality: ShadowQuality
        /**
         * @range `0 ~ 10`
         */
        ShadowNearClip: float
        /**
         * @range `0 ~ 179`
         */
        InnerAngle: float
        /**
         * @range `1 ~ 179`
         */
        OuterAngle: float
    }

    type RectAreaLight = {
        Size: Float2
        Temperature: float
        Filter: ColorRGBA
        Intensity: float
        Range: float
        ShadowQuality: ShadowQuality
        /**
         * @range `0 ~ 10`
         */
        ShadowNearClip: float
    }

    type CircleAreaLight = {
        Radius: float
        Temperature: float
        Filter: ColorRGBA
        Intensity: float
        Range: float
        ShadowQuality: ShadowQuality
        /**
         * @range `0 ~ 10`
         */
        ShadowNearClip: float
    }

    type VolumetricLight = {
        OnlyVolumetric: bool
        AutoOptimize: bool
        BlendMode: LightBlendMode
        /**
         * @range `1 ~ 256`
         */
        Quality: NonNegIntRange<1, 256>
        StepSize: float
        MaxStep: int
        Jitter: float
        Dither: float
        /**
         * @range `0 ~ 3`
         */
        NoiseStrength: float
        NoiseScale: float
        NoiseMultiplier: float
        Wind: Float3
        Density: float
        Tint: ColorRGBA
        Brightness: float
        ConstantFalloff: float
        LinearFalloff: float
        QuadraticFalloff: float
        RangeFalloff: float
        DiffusionIntensity: float
        /**
         * @range `0 ~ 1`
         */
        EdgeFade: float
        /**
         * @range `0 ~ 80`
         */
        FrustumAngleCircleArea: float
        /**
         * @range `0 ~ 80`
         */
        FrustumAngleRectArea: float
        TipRadius: float
        ProjectorTexture: Path<"Textures">
        ProjectorScale: Float2
        ProjectorOffset: Float2
        ProjectorScrollSpeed: Float2
        ShadowQuality: ShadowQuality
        BakeOnLevelStart: bool
        NearClip: float
        EnableDust: bool
        DustBrightness: float
        DustSize: Float2
        DustTurbulence: float
        DustFalloffDistance: float
    }

    type LightData = {
        TransformOffset: Transform
        LightType: LightType
        PointLight: PointLight
        SpotLight: SpotLight
        RectAreaLight: RectAreaLight
        CircleAreaLight: CircleAreaLight
        EnableVolumetricLight: bool
        VolumetricLight: VolumetricLight
    }

    type LightMethod = {
        [key: PropertyKey]: never
    }
}
