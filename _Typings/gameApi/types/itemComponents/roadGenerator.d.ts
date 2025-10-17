// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:type" {
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

    type RoadGeneratorData = {
        GeneratorAlgorithm: GeneratorAlgorithm
        "Road/Length": float
        "Road/Width": float
        "Road/EndWidth": float
        "Road/Height": float
        "Road/Offset": float
        "Road/Thickness": float
        /**
         * @range `1 ~ 256`
         */
        "Road/Segments": NonNegIntRange<1, 256>
        "Road/Bend": Float3
        "Road/CreateCap": bool
        "Road/AccurateUVLength": bool
        "Road/RotateMainUV": bool
        "Road/MainUVOffset": Float2
        "Road/SideUVOffset": float
        "Road/Concave": float
        "Road/EndConcave": float
        "WoodenBoard/Length": float
        "WoodenBoard/Width": float
        "WoodenBoard/Height": float
        "WoodenBoard/Offset": float
        "WoodenBoard/Thickness": float
        /**
         * @range `1 ~ 256`
         */
        "WoodenBoard/Segments": NonNegIntRange<1, 256>
        "WoodenBoard/Bend": Float3
        "WoodenBoard/CreateCap": bool
        "WoodenBoard/AccurateUVLength": bool
        "WoodenBoard/RotateMainUV": bool
        "WoodenBoard/MainUVOffset": Float2
        "WoodenBoard/SideUVOffset": float
        "Rail/Length": float
        "Rail/Offsets": Float2[]
        "Rail/Height": float
        "Rail/Offset": float
        /**
         * @range `1 ~ 256`
         */
        "Rail/Segments": NonNegIntRange<1, 256>
        /**
         * @range `1 ~ 128`
         */
        "Rail/RotationSegments": NonNegIntRange<1, 128>
        "Rail/Bend": Float3
        "Rail/CreateCap": bool
        "Rail/AccurateUVLength": bool
        "Rail/MainUVOffset": Float2
        "Rail/Radius": float
        "Tube/Length": float
        "Tube/Height": float
        "Tube/Offset": float
        "Tube/Radius": float
        "Tube/EndRadius": float
        "Tube/Slice": Float2
        "Tube/Thickness": float
        /**
         * @range `1 ~ 256`
         */
        "Tube/Segments": NonNegIntRange<1, 256>
        /**
         * @range `1 ~ 128`
         */
        "Tube/RotationSegments": NonNegIntRange<1, 128>
        "Tube/Bend": Float3
        "Tube/CreateCap": bool
        "Tube/AccurateUVLength": bool
        "Tube/MainUVOffset": Float2
        "Corner/Corner/P0": bool
        "Corner/Corner/P1": bool
        "Corner/Corner/P2": bool
        "Corner/Corner/P3": bool
        "Corner/Corner/L0": bool
        "Corner/Corner/L1": bool
        "Corner/Corner/L2": bool
        "Corner/Corner/L3": bool
        "Corner/Size": float
        "Corner/Thickness": float
        "Corner/CreateCap": bool
        "Corner/RotateMainUV": bool
        "Corner/MainUVOffset": Float2
        "Corner/Concave": float
        "CustomVertices/VerticesArray": VerticesArray[]
        "CustomVertices/Length": float
        "CustomVertices/Height": float
        /**
         * @range `1 ~ 256`
         */
        "CustomVertices/Segments": NonNegIntRange<1, 256>
        "CustomVertices/Bend": Float3
        "CustomVertices/AccurateUVLength": bool
        "CustomVertices/RotateMainUV": bool
        "CustomVertices/MainUVOffset": Float2
        "CustomScript/ScriptPath": Path<"Scripts">
    }

    type RoadGeneratorMethod = {
        [key: PropertyKey]: never
    }
}
