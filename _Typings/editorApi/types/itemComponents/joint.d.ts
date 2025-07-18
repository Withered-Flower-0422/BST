// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "editor:type" {
    enum JointType {
        BallAndSocket = 0,
        Fixed = 1,
        Hinge = 2,
        LimitedDistance = 3,
        LimitedHinge = 4,
        Prismatic = 5,
        LimitDOF = 6,
        Custom = 7,
    }

    enum ConstraintType {
        Linear = 0,
        Angular = 1,
    }

    type JointConstraint = {
        ConstraintType: ConstraintType
        ConstrainedAxis: Bool3
        MinMax: Float2
        EnableSpring: bool
        SpringFrequency: float
        SpringDamping: float
    }

    type JointData = {
        PhysicsObjectA: string
        PhysicsObjectB: string
        ConnectSelf: bool
        EnableCollision: bool
        JointType: JointType
        AutoSetConnected: bool
        PositionLocal: Float3
        PositionInConnectedEntity: Float3
        AxisLocal: Float3
        AxisInConnectedEntity: Float3
        PerpendicularAxisLocal: Float3
        PerpendicularAxisInConnectedEntity: Float3
        MinAngle: float
        MaxAngle: float
        MinDistance: float
        MaxDistance: float
        MinDistanceOnAxis: float
        MaxDistanceOnAxis: float
        OrientationLocal: Float3
        OrientationInConnectedEntity: Float3
        LockLinearAxes: Bool3
        LockAngularAxes: Bool3
        Constraints: Partial<JointConstraint>[]
    }

    type JointMethod = {
        [key: string | symbol]: never
    }
}
