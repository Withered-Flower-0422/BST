declare module "editor:type:settingsComponent" {
    import { Cloud } from "editor:type:cloud"
    import { Environment } from "editor:type:environment"
    import { Fog } from "editor:type:fog"
    import { Lighting } from "editor:type:lighting"
    import { MapInfo } from "editor:type:mapInfo"
    import { Sky } from "editor:type:sky"
    import { Lens } from "editor:type:lens"
    import { BackgroundMusic } from "editor:type:backgroundMusic"
    import { Terrain } from "editor:type:terrain"
    import { CollectionPrototype } from "editor:type:collectionPrototype"
    import { AssetReference } from "editor:type:assetReference"
    import { CustomBall } from "editor:type:customBall"

    export type SettingsComponentTypeMap = {
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

    export type SettingsComponent<T extends keyof SettingsComponentTypeMap> = {
        /**
         * `readonly`
         */
        get type(): T
        /**
         * 
         * @returns The data of the component as a JSON string.
         * @NOTE 
         * - not a JSON object, need to parse it before use.
         * - because the returned data is a string, no type hint here, 
         *   you may set specific type to it manually if you want type hint.
         */
        getData: () => json
        /**
         * 
         * @param data The data of the component as a JSON string.
         * @NOTE not a JSON object, need to stringify it before pass it in.
         */
        setData: (data: json) => void
    }
}
