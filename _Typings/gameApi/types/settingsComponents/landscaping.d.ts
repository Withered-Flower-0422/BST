declare module "game:type" {
    type Transfrom = {
        Position: Float3
        Rotation: Float3
        Scale: Float3
    }

    type Landscaping = {
        "Instances/Ash_Tree_01": Transfrom[]
        "Instances/Ash_Tree_02": Transfrom[]
        "Instances/Ash_Tree_03": Transfrom[]

        "Instances/Bush_01": Transfrom[]
        "Instances/Bush_02": Transfrom[]
        "Instances/Bush_03": Transfrom[]
        "Instances/Bush_04": Transfrom[]
        "Instances/Bush_05": Transfrom[]
        "Instances/Bush_06": Transfrom[]
        "Instances/Bush_07": Transfrom[]
        "Instances/Bush_08": Transfrom[]

        "Instances/Fern_01": Transfrom[]
        "Instances/Fern_02": Transfrom[]

        "Instances/Grass_Patch_01": Transfrom[]
        "Instances/Grass_Patch_02": Transfrom[]
        "Instances/Grass_Patch_03": Transfrom[]
        "Instances/Grass_Patch_10": Transfrom[]
    }
}
