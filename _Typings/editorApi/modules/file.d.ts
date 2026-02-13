// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "editor:module" {
    import { AssertPath } from "path"

    namespace file {
        /**
         * The system path to the folder where the BME assets / settings / etc. are stored.
         * @readonly
         */
        const dataDirectoryPath: string

        const exist: {
            /**
             * Checks whether the given path exists.
             * @param path - The path to check.
             * @returns `true` if the path exists, `false` otherwise.
             */
            (path: string): bool
        }

        const readFileText: {
            /**
             * Reads the contents of the file at the given path as text.
             * @param path - The path to the file to read.
             * @returns The contents of the file as a string.
             */
            (path: string): string
        }

        const readFileBase64: {
            /**
             * Reads the contents of the file at the given path as a base64-encoded string.
             * @param path - The path to the file to read.
             * @returns The contents of the file as a base64-encoded string.
             */
            (path: string): string
        }

        const writeFileText: {
            /**
             * Writes the given text to the file at the given path.
             * @param path - The path to the file to write.
             * @param text - The text to write to the file.
             * @returns
             */
            (path: string, text: string): void
        }

        const writeFileBase64: {
            /**
             * Writes the given base64-encoded string to the file at the given path.
             * @param path - The path to the file to write.
             * @param base64 - The base64-encoded string to write to the file.
             * @returns
             */
            (path: string, base64: string): void
        }

        /** @deprecated Not implemented yet. */
        const savePreview: {
            /**
             * Saves a png preview of the item at the given path to the given path.
             * @param itemPath - The path to the item to save the preview for.
             * @param saveToPath - The path to save the preview to.
             */
            <T extends string>(
                itemPath: AssertPath<T, "Items", true, false>,
                saveToPath: string,
            ): void
        }
    }
}
