/**
 * This file teaches you how to make your ball fly or sink
 * when pressing `Q` or `E` on the keyboard.
 *
 * @NOTE Some unused modules and functions are removed for brevity.
 *
 * @author Withered Flower
 */

import { scene, levelManager, inputManager } from "gameApi"

/** @type {Player} */
let player

/** @satisfies {RegisterEvent[]} @typedef {ExpectTrue<AssertUnique<typeof registerEvents>>} */
export const registerEvents = /** @type {const} */ (["OnTimerActive", "OnPhysicsUpdate"])

/** @type {OnEvents<typeof registerEvents>} */
export const onEvents = (self, events) => {
    if (events.OnTimerActive) {
        // load the player only once to improve performance
        if (!player) {
            player = scene.getPlayer()
        }
    }

    if (events.OnPhysicsUpdate) {
        // ensure the ball is movable
        if (!levelManager.timerEnabled) {
            return
        }

        // press `Q` to make the ball fly up
        if (inputManager.keyboard.checkKeyHold("Q")) {
            const v = player.physicsObject.getLinearVelocity()
            // prevent the ball from going up too fast
            if (v.y < 30) {
                // increase the y velocity by 0.7 per frame
                v.y += 0.7
                player.physicsObject.setLinearVelocity(v)
            }
        }

        // press `E` to make the ball sink down
        if (inputManager.keyboard.checkKeyHold("E")) {
            const v = player.physicsObject.getLinearVelocity()
            // prevent the ball from going down too fast
            if (v.y > -30) {
                // decrease the y velocity by 0.7 per frame
                v.y -= 0.7
                player.physicsObject.setLinearVelocity(v)
            }
        }
    }
}
