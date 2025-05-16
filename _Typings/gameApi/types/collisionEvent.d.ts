declare module "game:type:collisionEvent" {
    import { Item } from "game:type:item"

    export type CollisionEvent = {
        eventType: "Enter" | "Exit" | "Stay"
        itemA: Item
        itemB: Item
        impulse: float
        contactPoint: Float3
        normal: Float3
    }
}
