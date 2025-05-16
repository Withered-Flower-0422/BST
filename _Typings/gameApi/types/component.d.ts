declare module "game:type:component" {
    import { SettingsData, SettingsMethod } from "game:type:settings"
    import { RendererData, RendererMethod } from "game:type:renderer"
    import { RoadGeneratorData, RoadGeneratorMethod } from "game:type:roadGenerator"
    import { PhysicsObjectData, PhysicsObjectMethod } from "game:type:physicsObject"
    import { ItemLinkData, ItemLinkMethod } from "game:type:itemLink"
    import { TriggerData, TriggerMethod } from "game:type:trigger"
    import { JointData, JointMethod } from "game:type:joint"
    import { WayPointData, WayPointMethod } from "game:type:wayPoint"
    import { WayPathData, WayPathMethod } from "game:type:wayPath"
    import { CollectionData, CollectionMethod } from "game:type:collection"
    import { LightData, LightMethod } from "game:type:light"
    import { ParticleEmitterData, ParticleEmitterMethod } from "game:type:particleEmitter"
    import { AudioPlayerData, AudioPlayerMethod } from "game:type:audioPlayer"
    import { DecalData, DecalMethod } from "game:type:decal"
    import { TerrainStampData, TerrainStampMethod } from "game:type:terrainStamp"
    import { CameraData, CameraMethod } from "game:type:camera"
    import { ExecutorData, ExecutorMethod } from "game:type:executor"

    type Common<T extends keyof ComponentTypeMap> = {
        /**
         * `readonly`
         */
        get type(): T
        getData: <K extends keyof ComponentTypeMap[T]["data"]>(path: K) => ComponentTypeMap[T]["data"][K]
        /**
         * @NOTE some properties may not be allowed to be set during game runtime
         */
        setData: (
            data: { [K in keyof ComponentTypeMap[T]["data"]]?: ComponentTypeMap[T]["data"][K] }
        ) => void
    }

    export type ComponentTypeMap = {
        Settings: { data: SettingsData, method: SettingsMethod }
        Renderer: { data: RendererData, method: RendererMethod }
        RoadGenerator: { data: RoadGeneratorData, method: RoadGeneratorMethod }
        PhysicsObject: { data: PhysicsObjectData, method: PhysicsObjectMethod }
        ItemLink: { data: ItemLinkData, method: ItemLinkMethod }
        Trigger: { data: TriggerData, method: TriggerMethod }
        Joint: { data: JointData, method: JointMethod }
        WayPoint: { data: WayPointData, method: WayPointMethod }
        WayPath: { data: WayPathData, method: WayPathMethod }
        Collection: { data: CollectionData, method: CollectionMethod }
        Light: { data: LightData, method: LightMethod }
        ParticleEmitter: { data: ParticleEmitterData, method: ParticleEmitterMethod }
        AudioPlayer: { data: AudioPlayerData, method: AudioPlayerMethod }
        Decal: { data: DecalData, method: DecalMethod }
        TerrainStamp: { data: TerrainStampData, method: TerrainStampMethod }
        Camera: { data: CameraData, method: CameraMethod }
        Executor: { data: ExecutorData, method: ExecutorMethod }
    }

    export type Component<T extends keyof ComponentTypeMap> = Common<T> & ComponentTypeMap[T]["method"]
}
