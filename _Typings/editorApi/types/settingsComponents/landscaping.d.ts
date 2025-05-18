declare module "editor:type" {
    const enum PlacementMode {
        Place = 1,
        Paint = 2,
        Erase = 3,
        Scale = 4,
    }

    type Transfrom = {
        Position: Float3
        Rotation: Float3
        Scale: Float3
    }

    type Landscaping = {
        Instances: {
            Ash_Tree_01: Transfrom[]
            Ash_Tree_02: Transfrom[]
            Ash_Tree_03: Transfrom[]

            Bush_01: Transfrom[]
            Bush_02: Transfrom[]
            Bush_03: Transfrom[]
            Bush_04: Transfrom[]
            Bush_05: Transfrom[]
            Bush_06: Transfrom[]
            Bush_07: Transfrom[]
            Bush_08: Transfrom[]

            Fern_01: Transfrom[]
            Fern_02: Transfrom[]

            Grass_Patch_01: Transfrom[]
            Grass_Patch_02: Transfrom[]
            Grass_Patch_03: Transfrom[]
            Grass_Patch_10: Transfrom[]
        }
    }
}
