declare module "editor:type:collider" {
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

    export const enum ColliderType {
        Box = 0,
        Sphere = 1,
        Mesh = 2,
    }

    export type BoxColliderParams = {
        Center: Float3
        Size: Float3
        BevelRadius: float
    }

    export type SphereColliderParams = {
        Center: Float3
        Radius: float
    }

    export type MeshColliderParams = {
        AutoGetMesh: bool
        Mesh: string
        Convex: bool
    }
}
