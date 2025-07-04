// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:type" {
    const enum MoveType {
        Speed = 0,
        Duration = 1,
    }

    type WayPointData = {
        readonly TransformOffset: Trans
        readonly MoveType: MoveType
        readonly MoveSpeed: float
        readonly MoveDuration: float
        readonly StayTime: float
    }

    type WayPointMethod = {
        [key: string | symbol]: never
    }
}
