declare module "editor:type" {
    type TriggerData = {
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

    type TriggerMethod = {
        autoDetectBoxTrigger: () => void
    }
}
