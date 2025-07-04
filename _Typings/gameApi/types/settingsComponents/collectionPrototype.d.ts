// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

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
