declare module "game:type" {
    type WayPathData = {
        "WayPoints": string[]
        "AutoCollect": bool
        "UseCurve": bool
        "ClosedPath": bool
        "Loop": bool
        "RelativePosition": bool
        "RelativeRotation": bool
        "AlignTangent": bool
        "AutoStart": bool
        "Targets": string[]
    }

    type WayPathMethod = {
        getPointInfo: (point: float) => {
            /**
             * @range "0 ~ 1"
             */
            Point: float
            Position: Float3
            Rotation: Quaternion
            Scale: float
        }
        getPointsInfo: (points: float[]) => {
            /**
             * @range "0 ~ 1"
             */
            Point: float
            Position: Float3
            Rotation: Quaternion
            Scale: float
        }[]
    }
}
