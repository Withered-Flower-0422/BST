// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:type" {
    import { Path } from "path"
    import { Float3, ColorRGBA } from "basicData"

    enum SkyType {
        PhysicsSky = 0,
        HDRISky = 1,
    }

    type Sky = {
        SkyType: SkyType
        "PhysicsSky/PlanetRotation": Float3
        "PhysicsSky/GroundColorTexture": Path<"Textures">
        "PhysicsSky/GroundTint": ColorRGBA
        "PhysicsSky/GroundEmissionTexture": Path<"Textures">
        "PhysicsSky/GroundEmissionMultiplier": float
        "PhysicsSky/SpaceRotation": Float3
        "PhysicsSky/SpaceEmissionTexture": Path<"Textures">
        "PhysicsSky/SpaceEmissionMultiplier": float
        "PhysicsSky/AirMaximumAltitude": float
        /**
         * @range `0 ~ 1`
         */
        "PhysicsSky/AirDensityR": float
        /**
         * @range `0 ~ 1`
         */
        "PhysicsSky/AirDensityG": float
        /**
         * @range `0 ~ 1`
         */
        "PhysicsSky/AirDensityB": float
        "PhysicsSky/AirTint": ColorRGBA
        /**
         * @range `0 ~ 1`
         */
        "PhysicsSky/AerosolDensity": float
        "PhysicsSky/AerosolTint": ColorRGBA
        /**
         * @range `0 ~ 1`
         */
        "PhysicsSky/AerosolAnisotropy": float
        "PhysicsSky/AerosolMaximumAltitude": float
        /**
         * @range `0 ~ 1`
         */
        "PhysicsSky/OzoneDensityDimmer": float
        "PhysicsSky/OzoneMinimumAltitude": float
        "PhysicsSky/OzoneLayerWidth": float
        /**
         * @range `0 ~ 1`
         */
        "PhysicsSky/ColorSaturation": float
        /**
         * @range `0 ~ 1`
         */
        "PhysicsSky/AlphaSaturation": float
        /**
         * @range `0 ~ 1`
         */
        "PhysicsSky/AlphaMultiplier": float
        "PhysicsSky/horizonTint": ColorRGBA
        /**
         * @range `-1 ~ 1`
         */
        "PhysicsSky/horizonZenithShift": float
        "PhysicsSky/ZenithTint": ColorRGBA
        "HDRISky/SkyboxTexturePathUp": Path<"Textures">
        "HDRISky/SkyboxTexturePathDown": Path<"Textures">
        "HDRISky/SkyboxTexturePathLeft": Path<"Textures">
        "HDRISky/SkyboxTexturePathRight": Path<"Textures">
        "HDRISky/SkyboxTexturePathFront": Path<"Textures">
        "HDRISky/SkyboxTexturePathBack": Path<"Textures">
        /**
         * @range `0 ~ 360`
         */
        "HDRISky/Rotation": float
        /**
         * @range `-3 ~ 3`
         */
        "HDRISky/GammaOffset": float
        /**
         * @range `-20 ~ 20`
         */
        ExposureCompensation: float
    }
}
