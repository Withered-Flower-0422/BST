/**
 * This file teaches you how to transfer your ball to the item's position
 * when pressing `T` on the keyboard.
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
        // Ensure the ball is movable.
        if (!levelManager.timerEnabled) {
            return
        }

        // Press `T` to transfer the ball to the item's position.
        if (inputManager.keyboard.checkKeyDown("T")) {
            // Get the item's position.
            const pos = self.getTransform()[0]
            // We add 1 to the y-coordinate to ensure the ball is above the item
            // so that even if the item is placed in the road, the ball will not
            // be stuck in the ground.
            pos.y++
            // Transfer the ball.
            player.transfer(pos)
        }
    }
}
