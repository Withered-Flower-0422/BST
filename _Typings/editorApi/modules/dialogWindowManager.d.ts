declare module "editor:module" {
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

        const openInputsDialog: (
            windowTitle: string,
            contentTexts: string[],
            defaultInputTexts: string[],
            closeButtonName: string,
            checkButtonName: string,
            onCloseButtonClick: () => void,
            onCheckButtonClick: (inputsText: string[]) => void
        ) => void

        const openAssetPickerDialog: (
            onCancel: () => void,
            onPickAsset: (assetPath: string) => void,
            assetType: "Scenes" | "Items" | "Textures" | "Meshes" | "Materials" | "Audios" | "Scripts" | "All"
        ) => void
    }
}
