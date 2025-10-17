// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:type" {
    import { NonNegIntRange } from "utils"
    import { ColorRGBA } from "basicData"

    type Cloud = {
        "CloudLayer1/Enabled": bool
        /**
         * @range `0 ~ 1`
         */
        "CloudLayer1/CloudA": float
        /**
         * @range `0 ~ 1`
         */
        "CloudLayer1/CloudB": float
        /**
         * @range `0 ~ 1`
         */
        "CloudLayer1/CloudC": float
        /**
         * @range `0 ~ 1`
         */
        "CloudLayer1/CloudD": float
        "CloudLayer1/Altitude": float
        /**
         * @range `0 ~ 360`
         */
        "CloudLayer1/Rotation": float
        "CloudLayer1/Tint": ColorRGBA
        "CloudLayer1/ExposureCompensation": float
        /**
         * @range `0 ~ 360`
         */
        "CloudLayer1/WindOrientation": float
        "CloudLayer1/WindSpeed": float
        /**
         * @range `2 ~ 32`
         */
        "CloudLayer1/RayMarchingSteps": NonNegIntRange<2, 32>
        /**
         * @range `0 ~ 1`
         */
        "CloudLayer1/RayMarchingDensity": float
        /**
         * @range `0 ~ 1`
         */
        "CloudLayer1/RayMarchingAmbient": float
        "CloudLayer2/Enabled": bool
        /**
         * @range `0 ~ 1`
         */
        "CloudLayer2/CloudA": float
        /**
         * @range `0 ~ 1`
         */
        "CloudLayer2/CloudB": float
        /**
         * @range `0 ~ 1`
         */
        "CloudLayer2/CloudC": float
        /**
         * @range `0 ~ 1`
         */
        "CloudLayer2/CloudD": float
        "CloudLayer2/Altitude": float
        /**
         * @range `0 ~ 360`
         */
        "CloudLayer2/Rotation": float
        "CloudLayer2/Tint": ColorRGBA
        "CloudLayer2/ExposureCompensation": float
        /**
         * @range `0 ~ 360`
         */
        "CloudLayer2/WindOrientation": float
        "CloudLayer2/WindSpeed": float
        /**
         * @range `2 ~ 32`
         */
        "CloudLayer2/RayMarchingSteps": NonNegIntRange<2, 32>
        /**
         * @range `0 ~ 1`
         */
        "CloudLayer2/RayMarchingDensity": float
        /**
         * @range `0 ~ 1`
         */
        "CloudLayer2/RayMarchingAmbient": float
    }
}
