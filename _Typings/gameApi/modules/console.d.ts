// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:module" {
    namespace console {
        /**
         * Logs a debug message to the console.
         * @returns
         * @NOTE -
         * - The message only shown in `Testmap Mode`.
         * - Unlike js intrinsic `console.log()`, this function only takes one argument, and some data types may not be printed correctly.
         */
        const log: (data: any) => void

        /**
         * Logs an error message to the console.
         * @returns
         * @NOTE -
         * - The message only shown in `Testmap Mode`.
         * - This function only takes one argument, and some data types may not be printed correctly.
         */
        const error: (data: any) => void

        /**
         * Logs a message to the console.
         * @returns
         * @NOTE -
         * - The message always shown.
         * - This function only takes one argument, and some data types may not be printed correctly.
         */
        const message: (data: any) => void

        /**
         * Clears the console.
         * @returns
         */
        const clear: () => void
    }
}
