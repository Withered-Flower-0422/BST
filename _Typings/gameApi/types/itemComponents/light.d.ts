declare module "game:type" {
    import { IntRange } from "utils"

    const enum LightType {
        Point = 0,
        Spot = 1,
        RectArea = 2,
        CircleArea = 3,
    }

    const enum ShadowQuality {
        Off = 0,
        Low = 1,
        Medium = 2,
        High = 3,
    }

    const enum LightBlendMode {
        Additive = 0,
        Blend = 1,
        PreMultiply = 2,
        Subtractive = 3,
    }

    type LightData = {
        TransformOffset: Trans
        LightType: LightType
        "PointLight/Temperature": float
        "PointLight/Filter": ColorRGBA
        "PointLight/Intensity": float
        "PointLight/Range": float
        "PointLight/ShadowQuality": ShadowQuality
        /**
         * @range `0 ~ 10`
         */
        "PointLight/ShadowNearClip": float
        /**
         * @range `0 ~ 179`
         */
        "SpotLight/InnerAngle": float
        /**
         * @range `1 ~ 179`
         */
        "SpotLight/OuterAngle": float
        "SpotLight/Temperature": float
        "SpotLight/Filter": ColorRGBA
        "SpotLight/Intensity": float
        "SpotLight/Range": float
        "SpotLight/ShadowQuality": ShadowQuality
        /**
         * @range `0 ~ 10`
         */
        "SpotLight/ShadowNearClip": float
        "RectAreaLight/Size": Float2
        "RectAreaLight/Temperature": float
        "RectAreaLight/Filter": ColorRGBA
        "RectAreaLight/Intensity": float
        "RectAreaLight/Range": float
        "RectAreaLight/ShadowQuality": ShadowQuality
        /**
         * @range `0 ~ 10`
         */
        "RectAreaLight/ShadowNearClip": float
        "CircleAreaLight/Radius": float
        "CircleAreaLight/Temperature": float
        "CircleAreaLight/Filter": ColorRGBA
        "CircleAreaLight/Intensity": float
        "CircleAreaLight/Range": float
        "CircleAreaLight/ShadowQuality": ShadowQuality
        /**
         * @range `0 ~ 10`
         */
        "CircleAreaLight/ShadowNearClip": float
        EnableVolumetricLight: bool
        "VolumetricLight/OnlyVolumetric": bool
        "VolumetricLight/AutoOptimize": bool
        "VolumetricLight/BlendMode": LightBlendMode
        /**
         * @range `1 ~ 256`
         */
        "VolumetricLight/Quality": IntRange<1, 256>
        "VolumetricLight/StepSize": float
        "VolumetricLight/MaxStep": int
        "VolumetricLight/Jitter": float
        "VolumetricLight/Dither": float
        /**
         * @range `0 ~ 3`
         */
        "VolumetricLight/NoiseStrength": float
        "VolumetricLight/NoiseScale": float
        "VolumetricLight/NoiseMultiplier": float
        "VolumetricLight/Wind": Float3
        "VolumetricLight/Density": float
        "VolumetricLight/Tint": ColorRGBA
        "VolumetricLight/Brightness": float
        "VolumetricLight/ConstantFalloff": float
        "VolumetricLight/LinearFalloff": float
        "VolumetricLight/QuadraticFalloff": float
        "VolumetricLight/RangeFalloff": float
        "VolumetricLight/DiffusionIntensity": float
        /**
         * @range `0 ~ 1`
         */
        "VolumetricLight/EdgeFade": float
        /**
         * @range `0 ~ 80`
         */
        "VolumetricLight/FrustumAngleCircleArea": float
        /**
         * @range `0 ~ 80`
         */
        "VolumetricLight/FrustumAngleRectArea": float
        "VolumetricLight/TipRadius": float
        "VolumetricLight/ProjectorTexture": string
        "VolumetricLight/ProjectorScale": Float2
        "VolumetricLight/ProjectorOffset": Float2
        "VolumetricLight/ProjectorScrollSpeed": Float2
        "VolumetricLight/ShadowQuality": ShadowQuality
        "VolumetricLight/BakeOnLevelStart": bool
        "VolumetricLight/NearClip": float
        "VolumetricLight/EnableDust": bool
        "VolumetricLight/DustBrightness": float
        "VolumetricLight/DustSize": Float2
        "VolumetricLight/DustTurbulence": float
        "VolumetricLight/DustFalloffDistance": float
    }

    type LightMethod = {
        [key: string | symbol]: never
    }
}
