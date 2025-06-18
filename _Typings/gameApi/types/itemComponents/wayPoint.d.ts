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
