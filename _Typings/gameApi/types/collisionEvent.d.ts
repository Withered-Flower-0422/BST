declare module "game:type" {
    type CollisionEvent = {
        eventType: "Enter" | "Exit" | "Stay"
        itemA: Item
        itemB: Item
        impulse: float
        contactPoint: Float3
        normal: Float3
    }
}
