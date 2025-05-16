declare module "game:type" {
    type TriggerData = {
        "TriggerPlayerLayer": bool
        "TriggerRigidBodyLayer": bool
        "TriggerMachineryLayer": bool
        "TriggerStaticRoadLayer": bool
        "TriggerStopperLayer": bool
        "TriggerWithoutPlayerLayer": bool
        "TriggerOnlyPlayerLayer": bool
        "TriggerNoneLayer": bool
        "TriggerEnterEvent": bool
        "TriggerStayEvent": bool
        "TriggerExitEvent": bool
        "ColliderType": ColliderType
        "BoxColliderParams/Center": Float3
        "BoxColliderParams/Size": Float3
        "BoxColliderParams/BevelRadius": float
        "SphereColliderParams/Center": Float3
        "SphereColliderParams/Radius": float
        "MeshColliderParams/Mesh": string
        "MeshColliderParams/AutoGetMesh": bool
        "MeshColliderParams/Convex": bool
    }

    type TriggerMethod = {
        [key: string | symbol]: never
    }
}
