// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "editor:type" {
    import { Path } from "path"

    type DecalData = {
        TransformOffset: Transform
        MaterialPath: Path<"Materials">
        DrawDistance: float
        StartFade: float
        Opacity: float
        RotationSpeed: float
    }

    type DecalMethod = {
        [key: PropertyKey]: never
    }
}
