declare module "editor:module" {
    import { Tuple } from "utils"

    namespace dialogWindowManager {
        const openInputDialog: (
            windowTitle: string,
            contentText: string,
            defaultInputText: string,
            closeButtonName: string,
            checkButtonName: string,
            onCloseButtonClick: () => void,
            onCheckButtonClick: (inputText: string) => void
        ) => void

        const openInputsDialog: <const T extends readonly string[]>(
            windowTitle: string,
            contentTexts: T,
            defaultInputTexts: Tuple<string, T["length"]>,
            closeButtonName: string,
            checkButtonName: string,
            onCloseButtonClick: () => void,
            onCheckButtonClick: (inputsText: Tuple<string, T["length"]>) => void
        ) => void

        const openAssetPickerDialog: (
            onCancel: () => void,
            onPickAsset: (assetPath: string) => void,
            assetType: "Scenes" | "Items" | "Textures" | "Meshes" | "Materials" | "Audios" | "Scripts" | "All"
        ) => void

        const openMessageDialog: (
            windowTitle: string,
            contentText: string,
            closeButtonName: string,
            onCloseButtonClick: () => void
        ) => void

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
