declare module "editor:type" {
    const enum ShadowCastingMode {
        On = 0,
        Off = 1,
        TwoSided = 2,
        ShadowsOnly = 3,
    }

    type RendererData = {
        Mesh: string
        Materials: string[]
        AutoGetMesh: bool
        AutoGetMaterials: bool
        TryGetGlobalUVMat: bool
        ShadowCastingMode: ShadowCastingMode
        AutoOptimize: bool
        ForceSetOpacity: bool
        /**
         * @range `0 ~ 1`
         */
        Opacity: float
        NearDissolve: bool
    }

    type RendererMethod = {
        [key: string | symbol]: never
    }
}
