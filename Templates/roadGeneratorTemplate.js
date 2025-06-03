/** @type {Generate} */
export const generate = vars => {
    const {} = vars

    /** @type {Vertex[]} */
    const vertices = []
    /** @type {UV[]} */
    const uvs = []
    /** @type {Normal[]} */
    const normals = []
    /** @type {Triangle[]} */
    const triangles = []

    /* your code here 
    
    
    
    
    
    
    */

    /** @type {SubMesh} */
    const subMesh = [vertices, uvs, normals, triangles]
    /** @type {Mesh} */
    const mesh = [subMesh]

    return mesh
}
