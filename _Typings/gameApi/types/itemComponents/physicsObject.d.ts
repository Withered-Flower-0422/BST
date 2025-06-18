declare module "game:type" {
    const enum PhysicsBodyType {
        Static = 0,
        Kinematic = 1,
        Rigid = 2,
    }

    const enum PhysicsMaterial {
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

    const enum CustomFrictionMode {
        GeometricMean = 0,
        Minimum = 1,
        Maximum = 2,
        ArithmeticMean = 3,
    }

    const enum CustomRestitutionMode {
        GeometricMean = 0,
        Minimum = 1,
        Maximum = 2,
        ArithmeticMean = 3,
    }

    type PhysicsObjectData = {
        ColliderType: ColliderType
        "BoxColliderParams/Center": Float3
        "BoxColliderParams/Size": Float3
        "BoxColliderParams/BevelRadius": float
        "SphereColliderParams/Center": Float3
        "SphereColliderParams/Radius": float
        "MeshColliderParams/Mesh": string
        "MeshColliderParams/AutoGetMesh": bool
        "MeshColliderParams/Convex": bool
        readonly PhysicsBodyType: PhysicsBodyType
        readonly WeldCollider: bool
        "RigidBodyParams/Mass": float
        "RigidBodyParams/LinearDrag": float
        "RigidBodyParams/AngularDrag": float
        "RigidBodyParams/GravityFactor": float
        "RigidBodyParams/Density": float
        readonly "RigidBodyParams/BuoyancyVoxelSize": float
        readonly OverrideMassDistribution: bool
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
        readonly Interactive: bool
        "InteractiveParams/MoveForce": float
        "InteractiveParams/TorqueForce": float
        "InteractiveParams/Defence": float
        "InteractiveParams/WetMassMultiplier": float
        "InteractiveParams/Flammability": float
        "InteractiveParams/WetDamage": float
        "InteractiveParams/TempScaleMultiplier": float
        "InteractiveParams/LowPowerForceMultiplier": float
        "InteractiveParams/AbsorbElectricMultiplier": float
        "InteractiveParams/Invincible": float
        CollisionEnterEvent: bool
        CollisionStayEvent: bool
        CollisionExitEvent: bool
    }

    type PhysicsObjectMethod = {
        getLinearVelocity: () => Float3
        getAngularVelocity: () => Float3
        setVelocity: (linear: Float3, angular: Float3) => void
        setLinearVelocity: (velocity: Float3) => void
        setAngularVelocity: (velocity: Float3) => void
        destroyPhysicsObject: () => void
        isDestroyed: () => bool
        getMass: () => float
        setMass: (mass: float) => void
    }
}
