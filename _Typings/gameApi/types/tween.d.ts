// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:type" {
    type Tween = {
        readonly next: {
            /**
             * Plays the tween for one step.
             * @returns
             */
            (): void
        }

        readonly play: {
            /**
             * Plays the tween until it is completed.
             * @returns
             */
            (): void
        }

        readonly stop: {
            /**
             * Stops the tween. The next call of `next()` or `play()` will restart the tween from the beginning.
             * @returns
             */
            (): void
        }
    }
}
