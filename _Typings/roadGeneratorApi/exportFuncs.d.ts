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
