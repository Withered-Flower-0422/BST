// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "editor:module" {
    import { AssertNonNeg } from "utils"
    import { Folder, Path, AssetsSuffixMap } from "path"

    namespace editor {
        /** @readonly */
        const version: string

        /** @readonly */
        const language: "English" | "Chinese" | "Japanese"

        const refreshCache: {
            /**
             * Refreshes the editor's cache.
             * @returns
             */
            (): void
        }

        const reloadFolder: {
            /**
             * Reloads the editor's folder.
             * @returns
             */
            (): void
        }

        const startTimer: {
            /**
             * Starts the editor's internal timer.
             * @returns
             */
            (): void
        }

        const stopTimer: {
            /**
             * Stops the editor's internal timer.
             * @returns The time elapsed since the last `startTimer()` call, in milliseconds.
             */
            (): float
        }

        const invoke: {
            /**
             * Invokes a function after a specified delay.
             * @param func - The function to be invoked.
             * @param delayTime - The delay time in seconds. When set to 0, the delay is 1 frame.
             * @returns
             */
            <T extends float>(
                func: {
                    /**
                     * The function to be invoked.
                     * @param args - The arguments to be passed to the function.
                     * @returns
                     */
                    (...args: any[]): void
                },
                delayTime: AssertNonNeg<T>,
            ): void
        }

        const getSelectedAsset: {
            /**
             * Gets the editor's path to the selected asset.
             * @returns The editor's path to the selected asset. If no asset is selected, an empty string is returned.
             */
            (): Path
        }

        const getSelectedAssetFolder: {
            /**
             * Gets the editor's path to the selected asset's folder.
             * @returns The editor's path to the selected asset's folder.
             */
            (): Folder
        }

        /** @deprecated Not implemented yet. */
        const getAllAssetsInFolder: {
            /**
             * Gets all assets in a specified folder.
             * @param category - The category of assets to search for.
             * @param folderName - The folder to search for assets.
             * @returns An array of editor's paths to the assets in the specified folder.
             * @NOTE -
             * Only custom assets are returned. Link-typed assets are ignored.
             */
            <T extends keyof AssetsSuffixMap>(
                category: T,
                folderName: string,
            ): Path<T, true, false>[]
        }
    }
}
