declare module "editor:type:camera" {
    export type CameraData = {
        Orthographic: bool
        OrthographicSize: float
        FieldOfView: float
        ClippingPlane: Float2
    }

    export type CameraMethod = {
        [key: string | symbol]: never
    }
}
