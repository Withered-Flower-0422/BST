// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "editor:module" {
    namespace console {
        const log: {
            /**
             * Logs a message to the console.
             * @param data - The data to log.
             * @returns
             */
            (...data: any[]): void
        }

        const error: {
            /**
             * Logs an error message to the console.
             * @param data - The data to log.
             * @returns
             */
            (...data: any[]): void
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
