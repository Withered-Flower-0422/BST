declare module "gameApi" {
    import { math } from "game:module:math"
    import { console } from "game:module:console"
    import { scene } from "game:module:scene"
    import { variables } from "game:module:variables"
    import { settings } from "game:module:settings"
    import { audioManager } from "game:module:audioManager"
    import { levelManager } from "game:module:levelManager"
    import { inputManager } from "game:module:inputManager"
    import { uiCanvas } from "game:module:uiCanvas"
    import { tweenManager } from "game:module:tweenManager"

    export {
        math, console, scene, variables, settings, audioManager, levelManager, inputManager, uiCanvas, tweenManager,
        Float2, Float3, Float4, Quaternion, Bool3, Trans, ColorRGBA
    }
}
