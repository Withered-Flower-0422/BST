// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "editor:type" {
    import { Path } from "path"

    global {
        type EditorExecute = {
            /** Executed when button is pressed. */
            (): void
        }

        /**
         * The name displayed in the menu bar for the registered script. Use `/` to separate levels.
         * @Register -
         * If you need to register the script in the editor menu bar,
         * you need to place the script in the `Scripts/_Editor` folder.
         * @Icon -
         * If you need to add an icon to a script registered in the menu bar,
         * you need to first import the image into BME and convert it to tex format,
         * then place it in the `Scripts/_Editor/Icons` folder and name it as the `menuPath` string in the script.
         */
        type MenuPath = string

        type OnTick = {
            /** Called every 1 second. */
            (): void
        }

        type OnTestMap = {
            /** Called when testing the map. */
            (): void
        }

        type OnExportMap = {
            /**
             * Called when exporting the map.
             * @param filePath The system path of the exported map file.
             */
            (filePath: string): void
        }

        type OnOpenScene = {
            /**
             * Called when opening the scene.
             * @param scenePath The BME path of the scene.
             */
            (scenePath: Path<"Scenes", true, false>): void
        }

        type OnSaveScene = {
            /**
             * Called when saving the scene.
             * @param scenePath The BME path of the scene.
             */
            (scenePath: Path<"Scenes", true, false>): void
        }

        type OnImportAsset = {
            /**
             * Called when importing an asset.
             * @param filePath The system path of the asset.
             * @param assetPath The BME path of the asset.
             */
            (
                filePath: string,
                assetPath: Path<
                    "Meshes" | "Textures" | "Materials" | "Audios" | "Scripts",
                    true,
                    false
                >,
            ): void
        }
    }
}
