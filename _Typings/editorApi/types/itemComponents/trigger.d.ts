// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

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
