// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:type" {
    import { Path } from "path"

    enum ShadowCastingMode {
        On = 0,
        Off = 1,
        TwoSided = 2,
        ShadowsOnly = 3,
    }

    type RendererData = {
        Mesh: Path<"Meshes">
        Materials: Path<"Materials">[]
        AutoGetMesh: bool
        AutoGetMaterials: bool
        TryGetGlobalUVMat: bool
        ShadowCastingMode: ShadowCastingMode
        readonly AutoOptimize: bool
        readonly ForceSetOpacity: bool
        /**
         * @range `0 ~ 1`
         */
        Opacity: float
        NearDissolve: bool
    }

    type RendererMethod = {
        [key: PropertyKey]: never
    }
}
