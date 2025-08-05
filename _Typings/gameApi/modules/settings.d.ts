// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:module" {
    import {
        Cloud,
        Environment,
        Fog,
        Lighting,
        MapInfo,
        Sky,
        Lens,
        BackgroundMusic,
        Terrain,
        CollectionPrototype,
        AssetReference,
        CustomBall,
        Landscaping,
    } from "game:type"

    import { Mutable } from "utils"

    type ComponentTypeMap = {
        Cloud: Cloud
        Environment: Environment
        Fog: Fog
        Lighting: Lighting
        MapInfo: MapInfo
        Sky: Sky
        Lens: Lens
        BackgroundMusic: BackgroundMusic
        Terrain: Terrain
        CollectionPrototype: CollectionPrototype
        AssetReference: AssetReference
        CustomBall: CustomBall
        Landscaping: Landscaping
    }

    namespace settings {
        let viewDistance: float
        let cameraOffset: Float3
        let gravity: Float3
        /**
         * @readonly
         */
        const language: "English" | "简体中文" | "日本語" | "Spanish" | "繁體中文"

        /**
         * Gets the data of a component's property.
         * @param componentType - The type of the component.
         * @param path - The property path of the component.
         * @returns The data of the component's property.
         * @NOTE -
         * - Some components' data may not be accessible during game runtime.
         */
        const getData: <T extends keyof ComponentTypeMap, K extends keyof ComponentTypeMap[T]>(
            componentType: T,
            path: K
        ) => ComponentTypeMap[T][K]

        /**
         * Sets data to a component.
         * @param componentType - The type of the component.
         * @param values - The data to be set, in the form of `{ [path]: value }`.
         * @returns
         * @NOTE -
         * - Some components' data may not be settable during game runtime.
         */
        const setData: <T extends keyof ComponentTypeMap>(
            componentType: T,
            values: Mutable<{ [K in keyof ComponentTypeMap[T]]?: ComponentTypeMap[T][K] }>
        ) => void
    }
}
