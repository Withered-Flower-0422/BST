declare module "editor:type" {
    const enum CollisionLayer {
        Player = 0,
        RigidBody = 1,
        Machinery = 2,
        StaticRoad = 3,
        Stopper = 4,
        None = 5,
        WithoutPlayer = 6,
        OnlyPlayer = 7,
    }

    const enum ColliderType {
        Box = 0,
        Sphere = 1,
        Mesh = 2,
    }

    type BoxColliderParams = {
        Center: Float3
        Size: Float3
        BevelRadius: float
    }

    type SphereColliderParams = {
        Center: Float3
        Radius: float
    }

    type MeshColliderParams = {
        AutoGetMesh: bool
        Mesh: string
        Convex: bool
    }
}
