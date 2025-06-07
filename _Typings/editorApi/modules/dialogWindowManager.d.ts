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

        const openInputsDialog: <T extends string[]>(
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
    }
}
