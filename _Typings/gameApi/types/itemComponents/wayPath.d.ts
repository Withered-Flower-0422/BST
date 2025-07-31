// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

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
        /**
         * Gets the point information of the given point.
         * @param point - The point of the way path.
         * @returns The point information of the given point.
         */
        getPointInfo: (point: float) => PointInfo

        /**
         * Gets the point information of the given points.
         * @param points - The points of the way path in an array.
         * @returns The point information of the given points.
         */
        getPointsInfo: <T extends float[]>(points: T) => Tuple<PointInfo, T["length"]>
    }
}
