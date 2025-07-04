declare module "gameApi" {
    export {
        console,
        scene,
        variables,
        settings,
        audioManager,
        levelManager,
        inputManager,
        uiCanvas,
        tweenManager,
    } from "game:module"

    export { math } from "math"

    export { Float2, Float3, Float4, Quaternion, Bool3, Trans, ColorRGBA }
}
