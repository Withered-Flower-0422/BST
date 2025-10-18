﻿/**
 * This file teaches you how to make your ball fly or sink
 * when pressing `Q` or `E` on the keyboard.
 *
 * @NOTE Some unused modules and functions are removed for brevity.
 *
 * @author Withered Flower
 */

import { player, levelManager, inputManager } from "gameApi"

/** @satisfies {RegisterEvent[]} @typedef {ExpectTrue<IsUnique<typeof registerEvents>>} */
export const registerEvents = /** @type {const} */ (["OnPhysicsUpdate"])

/** @type {OnEvents<typeof registerEvents>} */
export const onEvents = (self, events) => {
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
