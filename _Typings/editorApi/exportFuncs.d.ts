declare module "editor:type" {
    global {
        /**
         * @description executed when button is pressed
         */
        type EditorExecute = () => void

        /**
         * @Register
         * if you need to register the script in the editor menu bar,
         * you need to place the script in the `Scripts/_Editor` folder
         * @Icon
         * if you need to add an icon to a script registered in the menu bar,
         * you need to first import the image into BME and convert it to tex format,
         * then place it in the `Scripts/_Editor/Icons` folder and name it as the `menuPath` string in the script
         */
        type MenuPath = string
    }
}
