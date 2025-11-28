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

// Declare types of executor variables below to get type hints.
// Or clear the comments if you don't need type hints.
/**
 * @typedef {{
 * var1: number,
 * readonly var2: string,
 * }} $
 */

/** Variables set on the `Executor`. */
const $ = /** @type {$} */ ({})

/** @type {Init<$>} */
export const init = (self, v) => Object.setPrototypeOf($, v)

/** @type {GameExecute} */
export const execute = (...args) => {}

/** @type {OnTrigger<"Enter"|"Stay"|"Exit">} */
export const onTrigger = (self, triggeredItem, type) => {}

/** @type {OnCollide<"Enter"|"Stay"|"Exit">} */
export const onCollide = (self, collisionEvent) => {}

/** @satisfies {RegisterEvent[]} @typedef {ExpectTrue<IsUnique<typeof registerEvents>>} */
export const registerEvents = /** @type {const} */ ([])

/** @type {OnEvents<typeof registerEvents>} */
export const onEvents = (self, events) => {}
