// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:module" {
    import { UIElement, UIElementTypeMap } from "game:type"

    namespace uiCanvas {
        const getCanvasSize: () => Float2
        const hideGameUI: () => void
        const showGameUI: () => void
        const createUI: <T extends keyof UIElementTypeMap>(elementType: T) => UIElement<T>
        const destroyUI: (element: UIElement<keyof UIElementTypeMap>) => void
    }
}
