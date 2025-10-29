// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:type" {
    import { Mutable } from "utils"

    type ComponentTypeMap = {
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

    type Component<T extends keyof ComponentTypeMap = keyof ComponentTypeMap> = {
        /**
         * @readonly
         */
        readonly type: T

        /**
         * Gets the specified data of the component.
         * @param path - The path of the property to get.
         * @returns The value of the property.
         */
        readonly getData: <K extends keyof ComponentTypeMap[T]["data"]>(path: K) => ComponentTypeMap[T]["data"][K]

        /**
         * Sets data to the component.
         * @param data - The data to set. In the form of `{ [path]: value }`.
         * @returns
         * @NOTE -
         * - Some properties may not be allowed to be set during game runtime.
         */
        readonly setData: (
            data: Mutable<{ [K in keyof ComponentTypeMap[T]["data"]]?: ComponentTypeMap[T]["data"][K] }>
        ) => void
    } & Readonly<ComponentTypeMap[T]["method"]>
}
