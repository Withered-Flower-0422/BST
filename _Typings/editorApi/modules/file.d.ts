// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "editor:module" {
    namespace file {
        /**
         * The system path to the folder where the BME assets / settings / etc. are stored.
         * @readonly
         */
        const dataDirectoryPath: string

        /**
         * Checks whether the given path exists.
         * @param path - The path to check.
         * @returns `true` if the path exists, `false` otherwise.
         */
        const exist: (path: string) => bool

        /**
         * Reads the contents of the file at the given path as text.
         * @param path - The path to the file to read.
         * @returns The contents of the file as a string.
         */
        const readFileText: (path: string) => string

        /**
         * Reads the contents of the file at the given path as a base64-encoded string.
         * @param path - The path to the file to read.
         * @returns The contents of the file as a base64-encoded string.
         */
        const readFileBase64: (path: string) => string

        /**
         * Writes the given text to the file at the given path.
         * @param path - The path to the file to write.
         * @param text - The text to write to the file.
         */
        const writeFileText: (path: string, text: string) => void

        /**
         * Writes the given base64-encoded string to the file at the given path.
         * @param path - The path to the file to write.
         * @param base64 - The base64-encoded string to write to the file.
         */
        const writeFileBase64: (path: string, base64: string) => void
    }
}
