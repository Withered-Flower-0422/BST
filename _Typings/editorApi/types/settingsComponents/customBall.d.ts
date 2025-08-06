// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "editor:type" {
    import { LocalizedString } from "localize"
    import { Path } from "path"

    type CustomBallSettings = {
        ItemTemplate: string
        BallName: string
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
        RollOnWood: Path<"Audios">
        RollOnStone: Path<"Audios">
        RollOnSteel: Path<"Audios">
        SwitcherMaterial: Path<"Materials">
        SwitcherGlowColor: ColorRGBA
        SwitcherGlowIntensity: float
        SwitcherLightColor: ColorRGBA
        SwitcherLightIntensity: float
    } & LocalizedString

    type CustomBall = {
        CustomBalls: Partial<CustomBallSettings>[]
    }
}
