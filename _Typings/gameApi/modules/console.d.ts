// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:module" {
    namespace console {
        const log: {
            /**
             * Logs a debug message to the console.
             * @param data - The data to log.
             * @returns
             * @NOTE -
             * - The message only shown in `Testmap Mode`.
             * - Unlike `console.log()` in *browser* or *node*, this function only takes one argument, and some data types may not be printed correctly.
             */
            <T>(data: T): void
        }

        const error: {
            /**
             * Logs an error message to the console.
             * @param data - The data to log.
             * @returns
             * @NOTE -
             * - The message only shown in `Testmap Mode`.
             * - This function only takes one argument, and some data types may not be printed correctly.
             */
            <T>(data: T): void
        }

        const message: {
            /**
             * Logs a message to the console.
             * @param data - The data to log.
             * @returns
             * @NOTE -
             * - The message always shown.
             * - This function only takes one argument, and some data types may not be printed correctly.
             */
            <T>(data: T): void
        }

        const clear: {
            /**
             * Clears the console.
             * @returns
             */
            (): void
        }
    }
}
