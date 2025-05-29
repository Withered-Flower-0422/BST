declare module "game:type" {
    type Transfrom = {
        Position: Float3
        Rotation: Float3
        Scale: Float3
    }

    type Landscaping = {
        readonly "Instances/Ash_Tree_01": Transfrom[]
        readonly "Instances/Ash_Tree_02": Transfrom[]
        readonly "Instances/Ash_Tree_03": Transfrom[]

        readonly "Instances/Bush_01": Transfrom[]
        readonly "Instances/Bush_02": Transfrom[]
        readonly "Instances/Bush_03": Transfrom[]
        readonly "Instances/Bush_04": Transfrom[]
        readonly "Instances/Bush_05": Transfrom[]
        readonly "Instances/Bush_06": Transfrom[]
        readonly "Instances/Bush_07": Transfrom[]
        readonly "Instances/Bush_08": Transfrom[]

        readonly "Instances/Fern_01": Transfrom[]
        readonly "Instances/Fern_02": Transfrom[]

        readonly "Instances/Grass_Patch_01": Transfrom[]
        readonly "Instances/Grass_Patch_02": Transfrom[]
        readonly "Instances/Grass_Patch_03": Transfrom[]
        readonly "Instances/Grass_Patch_10": Transfrom[]
    }
}
