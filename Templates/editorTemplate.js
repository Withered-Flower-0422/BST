import {
    // modules
    editor,
    console,
    file,
    scene,
    dialogWindowManager,
    math,

    // basic data types
    Float2,
    Float3,
    Float4,
    Bool3,
    ColorRGBA,
    Trans,
    Quaternion,
} from "editorApi"
/** commonly used types if needed
@import {
    // SceneObject
    SceneFolder,
    SceneItem,
    SceneSettings,

    // ItemComponent
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

    // SettingsComponent
    AssetReference,
    BackgroundMusic,
    Cloud,
    CollectionPrototype,
    CustomBall,
    Environment,
    Fog,
    Lens,
    Lighting,
    Landscaping,
    MapInfo,
    Sky,
    Terrain,
} from "editor:alias" 
*/

/** @type {MenuPath} */
export const menuPath = ""

/** @type {EditorExecute} */
export const execute = () => {}

/** @type {OnTick} */
export const onTick = () => {}

/** @type {OnTestMap} */
export const onBeforeTestMap = () => {}

/** @type {OnTestMap} */
export const onAfterTestMap = () => {}

/** @type {OnExportMap} */
export const onBeforeExportMap = filePath => {}

/** @type {OnExportMap} */
export const onAfterExportMap = filePath => {}

/** @type {OnOpenScene} */
export const onBeforeOpenScene = scenePath => {}

/** @type {OnOpenScene} */
export const onAfterOpenScene = scenePath => {}

/** @type {OnSaveScene} */
export const onBeforeSaveScene = scenePath => {}

/** @type {OnSaveScene} */
export const onAfterSaveScene = scenePath => {}

/** @type {OnImportAsset} */
export const onBeforeImportAsset = (filePath, assetPath) => {}

/** @type {OnImportAsset} */
export const onAfterImportAsset = (filePath, assetPath) => {}
