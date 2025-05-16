declare module "editorApi" {
    import { editor, console, file, scene, dialogWindowManager, math } from "editor:module"

    export {
        editor, console, file, scene, dialogWindowManager, math,
        Float2, Float3, Float4, Quaternion, Bool3, Trans, ColorRGBA
    }
}
