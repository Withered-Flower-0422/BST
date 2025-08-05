// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:type" {
    import { AssertNonNeg } from "utils"

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
        /**
         * Gets the linear velocity of the physics object.
         * @returns The linear velocity of the physics object.
         */
        getLinearVelocity: () => Float3

        /**
         * Gets the angular velocity of the physics object.
         * @returns The angular velocity of the physics object.
         */
        getAngularVelocity: () => Float3

        /**
         * Sets both linear and angular velocity of the physics object.
         * @param linear - The linear velocity to set.
         * @param angular - The angular velocity to set.
         * @returns
         */
        setVelocity: (linear: Float3, angular: Float3) => void

        /**
         * Sets the linear velocity of the physics object without affecting the angular velocity.
         * @param velocity - The linear velocity to set.
         * @returns
         */
        setLinearVelocity: (velocity: Float3) => void

        /**
         * Sets the angular velocity of the physics object without affecting the linear velocity.
         * @param velocity - The angular velocity to set.
         * @returns
         */
        setAngularVelocity: (velocity: Float3) => void

        /**
         * Destroys the physics object.
         * @returns
         * @NOTE -
         * - This method only destroys the physics object. It does not remove the item from the scene,
         * neither the `Renderer` component. So the item will still be rendered.
         * - No destroy vfx will be played. Manually call `levelManager.playVfx()` if needed.
         *
         */
        destroyPhysicsObject: () => void

        /**
         * Checks if the physics object is destroyed.
         * @returns Whether the physics object is destroyed or not.
         */
        isDestroyed: () => bool

        /**
         * Gets the mass of the physics object.
         * @returns The mass of the physics object.
         */
        getMass: () => float

        /**
         * Sets the mass of the physics object.
         * @param mass - The mass to set.
         * @returns
         */
        setMass: <T extends float>(mass: AssertNonNeg<T>) => void
    }
}
