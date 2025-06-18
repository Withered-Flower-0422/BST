declare module "game:type" {
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
