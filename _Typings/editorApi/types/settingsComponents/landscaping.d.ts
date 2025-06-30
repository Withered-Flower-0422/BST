declare module "editor:type" {
    const enum PlacementMode {
        Place = 1,
        Paint = 2,
        Erase = 3,
        Scale = 4,
    }

    type Landscaping = {
        Instances: {
            Ash_Tree_01: Transform[]
            Ash_Tree_02: Transform[]
            Ash_Tree_03: Transform[]

            Bush_01: Transform[]
            Bush_02: Transform[]
            Bush_03: Transform[]
            Bush_04: Transform[]
            Bush_05: Transform[]
            Bush_06: Transform[]
            Bush_07: Transform[]
            Bush_08: Transform[]

            Fern_01: Transform[]
            Fern_02: Transform[]

            Grass_Patch_01: Transform[]
            Grass_Patch_02: Transform[]
            Grass_Patch_03: Transform[]
            Grass_Patch_10: Transform[]
        }
    }
}
