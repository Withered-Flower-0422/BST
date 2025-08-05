// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "editor:type" {
    import { NonNegIntRange } from "utils"

    type CloudLayer = {
        Enabled: bool
        /**
         * @range `0 ~ 1`
         */
        CloudA: float
        /**
         * @range `0 ~ 1`
         */
        CloudB: float
        /**
         * @range `0 ~ 1`
         */
        CloudC: float
        /**
         * @range `0 ~ 1`
         */
        CloudD: float
        Altitude: float
        /**
         * @range `0 ~ 360`
         */
        Rotation: float
        Tint: ColorRGBA
        ExposureCompensation: float
        /**
         * @range `0 ~ 360`
         */
        WindOrientation: float
        WindSpeed: float
        /**
         * @range `2 ~ 32`
         */
        RayMarchingSteps: NonNegIntRange<2, 32>
        /**
         * @range `0 ~ 1`
         */
        RayMarchingDensity: float
        /**
         * @range `0 ~ 1`
         */
        RayMarchingAmbient: float
    }

    type Cloud = {
        CloudLayer1: CloudLayer
        CloudLayer2: CloudLayer
    }
}
