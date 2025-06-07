declare module "game:type" {
    import { Tuple } from "utils"

    type WayPathData = {
        readonly WayPoints: string[]
        readonly AutoCollect: bool
        readonly UseCurve: bool
        readonly ClosedPath: bool
        readonly Loop: bool
        readonly RelativePosition: bool
        readonly RelativeRotation: bool
        readonly AlignTangent: bool
        readonly AutoStart: bool
        readonly Targets: string[]
    }

    type PointInfo = {
        /**
         * @range "0 ~ 1"
         */
        Point: float
        Position: Float3
        Rotation: Quaternion
        Scale: float
    }

    type WayPathMethod = {
        getPointInfo: (point: float) => PointInfo
        getPointsInfo: <T extends float[]>(points: T) => Tuple<PointInfo, T["length"]>
    }
}
