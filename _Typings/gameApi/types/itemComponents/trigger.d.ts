declare module "game:type" {
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
        readonly ColliderType: ColliderType
        readonly "BoxColliderParams/Center": Float3
        readonly "BoxColliderParams/Size": Float3
        readonly "BoxColliderParams/BevelRadius": float
        readonly "SphereColliderParams/Center": Float3
        readonly "SphereColliderParams/Radius": float
        readonly "MeshColliderParams/Mesh": string
        readonly "MeshColliderParams/AutoGetMesh": bool
        readonly "MeshColliderParams/Convex": bool
    }

    type TriggerMethod = {
        [key: string | symbol]: never
    }
}
