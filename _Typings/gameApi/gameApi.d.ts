// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "gameApi" {
    import { Player } from "game:type"

    /**
     * If the player ball is never created, errors will occur when trying to access it's properties other than `ballType` and `guid`.
     */
    export const player: Player

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

    export { Float2, Float3, Float4, Quaternion, Bool3, Trans, ColorRGBA } from "basicData"
}
