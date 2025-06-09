declare module "editor:type" {
    type ItemLinkSettings = {
        [key: string | symbol]: never
    }

    type ItemLinkData = {
        Link: string
        Settings: ItemLinkSettings
    }

    type ItemLinkMethod = {
        replace: () => void
        saveMesh: () => void
    }
}
