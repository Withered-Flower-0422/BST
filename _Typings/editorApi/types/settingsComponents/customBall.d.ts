declare module "editor:type" {
    type CustomBallSettings = {
        ItemTemplate: string
        BallName: string
        English: string
        SimplifiedChinese: string
        TraditionalChinese: string
        Japanese: string
        Spanish: string
        WetnessUI: bool
        TemperatureUI: bool
        ScaleUI: bool
        PowerUI: bool
        MoveForce: float
        TorqueForce: float
        Defence: float
        WetMassMultiplier: float
        Flammability: float
        WetDamage: float
        TempScaleMultiplier: float
        LowPowerForceMultiplier: float
        AbsorbElectricMultiplier: float
        Invincible: float
        RollOnWood: string
        RollOnStone: string
        RollOnSteel: string
        SwitcherMaterial: string
        SwitcherGlowColor: ColorRGBA
        SwitcherGlowIntensity: float
        switcherLightColor: ColorRGBA
        SwitcherLightIntensity: float
    }

    type CustomBall = {
        CustomBalls: CustomBallSettings[]
    }
}
