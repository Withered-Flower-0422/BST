// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:type" {
    import { Path } from "path"
    import { Float3 } from "basicData"

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
        readonly "MeshColliderParams/Mesh": Path<"Meshes">
        readonly "MeshColliderParams/AutoGetMesh": bool
        readonly "MeshColliderParams/Convex": bool
    }

    type TriggerMethod = {
        [key: PropertyKey]: never
    }
}
