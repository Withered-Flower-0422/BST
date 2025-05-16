/**
 * This file teaches you how to make your ball fly or sink
 * when pressing `Q` or `E` on the keyboard.
 * 
 * @NOTE Some unused modules and functions are removed for brevity.
 * 
 * @author Withered_Flower
 */

import { scene, levelManager, inputManager } from "gameApi"

/** @type {Player} */
let player

/** @type {RegisterEvent[]} */
export const registerEvents = [
    "OnTimerActive",
    "OnPhysicsUpdate",
]

/** @type {OnEvents} */
export const onEvents = (self, events) => {
    if ("OnTimerActive" in events) {
        if (!player) { // load the player only once to improve performance
            player = scene.getPlayer()
        }
    }

    if ("OnPhysicsUpdate" in events) {
        if (!levelManager.timerEnabled) { // ensure the ball is movable
            return
        }

        if (inputManager.keyboard.checkKeyHold("Q")) { // press `Q` to make the ball fly up
            const v = player.physicsObject.getLinearVelocity()
            if (v.y < 30) { // prevent the ball from going up too fast
                v.y += 0.7
                player.physicsObject.setLinearVelocity(v)
            }
        }

        if (inputManager.keyboard.checkKeyHold("E")) { // press `E` to make the ball sink down
            const v = player.physicsObject.getLinearVelocity()
            if (v.y > -30) { // prevent the ball from going down too fast
                v.y -= 0.7
                player.physicsObject.setLinearVelocity(v)
            }
        }
    }
}
