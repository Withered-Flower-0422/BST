// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "editor:type" {
    type ItemComponentTypeMap = {
        Settings: { data: SettingsData; method: SettingsMethod }
        Renderer: { data: RendererData; method: RendererMethod }
        RoadGenerator: { data: RoadGeneratorData; method: RoadGeneratorMethod }
        PhysicsObject: { data: PhysicsObjectData; method: PhysicsObjectMethod }
        ItemLink: { data: ItemLinkData; method: ItemLinkMethod }
        Trigger: { data: TriggerData; method: TriggerMethod }
        Joint: { data: JointData; method: JointMethod }
        WayPoint: { data: WayPointData; method: WayPointMethod }
        WayPath: { data: WayPathData; method: WayPathMethod }
        Collection: { data: CollectionData; method: CollectionMethod }
        Light: { data: LightData; method: LightMethod }
        ParticleEmitter: { data: ParticleEmitterData; method: ParticleEmitterMethod }
        AudioPlayer: { data: AudioPlayerData; method: AudioPlayerMethod }
        Decal: { data: DecalData; method: DecalMethod }
        TerrainStamp: { data: TerrainStampData; method: TerrainStampMethod }
        Camera: { data: CameraData; method: CameraMethod }
        Executor: { data: ExecutorData; method: ExecutorMethod }
    }

    type ItemComponent<T extends keyof ItemComponentTypeMap> = {
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
         *   you may set specified type to it manually if you want type hint.
         */
        getData: () => json

        /**
         * Sets data to the component.
         * @param data - the data of the component to set, as a JSON string.
         * @returns
         * @NOTE -
         * - The data to set is **not** a JSON object, needs to stringify it before pass it in.
         */
        setData: (data: json) => void
    } & ItemComponentTypeMap[T]["method"] &
        (T extends "Settings"
            ? {}
            : {
                  /**
                   * Copies all data from this component to the editor's internal clipboard.
                   * @returns
                   */
                  copyData: () => void

                  /**
                   * Pastes component data from the editor's internal clipboard to this component.
                   * @returns
                   */
                  pasteData: () => void
              })
}
