declare module "game:type" {
    type ItemLinkData = {
        "Link": string
        /**
         * @NOTE only for `Volcano` ItemLink
         */
        "Settings/DestroyOnContact": bool
    }

    type ItemLinkMethod = {
        getInternalItems: () => Item[]
    }
}
