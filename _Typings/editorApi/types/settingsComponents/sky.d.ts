// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "editor:type" {
    import { Path } from "path"
    import { Float3, ColorRGBA } from "basicData"

    enum SkyType {
        PhysicsSky = 0,
        HDRISky = 1,
    }

    type PhysicsSky = {
        PlanetRotation: Float3
        GroundColorTexture: Path<"Textures">
        GroundTint: ColorRGBA
        GroundEmissionTexture: Path<"Textures">
        GroundEmissionMultiplier: float
        SpaceRotation: Float3
        SpaceEmissionTexture: Path<"Textures">
        SpaceEmissionMultiplier: float
        AirMaximumAltitude: float
        /**
         * @range `0 ~ 1`
         */
        AirDensityR: float
        /**
         * @range `0 ~ 1`
         */
        AirDensityG: float
        /**
         * @range `0 ~ 1`
         */
        AirDensityB: float
        AirTint: ColorRGBA
        /**
         * @range `0 ~ 1`
         */
        AerosolDensity: float
        AerosolTint: ColorRGBA
        /**
         * @range `0 ~ 1`
         */
        AerosolAnisotropy: float
        AerosolMaximumAltitude: float
        /**
         * @range `0 ~ 1`
         */
        OzoneDensityDimmer: float
        OzoneMinimumAltitude: float
        OzoneLayerWidth: float
        /**
         * @range `0 ~ 1`
         */
        ColorSaturation: float
        /**
         * @range `0 ~ 1`
         */
        AlphaSaturation: float
        /**
         * @range `0 ~ 1`
         */
        AlphaMultiplier: float
        horizonTint: ColorRGBA
        /**
         * @range `-1 ~ 1`
         */
        horizonZenithShift: float
        ZenithTint: ColorRGBA
    }

    type HDRISky = {
        SkyboxTexturePathUp: Path<"Textures">
        SkyboxTexturePathDown: Path<"Textures">
        SkyboxTexturePathLeft: Path<"Textures">
        SkyboxTexturePathRight: Path<"Textures">
        SkyboxTexturePathFront: Path<"Textures">
        SkyboxTexturePathBack: Path<"Textures">
        /**
         * @range `0 ~ 360`
         */
        Rotation: float
        /**
         * @range `-3 ~ 3`
         */
        GammaOffset: float
    }

    type Sky = {
        SkyType: SkyType
        PhysicsSky: PhysicsSky
        HDRISky: HDRISky
        ExposureCompensation: float
    }
}
