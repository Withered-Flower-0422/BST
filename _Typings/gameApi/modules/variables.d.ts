// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:module" {
    import { BuiltinVariables } from "game:type"
    import { AssertInt } from "utils"

    namespace variables {
        /**
         * @param name the name of the variable to get, if starts with `C_` it refers to a `Collection`
         * @BuiltinVariables click to see {@link BuiltinVariables | all built-in variables}
         */
        const get: <T extends string>(name: T) => T extends `C_${string}` ? int : any
        /**
         * @param name the name of the variable to set, if starts with `C_` it refers to a `Collection`
         * @param value the value to set. `Collection` values should be `int`
         * @NOTE **NEVER** name a variable starting with `C_` manually
         * @BuiltinVariables click to see {@link BuiltinVariables | all built-in variables}
         */
        const set: <T extends string, U extends int>(
            name: T,
            value: T extends `C_${string}` ? AssertInt<U> : any
        ) => void
        /**
         * @description will not clear the variables starting with `C_`
         */
        const clear: () => void
    }
}
