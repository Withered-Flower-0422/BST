declare module "game:type" {
    const enum SkyType {
        PhysicsSky = 0,
        HDRISky = 1,
    }

    type Sky = {
        SkyType: SkyType
        "PhysicsSky/PlanetRotation": Float3
        "PhysicsSky/GroundColorTexture": string
        "PhysicsSky/GroundTint": ColorRGBA
        "PhysicsSky/GroundEmissionTexture": string
        "PhysicsSky/GroundEmissionMultiplier": float
        "PhysicsSky/SpaceRotation": Float3
        "PhysicsSky/SpaceEmissionTexture": string
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
        "HDRISky/SkyboxTexturePathUp": string
        "HDRISky/SkyboxTexturePathDown": string
        "HDRISky/SkyboxTexturePathLeft": string
        "HDRISky/SkyboxTexturePathRight": string
        "HDRISky/SkyboxTexturePathFront": string
        "HDRISky/SkyboxTexturePathBack": string
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
