declare module "game:type" {
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
