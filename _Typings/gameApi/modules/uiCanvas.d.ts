// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:module" {
    import { UIElement, UIElementTypeMap } from "game:type"

    namespace uiCanvas {
        /**
         * Gets the size of the canvas, as well as the size of the game window.
         * @returns The size of the canvas, as well as the size of the game window.
         */
        const getCanvasSize: () => Float2

        /**
         * Hides the game UI.
         * @returns
         */
        const hideGameUI: () => void

        /**
         * Shows the game UI.
         * @returns
         */
        const showGameUI: () => void

        /**
         * Creates a new UI element of the specified type.
         * @param elementType - The type of UI element to create.
         * @returns The new UI element.
         */
        const createUI: <T extends keyof UIElementTypeMap>(elementType: T) => UIElement<T>

        /**
         * Destroys the specified UI element.
         * @param element - The UI element to destroy.
         * @returns
         */
        const destroyUI: (element: UIElement<keyof UIElementTypeMap>) => void
    }
}
