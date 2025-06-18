declare module "editor:type" {
    const enum MoveType {
        Speed = 0,
        Duration = 1,
    }

    type WayPointData = {
        TransformOffset: Trans
        MoveType: MoveType
        MoveSpeed: float
        MoveDuration: float
        StayTime: float
    }

    type WayPointMethod = {
        [key: string | symbol]: never
    }
}
