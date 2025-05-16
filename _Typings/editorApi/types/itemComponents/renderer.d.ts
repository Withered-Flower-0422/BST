declare module "editor:type:renderer" {
    const enum ShadowCastingMode {
        On = 0,
        Off = 1,
        TwoSided = 2,
        ShadowsOnly = 3,
    }

    export type RendererData = {
        Mesh: string
        Materials: string[]
        AutoGetMesh: bool
        AutoGetMaterials: bool
        GetGlobalUVMat: bool
        ShadowCastingMode: ShadowCastingMode
        AutoOptimize: bool
        ForceSetOpacity: bool
        /**
         * @range `0 ~ 1`
         */
        Opacity: float
        NearDissolve: bool
    }

    export type RendererMethod = {
        [key: string | symbol]: never
    }
}
