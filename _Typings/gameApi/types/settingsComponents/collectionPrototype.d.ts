declare module "game:type" {
    const enum CollectionResetType {
        OnLifeStart = 0,
        OnRestart = 1,
    }

    type CollectionPrototypeData = {
        CollectionResetType: CollectionResetType
        CollectionName: string
        Priority: int
        Texture: string
        AlwaysShow: bool
        ShowMaxCount: bool
    }

    type CollectionPrototype = {
        readonly Prototypes: CollectionPrototypeData[]
    }
}
