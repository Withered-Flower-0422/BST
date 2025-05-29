declare module "game:type" {
    type ItemLinkData = {
        readonly "Link": string
        /**
         * different itemlink types have different data structure
         */
        [key: string]: any
    }

    type ItemLinkMethod = {
        getInternalItems: () => Item[]
    }
}
