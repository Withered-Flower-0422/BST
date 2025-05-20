declare module "game:module" {
    import { Item, RaycastResult, CollisionLayer } from "game:type"
    import { AssertGuid, AssertGuids } from "guid"

    namespace scene {
        const getAllItems: () => Item[]
        const getItem: <S extends string>(guid: AssertGuid<S>) => Item
        const getItems: <S extends readonly string[]>(guids: AssertGuids<S>) => Item[]
        const getPlayer: () => Player
        const destroyItem: <S extends string>(guid: AssertGuid<S>) => void
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
