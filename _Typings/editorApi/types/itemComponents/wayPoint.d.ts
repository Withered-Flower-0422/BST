// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "editor:type" {
    enum MoveType {
        Speed = 0,
        Duration = 1,
    }

    type WayPointData = {
        TransformOffset: Transform
        MoveType: MoveType
        MoveSpeed: float
        MoveDuration: float
        StayTime: float
    }

    type WayPointMethod = {
        [key: PropertyKey]: never
    }
}
