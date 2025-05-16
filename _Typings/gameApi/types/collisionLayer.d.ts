declare module "game:type:collisionLayer" {
    export const enum CollisionLayer {
        Player = 0,
        RigidBody = 1,
        Machinery = 2,
        StaticRoad = 3,
        Stopper = 4,
        None = 5,
        WithoutPlayer = 6,
        OnlyPlayer = 7,
    }
}
