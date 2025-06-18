declare module "game:type" {
    type Transform = {
        Position: Float3
        Rotation: Float3
        Scale: Float3
    }

    type Landscaping = {
        readonly "Instances/Ash_Tree_01": Transform[]
        readonly "Instances/Ash_Tree_02": Transform[]
        readonly "Instances/Ash_Tree_03": Transform[]

        readonly "Instances/Bush_01": Transform[]
        readonly "Instances/Bush_02": Transform[]
        readonly "Instances/Bush_03": Transform[]
        readonly "Instances/Bush_04": Transform[]
        readonly "Instances/Bush_05": Transform[]
        readonly "Instances/Bush_06": Transform[]
        readonly "Instances/Bush_07": Transform[]
        readonly "Instances/Bush_08": Transform[]

        readonly "Instances/Fern_01": Transform[]
        readonly "Instances/Fern_02": Transform[]

        readonly "Instances/Grass_Patch_01": Transform[]
        readonly "Instances/Grass_Patch_02": Transform[]
        readonly "Instances/Grass_Patch_03": Transform[]
        readonly "Instances/Grass_Patch_10": Transform[]
    }
}
