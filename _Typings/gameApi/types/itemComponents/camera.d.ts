// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:type" {
    type CameraData = {
        Orthographic: bool
        OrthographicSize: float
        FieldOfView: float
        ClippingPlane: Float2
    }

    type CameraMethod = {
        [key: PropertyKey]: never
    }
}
