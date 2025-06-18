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

/** @type {Init} */
export const init = (self, v) => {}

/** @type {GameExecute} */
export const execute = (...args) => {}

/** @type {OnTrigger} */
export const onTrigger = (self, triggeredItem, type) => {}

/** @type {OnCollide} */
export const onCollide = (self, collisionEvent) => {}

/** @type {RegisterEvent[]} */
export const registerEvents = []

/** @type {OnEvents} */
export const onEvents = (self, events) => {}
