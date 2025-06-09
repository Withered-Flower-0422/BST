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

    type Component<T extends keyof ComponentTypeMap> = {
        /**
         * `readonly`
         */
        readonly type: T
        getData: <K extends keyof ComponentTypeMap[T]["data"]>(path: K) => ComponentTypeMap[T]["data"][K]
        /**
         * @NOTE some properties may not be allowed to be set during game runtime
         */
        setData: (data: Mutable<{ [K in keyof ComponentTypeMap[T]["data"]]?: ComponentTypeMap[T]["data"][K] }>) => void
    } & ComponentTypeMap[T]["method"]
}
