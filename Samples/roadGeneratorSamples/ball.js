/**
 * This file teaches you how to generate a ball mesh
 * using the Road Generator Custom Script.
 *
 * @author Mushreb, Withered Flower
 */

/** @type {Generate<$>} */
export const generate = () => {
    const r = 0.375 // radius of the ball
    const s = 32 // number of segments

    /** @type {Vertex[]} */
    const vertices = []
    /** @type {UV[]} */
    const uvs = []
    /** @type {Normal[]} */
    const normals = []
    /** @type {Triangle[]} */
    const triangles = []

    const latStep = Math.PI / s
    const lonStep = (2 * Math.PI) / s
    for (let lat = 0; lat <= s; lat++) {
        const theta = lat * latStep
        for (let lon = 0; lon <= s; lon++) {
            const phi = lon * lonStep

            const x = r * Math.sin(theta) * Math.cos(phi)
            const y = r * Math.cos(theta)
            const z = r * Math.sin(theta) * Math.sin(phi)

            vertices.push([x, y, z])

            const u = (lon / s) * 5
            const v = (lat / s) * 5
            uvs.push([u, v])

            // Normals can be an empty array, BME can calculate them automatically.
            normals.push([x / r, y / r, z / r])
        }
    }

    for (let lat = 0; lat < s; lat++) {
        for (let lon = 0; lon < s; lon++) {
            const first = lat * (s + 1) + lon
            const second = first + s + 1

            triangles.push([first + 1, second, first], [first + 1, second + 1, second])
        }
    }

    /** @type {SubMesh} */
    const subMesh = [vertices, uvs, normals, triangles]
    /** @type {Mesh} */
    const mesh = [subMesh]

    return mesh
}
