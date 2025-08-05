// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

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
        [key: PropertyKey]: never
    }
}
