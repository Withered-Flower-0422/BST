declare module "editor:type:itemComponent" {
    import { SettingsData, SettingsMethod } from "editor:type:settings"
    import { RendererData, RendererMethod } from "editor:type:renderer"
    import { RoadGeneratorData, RoadGeneratorMethod } from "editor:type:roadGenerator"
    import { PhysicsObjectData, PhysicsObjectMethod } from "editor:type:physicsObject"
    import { ItemLinkData, ItemLinkMethod } from "editor:type:itemLink"
    import { TriggerData, TriggerMethod } from "editor:type:trigger"
    import { JointData, JointMethod } from "editor:type:joint"
    import { WayPointData, WayPointMethod } from "editor:type:wayPoint"
    import { WayPathData, WayPathMethod } from "editor:type:wayPath"
    import { CollectionData, CollectionMethod } from "editor:type:collection"
    import { LightData, LightMethod } from "editor:type:light"
    import { ParticleEmitterData, ParticleEmitterMethod } from "editor:type:particleEmitter"
    import { AudioPlayerData, AudioPlayerMethod } from "editor:type:audioPlayer"
    import { DecalData, DecalMethod } from "editor:type:decal"
    import { TerrainStampData, TerrainStampMethod } from "editor:type:terrainStamp"
    import { CameraData, CameraMethod } from "editor:type:camera"
    import { ExecutorData, ExecutorMethod } from "editor:type:executor"

    type Common<T extends keyof ItemComponentTypeMap> = {
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
        copyData: T extends "Settings" ? never : () => void
        pasteData: T extends "Settings" ? never : () => void
    }

    export type ItemComponentTypeMap = {
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

    export type ItemComponent<T extends keyof ItemComponentTypeMap> = Common<T> & ItemComponentTypeMap[T]["method"]
}
