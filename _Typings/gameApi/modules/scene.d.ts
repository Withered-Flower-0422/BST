// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:module" {
    import { Item, RaycastResult, CollisionLayer } from "game:type"
    import { AssertGuid, AssertGuids } from "guid"
    import { Tuple } from "utils"

    namespace scene {
        const getAllItems: () => Item[]
        /**
         * @param guid `string`: the guid string of the item to get
         */
        const getItem: <S extends string>(guid: AssertGuid<S>) => Item
        /**
         * @param guids `string[]`: the guid strings in an array of the items to get
         */
        const getItems: <const S extends readonly string[]>(guids: AssertGuids<S>) => Tuple<Item, S["length"]>
        const getPlayer: () => Player
        /**
         * @param guid `string`: the guid string of the item to destroy
         */
        const destroyItem: <S extends string>(guid: AssertGuid<S>) => void
        /**
         * @param guids `string[]`: the guid strings in an array of the items to destroy
         */
        const destroyItems: <const S extends readonly string[]>(guids: AssertGuids<S>) => void
        const createItem: (templateName: string, pos: Float3, rot: Float3, scl: Float3) => Item
        const raycast: (start: Float3, end: Float3) => RaycastResult | null
        const raycastAll: (start: Float3, end: Float3) => RaycastResult[]
        const mouseRaycast: (maxDistance: float) => RaycastResult | null
        const mouseRaycastAll: (maxDistance: float) => RaycastResult[]
        const sphereCastAll: (
            center: Float3,
            radius: float
        ) => { [key in keyof typeof CollisionLayer as key extends string ? key : never]?: (Item | Player)[] }
        const boxCastAll: (
            center: Float3,
            size: Float3,
            rotation: Quaternion
        ) => { [key in keyof typeof CollisionLayer as key extends string ? key : never]?: (Item | Player)[] }
    }
}
