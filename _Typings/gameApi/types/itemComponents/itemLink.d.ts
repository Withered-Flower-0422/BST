// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:type" {
    import { Path } from "path"

    type ItemLinkData = {
        readonly Link: Path<"Items", false>
        /**
         * Different ItemLink types have different data structure.
         */
        [key: string]: any
    }

    type ItemLinkMethod = {
        /**
         * Gets the internal items of the linked item.
         * @returns The internal items of the linked item in an array.
         */
        getInternalItems: () => Item[]
    }
}
