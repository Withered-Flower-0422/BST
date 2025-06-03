/**
 * This file teaches you how to randomize the angle of y-axis of selected objects.
 *
 * You need to place the script in the `Scripts/_Editor` folder
 * to register it in the editor menu bar first.
 *
 * @NOTE Some unused modules and functions are removed for brevity.
 *
 * @author Withered_Flower
 */

import { console, scene } from "editorApi"

/** @type {MenuPath} */
export const menuPath = "Random Angle"

/** @type {EditorExecute} */
export const execute = () => {
    scene.getSelectedObjects().forEach(obj => {
        const rot = obj.getGlobalRotation()
        rot.y = Math.random() * 360
        obj.setRotation(rot)
    })

    console.log("Angle Randomized")
}
