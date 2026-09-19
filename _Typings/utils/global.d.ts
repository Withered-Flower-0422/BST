// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "global" {
    import type { ScriptPath } from "path"

    global {
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
