declare module "game:type:decal" {
    export type DecalData = {
        "TransformOffset": Trans
        "MaterialPath": string
        "DrawDistance": float
        "StartFade": float
        "Opacity": float
        "RotationSpeed": float
    }

    export type DecalMethod = {
        [key: string | symbol]: never
    }
}
