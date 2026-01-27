// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:module" {
    import { UIElement, UIElementTypeMap } from "game:type"
    import { Float2 } from "basicData"

    namespace uiCanvas {
        const getCanvasSize: {
            /**
             * Gets the size of the canvas, as well as the size of the game window.
             * @returns The size of the canvas, as well as the size of the game window.
             */
            (): Float2
        }

        const hideGameUI: {
            /**
             * Hides the game UI.
             * @returns
             */
            (): void
        }

        const showGameUI: {
            /**
             * Shows the game UI.
             * @returns
             */
            (): void
        }

        const createUI: {
            /**
             * Creates a new UI element of the specified type.
             * @param elementType - The type of UI element to create.
             * @returns The new UI element.
             */
            <T extends keyof UIElementTypeMap>(elementType: T): UIElement<T>
        }

        const destroyUI: {
            /**
             * Destroys the specified UI element.
             * @param element - The UI element to destroy.
             * @returns
             */
            (element: UIElement): void
        }
    }
}
