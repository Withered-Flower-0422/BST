import {
    // player
    player,

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

/**
 * Declare types of executor variables here if you want type hints.
 * Clear the comments if you don't need type hints.
 * @typedef {object} $
 * @prop {int} var1
 * @prop {string} var2
 */

/** @type {$} @description Variables set on the `Executor`. */
let $

/** @type {Init} */
export const init = (self, v) => {
    $ = /** @type {$} */ (v)
}

/** @type {GameExecute} */
export const execute = (...args) => {}

/** @type {OnTrigger} */
export const onTrigger = (self, triggeredItem, type) => {}

/** @type {OnCollide} */
export const onCollide = (self, collisionEvent) => {}

/** @satisfies {RegisterEvent[]} @typedef {ExpectTrue<IsUnique<typeof registerEvents>>} */
export const registerEvents = /** @type {const} */ ([])

/** @type {OnEvents<typeof registerEvents>} */
export const onEvents = (self, events) => {}
