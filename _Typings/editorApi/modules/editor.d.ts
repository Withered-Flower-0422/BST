// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "editor:module" {
    namespace editor {
        /**
         * @readonly
         */
        const version: string

        /**
         * @readonly
         */
        const language: "English" | "Chinese" | "Japanese"

        /**
         * Refreshes the editor's cache.
         * @returns
         */
        const refreshCache: () => void

        /**
         * Reloads the editor's folder.
         * @returns
         */
        const reloadFolder: () => void

        /**
         * Starts the editor's internal timer.
         * @returns
         */
        const startTimer: () => void

        /**
         * Stops the editor's internal timer.
         * @returns The time elapsed since the last `startTimer()` call, in seconds.
         */
        const stopTimer: () => float

        /**
         * Invokes a function after a specified delay.
         * @param func - The function to be invoked.
         * @param delayTime - The delay time in seconds. When set to 0, the delay is 1 frame.
         * @returns
         */
        const invoke: (func: (...args: any[]) => any, delayTime: float) => void

        /**
         * Gets the editor's path to the selected asset.
         * @returns The editor's path to the selected asset.
         */
        const getSelectedAsset: () => string

        /**
         * Gets the editor's path to the selected asset's folder.
         * @returns The editor's path to the selected asset's folder.
         */
        const getSelectedAssetFolder: () => string
    }
}
