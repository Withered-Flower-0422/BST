declare module "game:module" {
    import {
        Cloud, Environment, Fog, Lighting, MapInfo, Sky, Lens, BackgroundMusic,
        Terrain, CollectionPrototype, AssetReference, CustomBall, Landscaping,
    } from "game:type"

    type ComponentTypeMap = {
        Cloud: Cloud,
        Environment: Environment,
        Fog: Fog,
        Lighting: Lighting,
        MapInfo: MapInfo,
        Sky: Sky,
        Lens: Lens,
        BackgroundMusic: BackgroundMusic,
        Terrain: Terrain,
        CollectionPrototype: CollectionPrototype,
        AssetReference: AssetReference,
        CustomBall: CustomBall,
        Landscaping: Landscaping,
    }

    type ComponentType = keyof ComponentTypeMap

    namespace settings {
        let viewDistance: float
        let cameraOffset: Float3
        let gravity: Float3
        /**
         * `readonly`
         */
        const language: string
        /**
         * @returns `json` string of the saved data
         * @NOTE
         * - not a JSON object, needs to be parsed before use
         * - some components' data may not be accessible during game runtime
         */
        const getData: <T extends ComponentType>(
            componentType: T,
            path: keyof ComponentTypeMap[T]
        ) => json
        /**
         * @NOTE
         * - unlike `getData`, `values` should be a JSON object, not a string
         * - some components' data may not be settable during game runtime
         */
        const setData: <T extends ComponentType>(
            componentType: T,
            values: { [K in keyof ComponentTypeMap[T]]?: ComponentTypeMap[T][K] }
        ) => void
    }
}
