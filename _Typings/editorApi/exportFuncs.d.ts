// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "editor:type" {
    global {
        /**
         * Executed when button is pressed.
         * @returns
         */
        type EditorExecute = () => void

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
    }
}
