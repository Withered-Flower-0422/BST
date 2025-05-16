/** @type {Generate} */
export const generate = (vars) => {
    const { } = vars

    /** @type {Vertex[]} */
    const vertices = []
    /** @type {UV[]} */
    const uvs = []
    /** @type {Normal[]} */
    const normals = []
    /** @type {Triangle[]} */
    const triangles = []







    /** @type {SubMesh} */
    const submesh = [vertices, uvs, normals, triangles]
    /** @type {Mesh} */
    const mesh = [submesh]

    return mesh
}
