declare module "editor:type" {
    const enum SkyType {
        PhysicsSky = 0,
        HDRISky = 1,
    }

    type PhysicsSky = {
        PlanetRotation: Float3
        GroundColorTexture: string
        GroundTint: ColorRGBA
        GroundEmissionTexture: string
        GroundEmissionMultiplier: float
        SpaceRotation: Float3
        SpaceEmissionTexture: string
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
        SkyboxTexturePathUp: string
        SkyboxTexturePathDown: string
        SkyboxTexturePathLeft: string
        SkyboxTexturePathRight: string
        SkyboxTexturePathFront: string
        SkyboxTexturePathBack: string
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
