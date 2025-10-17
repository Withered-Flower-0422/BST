// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "editor:type" {
    import { Float3 } from "basicData"

    type Transform = {
        Position: Float3
        Rotation: Float3
        Scale: Float3
    }
}
