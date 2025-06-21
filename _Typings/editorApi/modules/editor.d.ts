declare module "editor:module" {
    namespace editor {
        /**
         * `readonly`
         */
        const version: int
        /**
         * `readonly`
         */
        const language: "English" | "Chinese" | "Japanese"
        const refreshCache: () => void
        const reloadFolder: () => void
        const startTimer: () => void
        const stopTimer: () => float
        /**
         * @param delayTime the unit is seconds; when set to 0, the delay is 1 frame
         */
        const invoke: (func: (...args: any[]) => any, delayTime: float) => void
        /**
         * @returns the editor's path to the selected asset
         */
        const getSelectedAsset: () => string
        /**
         * @returns the editor's path to the selected asset's folder
         */
        const getSelectedAssetFolder: () => string
    }
}
