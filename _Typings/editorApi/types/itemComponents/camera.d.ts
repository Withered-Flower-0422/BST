declare module "editor:type" {
    type CameraData = {
        Orthographic: bool
        OrthographicSize: float
        FieldOfView: float
        ClippingPlane: Float2
    }

    type CameraMethod = {
        [key: string | symbol]: never
    }
}
