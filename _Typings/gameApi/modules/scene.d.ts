// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:module" {
    import { Item, Player, RaycastResult, CollisionLayer } from "game:type"
    import { AssertGuid, AssertGuids } from "guid"
    import { AssertNonNeg } from "utils"
    import { Float3, Quaternion } from "basicData"

    namespace scene {
        const getAllItems: {
            /**
             * Gets all the items in the scene.
             * @returns An array of all the items in the scene.
             */
            (): Item[]
        }

        const getItem: {
            /**
             * Gets the item by its guid.
             * @param guid - The guid string of the item to get.
             * @returns The item with the given guid, or `null` if the item does not exist.
             */
            <S extends guid>(guid: AssertGuid<S>): Item | null
        }

        const getItems: {
            /**
             * Gets the items by their guids.
             * @param guids - The guid strings in an array of the items to get.
             * @returns An array of the items (or `null` if the item does not exist) with the given guids.
             */
            <const S extends readonly guid[]>(
                guids: S & AssertGuids<S>,
            ): { [P in keyof S]: Item | null }
        }

        const getPlayer: {
            /**
             * Gets the player. If the player has not been created, it will return `null`.
             * @returns The player or `null` if the player has not been created.
             */
            (): Player<true> | null
        }

        const destroyItem: {
            /**
             * Destroys the item by its guid.
             * @param guid - The guid string of the item to destroy.
             * @returns
             */
            <S extends guid>(guid: AssertGuid<S>): void
        }

        const destroyItems: {
            /**
             * Destroys the items by their guids.
             * @param guids - The guid strings in an array of the items to destroy.
             * @returns
             */
            <const S extends readonly guid[]>(guids: S & AssertGuids<S>): void
        }

        const createItem: {
            /**
             * Creates an item based on a template.
             * @param templateName - The name of the template to create the item from.
             * @param pos - The position of the item.
             * @param rot - The rotation of the item.
             * @param scl - The scale of the item.
             * @returns The created item, or `null` if the template does not exist.
             */
            (
                templateName: string,
                pos: Float3,
                rot: Float3,
                scl: Float3,
            ): Item | null
        }

        const raycast: {
            /**
             * Casts a ray from the start position to the end position and returns the first item or player it hits.
             * @param start - The start position of the ray.
             * @param end - The end position of the ray.
             * @returns The first item or player it hits or `null` if it hits nothing.
             */
            (start: Float3, end: Float3): RaycastResult | null
        }

        const raycastAll: {
            /**
             * Casts a ray from the start position to the end position and returns all the items or player it hits.
             * @param start - The start position of the ray.
             * @param end - The end position of the ray.
             * @returns An array of all the items or player it hits.
             */
            (start: Float3, end: Float3): RaycastResult[]
        }

        const mouseRaycast: {
            /**
             * Casts a ray from the mouse position with the given maximum distance and returns the first item or player it hits.
             * @param maxDistance - The maximum distance of the ray.
             * @returns The first item or player it hits or `null` if it hits nothing.
             */
            <T extends float>(
                maxDistance: AssertNonNeg<T>,
            ): RaycastResult | null
        }

        const mouseRaycastAll: {
            /**
             * Casts a ray from the mouse position with the given maximum distance and returns all the items or player it hits.
             * @param maxDistance - The maximum distance of the ray.
             * @returns An array of all the items or player it hits.
             */
            <T extends float>(maxDistance: AssertNonNeg<T>): RaycastResult[]
        }

        const sphereCastAll: {
            /**
             * Casts a sphere from the center position with the given radius and returns all the items or player it hits by their collision layers.
             * @param center - The center position of the sphere.
             * @param radius - The radius of the sphere.
             * @returns An object with the items or player it hits by their collision layers.
             */
            <T extends float>(
                center: Float3,
                radius: AssertNonNeg<T>,
            ): {
                [key in keyof typeof CollisionLayer as key extends string
                    ? key
                    : never]?: [Item, ...Item[]]
            }
        }

        const boxCastAll: {
            /**
             * Casts a box from the center position with the given size and rotation and returns all the items or player it hits by their collision layers.
             * @param center - The center position of the box.
             * @param size - The size of the box.
             * @param rotation - The rotation of the box.
             * @returns An object with the items or player it hits by their collision layers.
             */
            (
                center: Float3,
                size: Float3,
                rotation: Quaternion,
            ): {
                [key in keyof typeof CollisionLayer as key extends string
                    ? key
                    : never]?: [Item, ...Item[]]
            }
        }
    }
}
