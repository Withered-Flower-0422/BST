// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

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
