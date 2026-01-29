// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:type" {
    import { Assert0To1, Assert0To1s } from "utils"
    import { Float3, Quaternion } from "basicData"

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

    type PointInfo<P extends float = float> = {
        Point: P
        Position: Float3
        Rotation: Quaternion
        Scale: float
    }

    type WayPathMethod = {
        getPointInfo: {
            /**
             * Gets the point information of the given point.
             * @param point - The point proportion of the way path, ranging from 0 to 1.
             * @returns The point information of the given point.
             */
            <T extends float>(point: Assert0To1<T>): PointInfo<T>
        }

        getPointsInfo: {
            /**
             * Gets the point information of the given points.
             * @param points - The points proportion of the way path in an array, ranging from 0 to 1.
             * @returns The point information of the given points.
             */
            <const T extends readonly float[]>(
                points: T & Assert0To1s<T>,
            ): { [P in keyof T]: PointInfo<T[P]> }
        }

        /** @deprecated Not implemented yet. */
        play: {
            /**
             * Plays the way path so all the targets move along the path.
             * @returns
             */
            (): void
        }

        /** @deprecated Not implemented yet. */
        pause: {
            /**
             * Pauses the way path so all the targets stop moving. The next call of `play()` will resume the movement from the paused point.
             * @returns
             */
            (): void
        }

        /** @deprecated Not implemented yet. */
        stop: {
            /**
             * Stops the way path so all the targets stop moving. The next call of `play()` will start the movement from the beginning.
             * @returns
             */
            (): void
        }
    }
}
