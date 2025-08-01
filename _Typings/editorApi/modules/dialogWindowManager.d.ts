// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "editor:module" {
    import { Tuple } from "utils"

    namespace dialogWindowManager {
        /**
         * Opens an input dialog window.
         * @param windowTitle - The title of the window.
         * @param contentText - The content text of the window, as well as the prompt for the input.
         * @param defaultInputText - The default input text.
         * @param closeButtonName - The name of the close button.
         * @param checkButtonName - The name of the check button.
         * @param onCloseButtonClick - The function to be called when the close button is clicked.
         * @param onCheckButtonClick - The function to be called when the check button is clicked. The input text will be passed as an argument.
         * @returns
         */
        const openInputDialog: (
            windowTitle: string,
            contentText: string,
            defaultInputText: string,
            closeButtonName: string,
            checkButtonName: string,
            onCloseButtonClick: () => void,
            onCheckButtonClick: (inputText: string) => void
        ) => void

        /**
         * Opens an input dialog window with multiple input fields.
         * @param windowTitle - The title of the window.
         * @param contentTexts - The content texts of the window, as well as the prompts for the input fields.
         * @param defaultInputTexts - The default input texts.
         * @param closeButtonName - The name of the close button.
         * @param checkButtonName - The name of the check button.
         * @param onCloseButtonClick - The function to be called when the close button is clicked.
         * @param onCheckButtonClick - The function to be called when the check button is clicked. The input texts will be passed as an argument.
         * @returns
         */
        const openInputsDialog: <const T extends readonly string[]>(
            windowTitle: string,
            contentTexts: T,
            defaultInputTexts: Tuple<string, T["length"]>,
            closeButtonName: string,
            checkButtonName: string,
            onCloseButtonClick: () => void,
            onCheckButtonClick: (inputsText: Tuple<string, T["length"]>) => void
        ) => void

        /**
         * Opens an asset picker dialog window.
         * @param onCancel - The function to be called when the cancel button is clicked.
         * @param onPickAsset - The function to be called when an asset is picked. The picked asset path will be passed as an argument.
         * @param assetType - The type of the asset to be picked.
         * @returns
         */
        const openAssetPickerDialog: (
            onCancel: () => void,
            onPickAsset: (assetPath: string) => void,
            assetType: "Scenes" | "Items" | "Textures" | "Meshes" | "Materials" | "Audios" | "Scripts" | "All"
        ) => void

        /**
         * Opens a message dialog window.
         * @param windowTitle - The title of the window.
         * @param contentText - The content text of the window.
         * @param closeButtonName - The name of the close button.
         * @param onCloseButtonClick - The function to be called when the close button is clicked.
         * @returns
         */
        const openMessageDialog: (
            windowTitle: string,
            contentText: string,
            closeButtonName: string,
            onCloseButtonClick: () => void
        ) => void

        /**
         * Opens a sub-window. The window will stay open until the close button is clicked.
         * @param windowTitle - The title of the window.
         * @param contentTexts - The content texts of the window, as well as the prompts for the input fields.
         * @param defaultInputTexts - The default input texts.
         * @param buttonNames - The names of the buttons.
         * @param onButtonsClick - The functions to be called when the buttons are clicked. The input texts will be passed as an argument.
         * @param onCloseWindowClick - The function to be called when the close button is clicked.
         * @returns
         */
        const openSubWindow: <const T extends readonly string[], const U extends readonly string[]>(
            windowTitle: string,
            contentTexts: T,
            defaultInputTexts: Tuple<string, T["length"]>,
            buttonNames: U,
            onButtonsClick: Tuple<(inputsText: Tuple<string, T["length"]>) => void, U["length"]>,
            onCloseWindowClick: () => void
        ) => void
    }
}
