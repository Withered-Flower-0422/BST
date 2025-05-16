declare module "game:type:itemLink" {
    import { Item } from "game:type:item"

    export type ItemLinkData = {
        "Link": string
        /**
         * @NOTE only for Volcano ItemLink
         */
        "Settings/DestroyOnContact": bool
    }

    export type ItemLinkMethod = {
        getInternalItems: () => Item[]
    }
}
