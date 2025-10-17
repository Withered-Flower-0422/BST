// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:type" {
    import { Float3 } from "basicData"

    type RaycastResult = {
        /**
         * The colliding item.
         */
        item: Item
        /**
         * The proportion of the distance between the collision point and the starting point to the total distance.
         * @range `0 ~ 1`
         */
        fraction: float
        /**
         * The collision point in global coordinates.
         */
        position: Float3
        /**
         * The collision normal in global coordinates.
         */
        normal: Float3
    }
}
