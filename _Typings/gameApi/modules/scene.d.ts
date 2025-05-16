declare module "game:module" {
    import { Item, RaycastResult, CollisionLayer } from "game:type"

    namespace scene {
        const getAllItems: () => Item[]
        const getItem: (guid: string) => Item
        const getItems: (guids: string[]) => Item[]
        const getPlayer: () => Player
        const destroyItem: (guid: string) => void
        const destroyItems: (guids: string[]) => void
        const createItem: (name: string) => Item
        const raycast: (start: Float3, end: Float3) => RaycastResult
        const raycastAll: (start: Float3, end: Float3) => RaycastResult[]
        const mouseRaycast: (maxDistance: float) => RaycastResult
        const mouseRaycastAll: (maxDistance: float) => RaycastResult[]
        const sphereCastAll: (center: Float3, radius: float) => { [key in CollisionLayer]: Item[] }
        const boxCastAll: (center: Float3, size: Float3, rotation: Quaternion) => { [key in CollisionLayer]: Item[] }
    }
}
