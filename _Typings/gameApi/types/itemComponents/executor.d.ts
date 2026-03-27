// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:type" {
    import { Path } from "path"

    type ExecutorData = {
        /** BME path to the script. */
        readonly ScriptPath: Path<"Scripts">
    }

    type ExecutorMethod = {
        /**
         * Executed when `execute()` is called by another executor in the game.
         * @param args - The arguments passed in by the executor that called `execute()`.
         * @returns
         */
        execute: GameExecute
    }
}
