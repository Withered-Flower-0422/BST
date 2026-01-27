// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "editor:type" {
    import { Float3 } from "basicData"

    enum PhysicsBodyType {
        Static = 0,
        Kinematic = 1,
        Rigid = 2,
    }

    enum PhysicsMaterial {
        Wooden = 0,
        Stone = 1,
        Paper = 2,
        Ice = 3,
        Steel = 4,
        Rubber = 5,
        Balloon = 6,
        Sticky = 7,
        Sponge = 8,
    }

    enum CustomFrictionMode {
        GeometricMean = 0,
        Minimum = 1,
        Maximum = 2,
        ArithmeticMean = 3,
    }

    enum CustomRestitutionMode {
        GeometricMean = 0,
        Minimum = 1,
        Maximum = 2,
        ArithmeticMean = 3,
    }

    type RigidBodyParams = {
        Mass: float
        LinearDrag: float
        AngularDrag: float
        GravityFactor: float
        Density: float
        BuoyancyVoxelSize: float
    }

    type InteractiveParams = {
        MoveForce: float
        TorqueForce: float
        Defence: float
        WetMassMultiplier: float
        Flammability: float
        WetDamage: float
        TempScaleMultiplier: float
        LowPowerForceMultiplier: float
        AbsorbElectricMultiplier: float
        Invincible: float
    }

    type ShowStatus = {
        Temperature: bool
        Wetness: bool
        Power: bool
        Scale: bool
    }

    type PhysicsObjectData = {
        ColliderType: ColliderType
        BoxColliderParams: BoxColliderParams
        SphereColliderParams: SphereColliderParams
        MeshColliderParams: MeshColliderParams
        PhysicsBodyType: PhysicsBodyType
        WeldCollider: bool
        RigidBodyParams: RigidBodyParams
        OverrideMassDistribution: bool
        CenterOfMass: Float3
        AutoGetPhysicsMaterial: bool
        PhysicsMaterial: PhysicsMaterial
        CustomPhysicsMaterial: bool
        CustomFrictionMode: CustomFrictionMode
        CustomFriction: float
        CustomRestitutionMode: CustomRestitutionMode
        CustomRestitution: float
        DisableCollisionAudio: bool
        DisableCollisionDamage: bool
        CollisionLayer: CollisionLayer
        /** @deprecated */
        Interactive: bool
        /** @deprecated */
        InteractiveParams: InteractiveParams
        CollisionEnterEvent: bool
        CollisionStayEvent: bool
        CollisionExitEvent: bool
        /** @deprecated */
        ShowStatus: ShowStatus
    }

    type PhysicsObjectMethod = {
        autoDetectBoxCollider: {
            /**
             * Automatically sets the size of the minimum bounding box based on the mesh in the `Renderer` component.
             * @returns
             */
            (): void
        }
    }
}
