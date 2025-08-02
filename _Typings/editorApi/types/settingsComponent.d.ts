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
         * @readonly
         */
        readonly type: T

        /**
         * Gets the data of the component as a JSON string.
         * @returns The data of the component as a JSON string.
         * @NOTE -
         * - The returned data is **not** a JSON object, needs to parse it before use.
         * - Because the returned data is a string, no type hint here,
         *   you may set specified type to it manually if you want type hint
         */
        getData: () => json

        /**
         * Sets data to the component.
         * @param data - The data of the component to set, as a JSON string.
         * @returns
         * @NOTE -
         * - The data to set is **not** a JSON object, needs to stringify it before pass it in.
         */
        setData: (data: json) => void
    }
}
