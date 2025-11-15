// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:module" {
    import { BuiltinVariable } from "game:type"
    import { AssertInt } from "utils"

    namespace variables {
        const get: {
            /**
             * Gets the number of the `Collection`.
             * @param name - The name of the `Collection`.
             * @returns The number of the `Collection`.
             * @BuiltinVariable Click to see {@link BuiltinVariable | all builtin variables}.
             */
            (name: BuiltinVariable): int | null

            /**
             * Gets the number of the `Collection`.
             * @param name - The name of the `Collection`.
             * @returns The number of the `Collection`.
             * @BuiltinVariable Click to see {@link BuiltinVariable | all builtin variables}.
             */
            (name: `C_${string}`): int | null

            /**
             * Gets the value of a variable.
             * @param name - The name of the variable to get.
             * @returns The value of the variable.
             */
            (name: string): any

            /**
             * Gets the value of a variable.
             * @param name - The name of the variable to get.
             * @returns The value of the variable.
             */
            <O extends object, T extends keyof O>(name: T): O[T]
        }

        const set: {
            /**
             * Sets the number of the `Collection`.
             * @param name - The name of the `Collection`.
             * @param value - The value to set.
             * @returns
             * @BuiltinVariable Click to see {@link BuiltinVariable | all built-in variables}.
             * @NOTE -
             * - **NEVER** name a variable starting with `C_` manually.
             * - The `Collection` values can be negative if you really need.
             */
            <T extends int>(name: BuiltinVariable, value: AssertInt<T>): void

            /**
             * Sets the number of the `Collection`.
             * @param name - The name of the `Collection`.
             * @param value - The value to set.
             * @returns
             * @BuiltinVariable Click to see {@link BuiltinVariable | all built-in variables}.
             * @NOTE -
             * - **NEVER** name a variable starting with `C_` manually.
             * - The `Collection` values can be negative if you really need.
             */
            <T extends int>(name: `C_${string}`, value: AssertInt<T>): void

            /**
             * Sets the value of a variable.
             * @param name - The name of the variable to set.
             * @param value - The value to set.
             * @returns
             */
            <T extends string, U extends int>(name: T, value: T extends `C_${string}` ? AssertInt<U> : any): void

            /**
             * Sets the value of a variable.
             * @param name - The name of the variable to set.
             * @param value - The value to set.
             * @returns
             */
            <O extends object, T extends keyof O>(name: T, value: O[T]): void
        }

        /**
         * Clears all variables except those starting with `C_`.
         * @returns
         */
        const clear: () => void
    }
}

declare module "__future__" {
    import { BuiltinVariable } from "game:type"
    import { AssertInt } from "utils"
    import { KeyboardKey, KeyboardKeyEnum } from "keys"

    namespace variables {
        const get: {
            /**
             * Gets the number of the `Collection`.
             * @param name - The name of the `Collection`.
             * @returns The number of the `Collection`.
             * @BuiltinVariable Click to see {@link BuiltinVariable | all builtin variables}.
             */
            (name: BuiltinVariable): int | null

            /**
             * Gets the number of the `Collection`.
             * @param name - The name of the `Collection`.
             * @returns The number of the `Collection`.
             * @BuiltinVariable Click to see {@link BuiltinVariable | all builtin variables}.
             */
            (name: `C_${string}`): int | null

            /**
             * Gets the key of a keyboard key.
             * @param name - The name of the keyboard key.
             * @returns The key of the keyboard key.
             * @KeyBoardKey Click to see {@link KeyboardKeyEnum | all keyboard keys}.
             */
            (name: `K_${string}`): KeyboardKey | null

            /**
             * Gets the value of a variable.
             * @param name - The name of the variable to get.
             * @returns The value of the variable.
             */
            (name: string): any

            /**
             * Gets the value of a variable.
             * @param name - The name of the variable to get.
             * @returns The value of the variable.
             */
            <O extends object, T extends keyof O>(name: T): O[T]
        }

        const set: {
            /**
             * Sets the number of the `Collection`.
             * @param name - The name of the `Collection`.
             * @param value - The value to set.
             * @returns
             * @BuiltinVariable Click to see {@link BuiltinVariable | all built-in variables}.
             * @NOTE -
             * - **NEVER** name a variable starting with `C_` manually.
             * - The `Collection` values can be negative if you really need.
             */
            <T extends int>(name: BuiltinVariable, value: AssertInt<T>): void

            /**
             * Sets the number of the `Collection`.
             * @param name - The name of the `Collection`.
             * @param value - The value to set.
             * @returns
             * @BuiltinVariable Click to see {@link BuiltinVariable | all built-in variables}.
             * @NOTE -
             * - **NEVER** name a variable starting with `C_` manually.
             * - The `Collection` values can be negative if you really need.
             */
            <T extends int>(name: `C_${string}`, value: AssertInt<T>): void

            /**
             * Sets the value of a variable.
             * @param name - The name of the variable to set.
             * @param value - The value to set.
             * @returns
             * @NOTE -
             * - Custom key values are not settable.
             */
            <T extends string, U extends int>(
                name: T extends `K_${string}` ? never : T,
                value: T extends `C_${string}` ? AssertInt<U> : T extends `K_${string}` ? never : any
            ): void

            /**
             * Sets the value of a variable.
             * @param name - The name of the variable to set.
             * @param value - The value to set.
             * @returns
             * @NOTE -
             * - Custom key values are not settable.
             */
            <O extends object, T extends keyof O>(name: T, value: O[T]): void
        }

        /**
         * Clears all variables except those starting with `C_` and `K_`.
         * @returns
         */
        const clear: () => void
    }
}
