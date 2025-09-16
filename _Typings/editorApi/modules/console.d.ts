// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "editor:module" {
    namespace console {
        /**
         * Logs a message to the console.
         * @param data - The data to log.
         * @returns
         */
        const log: (...data: any[]) => void

        /**
         * Logs an error message to the console.
         * @param data - The data to log.
         * @returns
         */
        const error: (...data: any[]) => void

        /**
         * Clears the console.
         * @returns
         */
        const clear: () => void
    }
}
