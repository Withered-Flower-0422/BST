// Declare types of executor variables below to get type hints.
// Or clear the comments if you don't need type hints.
/**
 * @typedef {object} $
 * @prop {int} var1
 * @prop {string} var2
 */

/** @type {Generate<$>} */
export const generate = vars => {
    const {} = vars

    /** @type {Vertex[]} */
    const vertices = []
    /** @type {UV[]} */
    const uvs = []
    /** @type {Normal[]} */
    const normals = [] // Normals can be an empty array, BME can calculate them automatically.
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
