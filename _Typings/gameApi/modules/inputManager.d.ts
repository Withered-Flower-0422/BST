// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:module" {
    import { KeyboardKey, MouseButton, GamePadButton, PlayerKey } from "keys"
    import { Float2 } from "basicData"

    namespace inputManager {
        namespace keyboard {
            const checkKeyDown: {
                /**
                 * Checks if a key is currently down.
                 * @param key - The key to check.
                 * @returns Whether the key is currently down.
                 * @NOTE -
                 * - Passing in `"None"` will always return `false`.
                 * - Be careful when passing in `"Escape"`, as `Escape` is to pause the game,
                 * and the function may not be able to be invoked in time at that moment.
                 */
                <T extends KeyboardKey>(key: T): T extends "None" ? false : bool
            }

            const checkKeyUp: {
                /**
                 * Checks if a key is currently up.
                 * @param key - The key to check.
                 * @returns Whether the key is currently up.
                 * @NOTE -
                 * - Passing in `"None"` will always return `false`.
                 * - Be careful when passing in `"Escape"`, as `Escape` is to pause the game,
                 * and the function may not be able to be invoked in time at that moment.
                 */
                <T extends KeyboardKey>(key: T): T extends "None" ? false : bool
            }

            const checkKeyHold: {
                /**
                 * Checks if a key is currently being held down.
                 * @param key - The key to check.
                 * @returns Whether the key is currently being held down.
                 * @NOTE -
                 * - Passing in `"None"` will always return `false`.
                 * - Be careful when passing in `"Escape"`, as `Escape` is to pause the game,
                 * and the function may not be able to be invoked in time at that moment.
                 */
                <T extends KeyboardKey>(key: T): T extends "None" ? false : bool
            }
        }

        namespace mouse {
            const checkButtonDown: {
                /**
                 * Checks if a mouse button is currently down.
                 * @param button - The mouse button to check.
                 * @returns Whether the mouse button is currently down.
                 */
                (button: MouseButton): bool
            }

            const checkButtonUp: {
                /**
                 * Checks if a mouse button is currently up.
                 * @param button - The mouse button to check.
                 * @returns Whether the mouse button is currently up.
                 */
                (button: MouseButton): bool
            }

            const checkButtonHold: {
                /**
                 * Checks if a mouse button is currently being held down.
                 * @param button - The mouse button to check.
                 * @returns Whether the mouse button is currently being held down.
                 */
                (button: MouseButton): bool
            }

            const getMoveDelta: {
                /**
                 * Gets the mouse movement delta since the last frame.
                 * @returns The mouse movement delta.
                 */
                (): Float2
            }

            const getScrollDelta: {
                /**
                 * Gets the mouse scroll delta since the last frame.
                 * @returns The mouse scroll delta.
                 */
                (): Float2
            }
        }

        namespace gamePad {
            const checkButtonDown: {
                /**
                 * Checks if a game pad button is currently down.
                 * @param button - The game pad button to check.
                 * @returns Whether the game pad button is currently down.
                 */
                (button: GamePadButton): bool
            }

            const checkButtonUp: {
                /**
                 * Checks if a game pad button is currently up.
                 * @param button - The game pad button to check.
                 * @returns Whether the game pad button is currently up.
                 */
                (button: GamePadButton): bool
            }

            const checkButtonHold: {
                /**
                 * Checks if a game pad button is currently being held down.
                 * @param button - The game pad button to check.
                 * @returns Whether the game pad button is currently being held down.
                 */
                (button: GamePadButton): bool
            }

            const getDPadValue: {
                /**
                 * Gets the D pad value.
                 * @returns The D pad value.
                 */
                (): Float2
            }

            const getLeftStickValue: {
                /**
                 * Gets the left stick value.
                 * @returns The left stick value.
                 */
                (): Float2
            }

            const getRightStickValue: {
                /**
                 * Gets the right stick value.
                 * @returns The right stick value.
                 */
                (): Float2
            }
        }

        const disablePlayerKey: {
            /**
             * Disables a player key, as known as a key that can be used to control the player ball.
             * @param playerKeyName - The player key to disable.
             * @returns
             */
            (playerKeyName: PlayerKey): void
        }

        const enablePlayerKey: {
            /**
             * Enables a player key, as known as a key that can be used to control the player ball.
             * @param playerKeyName - The player key to enable.
             * @returns
             */
            (playerKeyName: PlayerKey): void
        }

        const getPlayerKey: {
            /**
             * Gets the keyboard key associated with a player key, as known as a key that can be used to control the player ball.
             * @param playerKeyName - The player key to get the keyboard key for.
             * @returns The keyboard key associated with the player key. If there is no keyboard key associated with the player key, returns `"None"`.
             */
            (playerKeyName: PlayerKey): Exclude<KeyboardKey, "Enter" | "Escape">
        }
    }
}
