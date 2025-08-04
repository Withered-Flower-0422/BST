// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:module" {
    import { KeyboardKey, MouseButton, GamePadButton, PlayerKey } from "keys"

    namespace inputManager {
        namespace keyboard {
            /**
             * Checks if a key is currently down.
             * @param key - The key to check.
             * @returns Whether the key is currently down.
             * @NOTE -
             * - Be careful when passing in `Escape`, as `Escape` is to pause the game,
             * and the function may not be able to be invoked in time at that moment.
             */
            const checkKeyDown: (key: Exclude<KeyboardKey, "None">) => bool

            /**
             * Checks if a key is currently up.
             * @param key - The key to check.
             * @returns Whether the key is currently up.
             * @NOTE -
             * - Be careful when passing in `Escape`, as `Escape` is to pause the game,
             * and the function may not be able to be invoked in time at that moment.
             */
            const checkKeyUp: (key: Exclude<KeyboardKey, "None">) => bool

            /**
             * Checks if a key is currently being held down.
             * @param key - The key to check.
             * @returns Whether the key is currently being held down.
             * @NOTE -
             * - Be careful when passing in `Escape`, as `Escape` is to pause the game,
             * and the function may not be able to be invoked in time at that moment.
             */
            const checkKeyHold: (key: Exclude<KeyboardKey, "None">) => bool
        }

        namespace mouse {
            /**
             * Checks if a mouse button is currently down.
             * @param button - The mouse button to check.
             * @returns Whether the mouse button is currently down.
             */
            const checkButtonDown: (button: MouseButton) => bool

            /**
             * Checks if a mouse button is currently up.
             * @param button - The mouse button to check.
             * @returns Whether the mouse button is currently up.
             */
            const checkButtonUp: (button: MouseButton) => bool

            /**
             * Checks if a mouse button is currently being held down.
             * @param button - The mouse button to check.
             * @returns Whether the mouse button is currently being held down.
             */
            const checkButtonHold: (button: MouseButton) => bool

            /**
             * Gets the mouse movement delta since the last frame.
             * @returns The mouse movement delta.
             */
            const getMoveDelta: () => Float2

            /**
             * Gets the mouse scroll delta since the last frame.
             * @returns The mouse scroll delta.
             */
            const getScrollDelta: () => Float2
        }

        namespace gamePad {
            /**
             * Checks if a game pad button is currently down.
             * @param button - The game pad button to check.
             * @returns Whether the game pad button is currently down.
             */
            const checkButtonDown: (button: GamePadButton) => bool

            /**
             * Checks if a game pad button is currently up.
             * @param button - The game pad button to check.
             * @returns Whether the game pad button is currently up.
             */
            const checkButtonUp: (button: GamePadButton) => bool

            /**
             * Checks if a game pad button is currently being held down.
             * @param button - The game pad button to check.
             * @returns Whether the game pad button is currently being held down.
             */
            const checkButtonHold: (button: GamePadButton) => bool

            /**
             * Gets the D pad value.
             * @returns The D pad value.
             */
            const getDPadValue: () => Float2

            /**
             * Gets the left stick value.
             * @returns The left stick value.
             */
            const getLeftStickValue: () => Float2

            /**
             * Gets the right stick value.
             * @returns The right stick value.
             */
            const getRightStickValue: () => Float2
        }

        /**
         * Disables a player key, as known as a key that can be used to control the player ball.
         * @returns
         */
        const disablePlayerKey: (playerKeyName: PlayerKey) => void

        /**
         * Enables a player key, as known as a key that can be used to control the player ball.
         * @returns
         */
        const enablePlayerKey: (playerKeyName: PlayerKey) => void

        /**
         * Gets the keyboard key associated with a player key, as known as a key that can be used to control the player ball.
         * @returns The keyboard key associated with the player key. If there is no keyboard key associated with the player key, returns `"None"`.
         */
        const getPlayerKey: (playerKeyName: PlayerKey) => Exclude<KeyboardKey, "Enter" | "Escape">
    }
}
