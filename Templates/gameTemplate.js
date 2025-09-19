import {
    // modules
    console,
    scene,
    variables,
    settings,
    audioManager,
    levelManager,
    inputManager,
    tweenManager,
    math,
    uiCanvas,

    // basic data types
    Float2,
    Float3,
    Float4,
    ColorRGBA,
    Bool3,
    Trans,
    Quaternion,
} from "gameApi"
/** commonly used types if needed
@import {
    // Item
    Item,

    // UIElement
    Image,
    Text,
    Panel,

    // Component
    AudioPlayer,
    Camera,
    Collection,
    Decal,
    Executor,
    ItemLink,
    Joint,
    Light,
    ParticleEmitter,
    PhysicsObject,
    Renderer,
    RoadGenerator,
    Settings,
    TerrainStamp,
    Trigger,
    WayPath,
    WayPoint,
} from "game:alias" 
*/

/** @type {Player} */
let player

/** @description Variables set on the `executor`. */
const $ = {
    // Declare types of variables here if you want type hints.
    // Leave the values as `null`; the `init` function will set the values.

    /** @type {int} */ var1: null,
    /** @type {string} */ var2: null,

    // Clear the above codes if you don't need type hints.
}

/** @type {Init} */
export const init = (self, v) => {
    for (const k in v) $[k] = v[k]
}

/** @type {GameExecute} */
export const execute = (...args) => {}

/** @type {OnTrigger} */
export const onTrigger = (self, triggeredItem, type) => {}

/** @type {OnCollide} */
export const onCollide = (self, collisionEvent) => {}

/** @satisfies {RegisterEvent[]} */
export const registerEvents = []

/** @type {OnEvents<typeof registerEvents>} */
export const onEvents = (self, events) => {}
