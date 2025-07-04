// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:type" {
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
