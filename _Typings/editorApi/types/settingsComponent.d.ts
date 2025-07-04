// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "editor:type" {
    type SettingsComponentTypeMap = {
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

    type SettingsComponent<T extends keyof SettingsComponentTypeMap> = {
        /**
         * `readonly`
         */
        readonly type: T
        /**
         * @returns the data of the component as a JSON string
         * @NOTE
         * - not a JSON object, need to parse it before use
         * - because the returned data is a string, no type hint here,
         *   you may set specific type to it manually if you want type hint
         */
        getData: () => json
        /**
         * @param data the data of the component as a JSON string
         * @NOTE
         * - not a JSON object, need to stringify it before pass it in
         * - some components' data may not be settable
         */
        setData: (data: json) => void
    }
}
