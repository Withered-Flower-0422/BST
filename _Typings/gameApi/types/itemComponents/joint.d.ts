// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:type" {
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
        readonly PhysicsObjectA: string
        readonly PhysicsObjectB: string
        readonly ConnectSelf: bool
        readonly EnableCollision: bool
        readonly JointType: JointType
        readonly AutoSetConnected: bool
        readonly PositionLocal: Float3
        readonly PositionInConnectedEntity: Float3
        readonly AxisLocal: Float3
        readonly AxisInConnectedEntity: Float3
        readonly PerpendicularAxisLocal: Float3
        readonly PerpendicularAxisInConnectedEntity: Float3
        readonly MinAngle: float
        readonly MaxAngle: float
        readonly MinDistance: float
        readonly MaxDistance: float
        readonly MinDistanceOnAxis: float
        readonly MaxDistanceOnAxis: float
        readonly OrientationLocal: Float3
        readonly OrientationInConnectedEntity: Float3
        readonly LockLinearAxes: Bool3
        readonly LockAngularAxes: Bool3
        readonly Constraints: JointConstraint[]
    }

    type JointMethod = {
        /**
         * Breaks the joint.
         * @returns
         */
        breakJoint: () => void
    }
}
