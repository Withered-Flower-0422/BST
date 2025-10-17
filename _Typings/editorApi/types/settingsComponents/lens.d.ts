// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "editor:type" {
    import { ColorRGBA } from "basicData"

    type Lens = {
        AutoExposure: bool
        /**
         * @range `-5 ~ 15`
         */
        LimitMin: float
        /**
         * @range `-5 ~ 15`
         */
        LimitMax: float
        ExposureCompensation: float
        SpeedDarkToLight: float
        SpeedLightToDark: float
        FixedExposure: float
        PostExposure: float
        /**
         * @range `-100 ~ 100`
         */
        Contrast: float
        ColorFilter: ColorRGBA
        /**
         * @range `-180 ~ 180`
         */
        HueShift: float
        /**
         * @range `-100 ~ 100`
         */
        Saturation: float
        Shadows: ColorRGBA
        Highlights: ColorRGBA
        /**
         * @range `-100 ~ 100`
         */
        Balance: float
        /**
         * @range `-100 ~ 100`
         */
        Temperature: float
        /**
         * @range `-100 ~ 100`
         */
        Tint: float
    }
}
