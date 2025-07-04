// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:type" {
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

    type CollisionEvent = {
        eventType: "Enter" | "Exit" | "Stay"
        itemA: Item | Player
        itemB: Item | Player
        impulse: float
        contactPoint: Float3
        normal: Float3
    }
}
