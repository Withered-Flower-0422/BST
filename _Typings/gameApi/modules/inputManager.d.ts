// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:module" {
    type KeyboardKey =
        | "Space"
        | "Enter"
        | "Tab"
        | "Backquote"
        | "Quote"
        | "Semicolon"
        | "Comma"
        | "Period"
        | "Slash"
        | "Backslash"
        | "LeftBracket"
        | "RightBracket"
        | "Minus"
        | "Equals"
        | "A"
        | "B"
        | "C"
        | "D"
        | "E"
        | "F"
        | "G"
        | "H"
        | "I"
        | "J"
        | "K"
        | "L"
        | "M"
        | "N"
        | "O"
        | "P"
        | "Q"
        | "R"
        | "S"
        | "T"
        | "U"
        | "V"
        | "W"
        | "X"
        | "Y"
        | "Z"
        | "Digit1"
        | "Digit2"
        | "Digit3"
        | "Digit4"
        | "Digit5"
        | "Digit6"
        | "Digit7"
        | "Digit8"
        | "Digit9"
        | "Digit0"
        | "LeftShift"
        | "RightShift"
        | "LeftAlt"
        | "RightAlt"
        | "AltGr=RightAlt"
        | "LeftCtrl"
        | "RightCtrl"
        | "LeftMeta"
        | "RightMeta"
        | "LeftWindows"
        | "RightWindows"
        | "LeftApple"
        | "RightApple"
        | "LeftCommand"
        | "RightCommand"
        | "ContextMenu"
        | "Escape"
        | "LeftArrow"
        | "RightArrow"
        | "UpArrow"
        | "DownArrow"
        | "Backspace"
        | "PageDown"
        | "PageUp"
        | "Home"
        | "End"
        | "Insert"
        | "Delete"
        | "CapsLock"
        | "NumLock"
        | "PrintScreen"
        | "ScrollLock"
        | "Pause"
        | "NumpadEnter"
        | "NumpadDivide"
        | "NumpadMultiply"
        | "NumpadPlus"
        | "NumpadMinus"
        | "NumpadPeriod"
        | "NumpadEquals"
        | "Numpad0"
        | "Numpad1"
        | "Numpad2"
        | "Numpad3"
        | "Numpad4"
        | "Numpad5"
        | "Numpad6"
        | "Numpad7"
        | "Numpad8"
        | "Numpad9"
        | "F1"
        | "F2"
        | "F3"
        | "F4"
        | "F5"
        | "F6"
        | "F7"
        | "F8"
        | "F9"
        | "F10"
        | "F11"
        | "F12"
        | "OEM1"
        | "OEM2"
        | "OEM3"
        | "OEM4"
        | "OEM5"

    type MouseButton = "Left" | "Middle" | "Right"

    type GamePadButton =
        | "DpadUp"
        | "DpadDown"
        | "DpadLeft"
        | "DpadRight"
        | "North"
        | "East"
        | "South"
        | "West"
        | "LeftStick"
        | "RightStick"
        | "LeftShoulder"
        | "RightShoulder"
        | "Start"
        | "Select"
        | "LeftTrigger"
        | "RightTrigger"
        | "X"
        | "Y"
        | "A"
        | "B"
        | "Cross"
        | "Square"
        | "Triangle"
        | "Circle"

    type PlayerKey =
        | "MoveForward"
        | "MoveBackward"
        | "MoveLeft"
        | "MoveRight"
        | "ViewClockwiseRotate"
        | "ViewCounterclockwiseRotate"
        | "CameraOverlook"
        | "FreeLookMoveForward"
        | "FreeLookMoveBackward"
        | "FreeLookMoveLeft"
        | "FreeLookMoveRight"
        | "FreeLookLockView"
        | "FreeLookToggleFirstPersonView"

    namespace inputManager {
        namespace keyboard {
            /**
             * Checks if a key is currently down.
             * @param key - The key to check.
             * @returns Whether the key is currently down.
             */
            const checkKeyDown: (key: KeyboardKey) => bool

            /**
             * Checks if a key is currently up.
             * @param key - The key to check.
             * @returns Whether the key is currently up.
             */
            const checkKeyUp: (key: KeyboardKey) => bool

            /**
             * Checks if a key is currently being held down.
             * @param key - The key to check.
             * @returns Whether the key is currently being held down.
             */
            const checkKeyHold: (key: KeyboardKey) => bool
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
        const getPlayerKey: (playerKeyName: PlayerKey) => KeyboardKey | "None"
    }
}
