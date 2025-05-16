declare module "editor:type:trigger" {
    import { ColliderType, BoxColliderParams, SphereColliderParams, MeshColliderParams } from "editor:type:collider"

    export type TriggerData = {
        TriggerPlayerLayer: bool
        TriggerRigidBodyLayer: bool
        TriggerMachineryLayer: bool
        TriggerStaticRoadLayer: bool
        TriggerStopperLayer: bool
        TriggerWithoutPlayerLayer: bool
        TriggerOnlyPlayerLayer: bool
        TriggerNoneLayer: bool
        TriggerEnterEvent: bool
        TriggerStayEvent: bool
        TriggerExitEvent: bool
        ColliderType: ColliderType
        BoxColliderParams: BoxColliderParams
        SphereColliderParams: SphereColliderParams
        MeshColliderParams: MeshColliderParams
    }

    export type TriggerMethod = {
        autoDetectBoxTrigger: () => void
    }
}
