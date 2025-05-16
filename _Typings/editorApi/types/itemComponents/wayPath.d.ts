declare module "editor:type" {
    type WayPathData = {
        WayPoints: string[]
        AutoCollect: bool
        UseCurve: bool
        ClosedPath: bool
        Loop: bool
        RelativePosition: bool
        RelativeRotation: bool
        AlignTangent: bool
        AutoStart: bool
        Targets: string[]
    }

    type WayPathMethod = {
        [key: string | symbol]: never
    }
}
