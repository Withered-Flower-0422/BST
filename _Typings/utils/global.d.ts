// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "global" {
    import { IsUnique as IU, ExpectTrue as ET } from "utils"
    import type { ScriptPath } from "path"

    global {
        /** Helper type to check if a list of items is unique and not contain any `any` type. */
        type IsUnique<T extends readonly any[]> = IU<T, false>

        /** Helper type to check if a type is `true`. */
        type ExpectTrue<T extends true> = ET<T>

        /**
         * Default type for executor or road generator variables `$`.
         * Override this type to define variable types set on the executor.
         */
        type $ = { [key: string]: Any; [key: symbol]: never }
    }

    // Declare the type of `import.meta`.
    global {
        interface ImportMeta {
            url: Exclude<ScriptPath, "">
        }
    }
}
