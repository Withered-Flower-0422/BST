// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "editor:type" {
    import { NonNegIntRange } from "utils"
    import { Path } from "path"
    import { Float2, Float3 } from "basicData"

    enum GeneratorAlgorithm {
        Road = 0,
        Corner = 1,
        WoodBoard = 2,
        Rail = 3,
        Tube = 4,
        CustomVertices = 5,
        CustomScript = 6,
    }

    type Vertex = {
        Position: Float2
        UV: float
    }

    type VerticesArray = {
        Vertices: Vertex[]
    }

    type Road = {
        Length: float
        Width: float
        EndWidth: float
        Height: float
        Offset: float
        Thickness: float
        /**
         * @range `1 ~ 256`
         */
        Segments: NonNegIntRange<1, 256>
        Bend: Float3
        CreateCap: bool
        AccurateUVLength: bool
        RotateMainUV: bool
        MainUVOffset: Float2
        SideUVOffset: float
        Concave: float
        EndConcave: float
    }

    type WoodenBoard = {
        Length: float
        Width: float
        Height: float
        Offset: float
        Thickness: float
        /**
         * @range `1 ~ 256`
         */
        Segments: NonNegIntRange<1, 256>
        Bend: Float3
        CreateCap: bool
        AccurateUVLength: bool
        RotateMainUV: bool
        MainUVOffset: Float2
        SideUVOffset: float
    }

    type Rail = {
        Length: float
        Offsets: Float2[]
        Height: float
        Offset: float
        /**
         * @range `1 ~ 256`
         */
        Segments: NonNegIntRange<1, 256>
        /**
         * @range `1 ~ 128`
         */
        RotationSegments: NonNegIntRange<1, 128>
        Bend: Float3
        CreateCap: bool
        AccurateUVLength: bool
        MainUVOffset: Float2
        Radius: float
    }

    type Tube = {
        Length: float
        Height: float
        Offset: float
        Radius: float
        EndRadius: float
        Slice: Float2
        Thickness: float
        /**
         * @range `1 ~ 256`
         */
        Segments: NonNegIntRange<1, 256>
        /**
         * @range `1 ~ 128`
         */
        RotationSegments: NonNegIntRange<1, 128>
        Bend: Float3
        CreateCap: bool
        AccurateUVLength: bool
        MainUVOffset: Float2
    }

    type Corner = {
        Corner: CornerSettings
        Size: float
        Thickness: float
        CreateCap: bool
        RotateMainUV: bool
        MainUVOffset: Float2
        Concave: float
    }

    type CornerSettings = {
        P0: bool
        P1: bool
        P2: bool
        P3: bool
        L0: bool
        L1: bool
        L2: bool
        L3: bool
    }

    type CustomVertices = {
        VerticesArray: VerticesArray[]
        Length: float
        Height: float
        /**
         * @range `1 ~ 256`
         */
        Segments: NonNegIntRange<1, 256>
        Bend: Float3
        AccurateUVLength: bool
        RotateMainUV: bool
        MainUVOffset: Float2
    }

    type CustomScript = {
        ScriptPath: Path<"Scripts">
    }

    type RoadGeneratorData = {
        GeneratorAlgorithm: GeneratorAlgorithm
        Road: Road
        WoodenBoard: WoodenBoard
        Rail: Rail
        Tube: Tube
        Corner: Corner
        CustomVertices: CustomVertices
        CustomScript: CustomScript
    }

    type RoadGeneratorMethod = {
        clone: {
            /**
             * Creates an identical road at the end of the current road and automatically sets its rotation and other properties.
             * @returns
             */
            (): void
        }

        generate: {
            /**
             * Forcibly refreshes the current road generator.
             * For a `Custom Script` road generator, you can call this method to refresh the generated result after modifying the script.
             * @returns
             */
            (): void
        }

        saveMesh: {
            /**
             * Saves the road as mesh to `Assets/Meshes/Default`.
             * @returns
             */
            (): void
        }

        createWayPoint: {
            /**
             * Creates `Way Point` at the corresponding positions based on the current road generator's segments.
             * @returns
             */
            (): void
        }
    }
}
