// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "editor:type" {
    import { Path } from "path"

    type ItemLinkSettings = {
        [key: PropertyKey]: never
    }

    type ItemLinkData = {
        Link: Path<"Items", false>
        Settings: ItemLinkSettings
    }

    type ItemLinkMethod = {
        /**
         * Replaces the current item with the linked item.
         * @returns
         */
        replace: () => void

        /**
         * Saves all meshes within the linked item to `Assets/Meshes/Default`.
         * @returns
         */
        saveMesh: () => void
    }
}
