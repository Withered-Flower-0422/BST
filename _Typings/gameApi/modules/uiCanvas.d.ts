declare module "game:module:uiCanvas" {
    import { UIElement, ElementTypeMap } from "game:type:uiElement"

    export namespace uiCanvas {
        const getCanvasSize: () => Float2
        const hideGameUI: () => void
        const showGameUI: () => void
        const createUI: <T extends keyof ElementTypeMap>(elementType: T) => UIElement<T>
        const destroyUI: (element: UIElement<keyof ElementTypeMap>) => void
    }
}
