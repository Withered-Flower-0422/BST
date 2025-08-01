// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "editor:type" {
    type DecalData = {
        TransformOffset: Transform
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
