declare module "game:type" {
    type ItemLinkData = {
        readonly Link: string
        /**
         * different ItemLink types have different data structure
         */
        [key: string]: any
    }

    type ItemLinkMethod = {
        getInternalItems: () => Item[]
    }
}
