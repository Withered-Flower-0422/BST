declare module "game:type:wayPoint" {
    const enum MoveType {
        Speed = 0,
        Duration = 1,
    }

    export type WayPointData = {
        "TransformOffset": Trans
        "MoveType": MoveType
        "MoveSpeed": float
        "MoveDuration": float
        "StayTime": float
    }

    export type WayPointMethod = {
        [key: string | symbol]: never
    }
}
