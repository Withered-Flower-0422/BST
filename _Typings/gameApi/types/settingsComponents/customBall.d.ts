// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:type" {
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
        SwitcherLightColor: ColorRGBA
        SwitcherLightIntensity: float
    }

    type CustomBall = {
        readonly CustomBalls: CustomBallSettings[]
    }
}
