declare module "editorApi" {
    import { editor } from "editor:module:editor"
    import { console } from "editor:module:console"
    import { file } from "editor:module:file"
    import { scene } from "editor:module:scene"
    import { dialogWindowManager } from "editor:module:dialogWindowManager"
    import { math } from "editor:module:math"

    export {
        editor, console, file, scene, dialogWindowManager, math,
        Float2, Float3, Float4, Quaternion, Bool3, Trans, ColorRGBA
    }
}
