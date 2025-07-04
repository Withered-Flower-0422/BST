// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "roadGenerator:type" {
    global {
        type Vertex = [float, float, float]
        type UV = [float, float]
        type Normal = [float, float, float]
        type Triangle = [int, int, int]

        type SubMesh = [Vertex[], UV[], Normal[], Triangle[]]
        type Mesh = SubMesh[]

        type Generate = (vars: { [key: string]: any; [key: symbol]: never }) => Mesh
    }
}
