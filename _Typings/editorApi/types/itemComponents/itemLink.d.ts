declare module "editor:type:itemLink" {
    type ItemLinkSettings = {
        [key: string | symbol]: never
    }

    export type ItemLinkData = {
        Link: string
        Settings: ItemLinkSettings
    }

    export type ItemLinkMethod = {
        replace: () => void
        saveMesh: () => void
    }
}
