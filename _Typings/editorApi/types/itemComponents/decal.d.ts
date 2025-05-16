declare module "editor:type" {
    type DecalData = {
        TransformOffset: Trans
        MaterialPath: string
        DrawDistance: float
        StartFade: float
        Opacity: float
        RotationSpeed: float
    }

    type DecalMethod = {
        [key: string | symbol]: never
    }
}
