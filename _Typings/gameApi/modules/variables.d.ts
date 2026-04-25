// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:module" {
    import { BuiltinVariable, CollectionVariable } from "game:type"
    import { AssertRange } from "utils"

    namespace variables {
        const get: {
            /**
             * Gets the value of a variable.
             * @param name The name of the variable to get.
             * @returns The value of the variable.
             */
            <O extends object, T extends keyof O>(name: T): O[T]

            /**
             * Gets the number of the `Collection`.
             * @param name The name of the `Collection`.
             * @returns The number of the `Collection`.
             * @range `-2147483648 ~ 2147483647`
             * @BuiltinVariable Click to see {@link BuiltinVariable | all builtin variables}.
             */
            (name: CollectionVariable): int | null

            /**
             * Gets the value of a variable.
             * @param name The name of the variable to get.
             * @returns The value of the variable.
             */
            (name: string): any
        }

        const set: {
            /**
             * Sets the value of a variable.
             * @param name The name of the variable to set.
             * @param value The value to set.
             */
            <O extends object, T extends keyof O>(name: T, value: O[T]): void

            /**
             * Sets the number of the `Collection`.
             * @param name The name of the `Collection`.
             * @param value The value to set.
             * @range `-2147483648 ~ 2147483647`
             * @BuiltinVariable Click to see {@link BuiltinVariable | all built-in variables}.
             * @NOTE -
             * - **NEVER** name a variable starting with `C_` manually.
             * - The `Collection` values can be negative if you really need.
             */
            <T extends int>(
                name: CollectionVariable,
                value: AssertRange<T, -2147483648, 2147483647, true>,
            ): void

            /**
             * Sets the value of a variable.
             * @param name The name of the variable to set.
             * @param value The value to set.
             */
            <T extends string>(
                name: T,
                value: T extends `C_${string}` ? never : any,
            ): void
        }

        const clear: {
            /** Clears all variables except those starting with `C_`. */
            (): void
        }
    }
}

declare module "__future__" {
    import { BuiltinVariable, CollectionVariable } from "game:type"
    import { AssertRange } from "utils"
    import { KeyboardKey, KeyboardKeyEnum } from "keys"

    namespace variables {
        const get: {
            /**
             * Gets the value of a variable.
             * @param name The name of the variable to get.
             * @returns The value of the variable.
             */
            <O extends object, T extends keyof O>(name: T): O[T]

            /**
             * Gets the number of the `Collection`.
             * @param name The name of the `Collection`.
             * @returns The number of the `Collection`.
             * @range `-2147483648 ~ 2147483647`
             * @BuiltinVariable Click to see {@link BuiltinVariable | all builtin variables}.
             */
            (name: CollectionVariable): int | null

            /**
             * Gets the key of a keyboard key.
             * @param name The name of the keyboard key.
             * @returns The key of the keyboard key.
             * @KeyBoardKey Click to see {@link KeyboardKeyEnum | all keyboard keys}.
             */
            (name: `K_${string}`): KeyboardKey | null

            /**
             * Gets the value of a variable.
             * @param name The name of the variable to get.
             * @returns The value of the variable.
             */
            (name: string): any
        }

        const set: {
            /**
             * Sets the value of a variable.
             * @param name The name of the variable to set.
             * @param value The value to set.
             * @NOTE -
             * - Custom key values are not settable.
             */
            <O extends object, T extends keyof O>(name: T, value: O[T]): void

            /**
             * Sets the number of the `Collection`.
             * @param name The name of the `Collection`.
             * @param value The value to set.
             * @range `-2147483648 ~ 2147483647`
             * @BuiltinVariable Click to see {@link BuiltinVariable | all built-in variables}.
             * @NOTE -
             * - **NEVER** name a variable starting with `C_` manually.
             * - The `Collection` values can be negative if you really need.
             */
            <T extends int>(
                name: CollectionVariable,
                value: AssertRange<T, -2147483648, 2147483647, true>,
            ): void

            /**
             * Sets the value of a variable.
             * @param name The name of the variable to set.
             * @param value The value to set.
             * @NOTE -
             * - Custom key values are not settable.
             */
            <T extends string>(
                name: T,
                value: T extends `C_${string}` | `K_${string}` ? never : any,
            ): void
        }

        const clear: {
            /** Clears all variables except those starting with `C_` and `K_`. */
            (): void
        }
    }
}
