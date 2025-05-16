declare module "editor:type" {
    type Lighting = {
        Enabled: bool
        Rotation: Float3
        /**
         * @range `0 ~ 360`
         */
        AngularDiameter: float
        SurfaceTexture: string
        SurfaceTint: ColorRGBA
        /**
         * @range `0 ~ 90`
         */
        FlareSize: float
        FlareFalloff: float
        FlareTint: ColorRGBA
        /**
         * @range `0 ~ 1`
         */
        FlareMultiplier: float
        LightIntensity: float
        LightTemperature: float
        LightFilter: ColorRGBA
        /**
         * @range `0 ~ 1`
         */
        ShadowIntensity: float
    }
}
