// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:type" {
    import { Float3 } from "basicData"

    type Environment = {
        EnvironmentTemp: float
        AutoRainAvoidance: bool
        Wind: Float3
        /**
         * @range `0 ~ 1`
         */
        RainParticle: float
        /**
         * @range `0 ~ 1`
         */
        SnowParticle: float
        /**
         * @range `0 ~ 1`
         */
        FogParticle: float
        /**
         * @range `0 ~ 1`
         */
        FireflyParticle: float
        /**
         * @range `0 ~ 1`
         */
        FireSparkParticle: float
        /**
         * @range `0 ~ 1`
         */
        GlobalSnowCover: float
        /**
         * @range `0 ~ 1`
         */
        GlobalRainCover: float
    }
}
