// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:type" {
    type Tween = Readonly<{
        /**
         * Plays the tween for one step.
         * @returns
         */
        next: () => void

        /**
         * Plays the tween until it is completed.
         * @returns
         */
        play: () => void

        /**
         * Stops the tween. The next call to `next()` or `play()` will restart the tween from the beginning.
         * @returns
         */
        stop: () => void
    }>
}
