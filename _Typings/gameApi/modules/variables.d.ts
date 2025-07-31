// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:module" {
    import { BuiltinVariables } from "game:type"
    import { AssertInt } from "utils"

    namespace variables {
        /**
         * Gets the value of a variable.
         * @param name - The name of the variable to get, if starts with `C_` it refers to a `Collection`.
         * @returns The value of the variable. `Collection` values are `int`.
         * @BuiltinVariables Click to see {@link BuiltinVariables | all built-in variables}.
         */
        const get: <T extends string>(name: T) => T extends `C_${string}` ? int : any

        /**
         * Sets the value of a variable.
         * @param name - The name of the variable to set, if starts with `C_` it refers to a `Collection`.
         * @param value - The value to set. `Collection` values should be `int`.
         * @returns
         * @BuiltinVariables Click to see {@link BuiltinVariables | all built-in variables}.
         * @NOTE -
         * - **NEVER** name a variable starting with `C_` manually.
         */
        const set: <T extends string, U extends int>(
            name: T,
            value: T extends `C_${string}` ? AssertInt<U> : any
        ) => void

        /**
         * Clears all variables except those starting with `C_`.
         * @returns
         */
        const clear: () => void
    }
}
