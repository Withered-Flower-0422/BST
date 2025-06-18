declare module "game:type" {
    type RaycastResult = {
        /**
         * @description colliding item
         */
        item: Item | Player
        /**
         * @description the proportion of the distance between the collision point and the starting point to the total distance
         * @range `0 ~ 1`
         */
        fraction: float
        /**
         * @description the collision point in world space
         */
        position: Float3
        /**
         * @description the collision normal in world space
         */
        normal: Float3
    }
}
