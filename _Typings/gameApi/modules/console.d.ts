// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:module" {
    namespace console {
        const log: {
            /**
             * Logs a debug message to the console.
             * @param data The data to log.
             * @NOTE -
             * - The message only shown in `Testmap Mode`.
             * - Unlike `console.log()` in *browser* or *node*, this function only takes one argument.
             * - If `data` is an object, it logs `[object Object]` by default unless `toString()` is overridden.
             * - Example:
             * ```ts
             * class A {}
             * class B { toString() { return 42 } }
             * console.log(new A()) // log: [object Object]
             * console.log(new B()) // log: 42
             * ```
             */
            <T>(data: T): void
        }

        const error: {
            /**
             * Logs an error message to the console.
             * @param data The data to log.
             * @NOTE -
             * - The message only shown in `Testmap Mode`.
             * - This function only takes one argument.
             * - If `data` is an object, it logs `[object Object]` by default unless `toString()` is overridden.
             * - Example:
             * ```ts
             * class A {}
             * class B { toString() { return 42 } }
             * console.log(new A()) // log: [object Object]
             * console.log(new B()) // log: 42
             * ```
             */
            <T>(data: T): void
        }

        const message: {
            /**
             * Logs a message to the console.
             * @param data The data to log.
             * @NOTE -
             * - The message shown in both `Testmap Mode` and `Game Mode`, which means players can see it during gameplay.
             * - This function only takes one argument.
             * - If `data` is an object, it logs `[object Object]` by default unless `toString()` is overridden.
             * - Example:
             * ```ts
             * class A {}
             * class B { toString() { return 42 } }
             * console.log(new A()) // log: [object Object]
             * console.log(new B()) // log: 42
             * ```
             */
            <T>(data: T): void
        }

        const clear: {
            /** Clears the console. */
            (): void
        }
    }
}
