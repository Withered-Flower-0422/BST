declare module "game:module:settings" {
    import { Cloud } from "game:type:cloud"
    import { Environment } from "game:type:environment"
    import { Fog } from "game:type:fog"
    import { Lighting } from "game:type:lighting"
    import { MapInfo } from "game:type:mapInfo"
    import { Sky } from "game:type:sky"
    import { Lens } from "game:type:lens"
    import { BackgroundMusic } from "game:type:backgroundMusic"
    import { Terrain } from "game:type:terrain"
    import { CollectionPrototype } from "game:type:collectionPrototype"
    import { AssetReference } from "game:type:assetReference"
    import { CustomBall } from "game:type:customBall"

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
    }

    type ComponentType = keyof ComponentTypeMap

    export namespace settings {
        let viewDistance: float
        let cameraOffset: Float3
        let gravity: Float3
        /**
         * `readonly`
         */
        const language: string
        /**
         * @returns `json` string of the saved data.
         * @NOTE not a JSON object, needs to be parsed before use.
         */
        const getData: <T extends ComponentType>(
            componentType: T,
            path: keyof ComponentTypeMap[T]
        ) => json
        /**
         * @NOTE unlike `getData`, `values` should be a JSON object, not a string.
         */
        const setData: <T extends ComponentType>(
            componentType: T,
            values: { [K in keyof ComponentTypeMap[T]]?: ComponentTypeMap[T][K] }
        ) => void
    }
}
