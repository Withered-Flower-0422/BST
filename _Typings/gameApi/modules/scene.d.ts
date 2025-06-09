declare module "game:module" {
    import { Item, RaycastResult, CollisionLayer } from "game:type"
    import { AssertGuid, AssertGuids } from "guid"
    import { Tuple } from "utils"

    namespace scene {
        const getAllItems: () => Item[]
        /**
         * @param {string} guid `string`: the guid string of the item to get
         */
        const getItem: <S extends string>(guid: AssertGuid<S>) => Item
        /**
         * @param guids `string[]`: the guid strings in an array of the items to get
         */
        const getItems: <S extends readonly string[]>(guids: AssertGuids<S>) => Tuple<Item, S["length"]>
        const getPlayer: () => Player
        /**
         * @param guid `string`: the guid string of the item to destroy
         */
        const destroyItem: <S extends string>(guid: AssertGuid<S>) => void
        /**
         * @param guids `string[]`: the guid strings in an array of the items to destroy
         */
        const destroyItems: <S extends readonly string[]>(guids: AssertGuids<S>) => void
        const createItem: (name: string) => Item
        const raycast: (start: Float3, end: Float3) => RaycastResult
        const raycastAll: (start: Float3, end: Float3) => RaycastResult[]
        const mouseRaycast: (maxDistance: float) => RaycastResult
        const mouseRaycastAll: (maxDistance: float) => RaycastResult[]
        const sphereCastAll: (center: Float3, radius: float) => { [key in CollisionLayer]: Item[] }
        const boxCastAll: (center: Float3, size: Float3, rotation: Quaternion) => { [key in CollisionLayer]: Item[] }
    }
}
