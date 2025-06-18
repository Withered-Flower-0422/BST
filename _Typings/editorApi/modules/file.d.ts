declare module "editor:module" {
    namespace file {
        /**
         * @description - the system path to the folder where the BME assets / settings / etc. are stored
         * - `readonly`
         */
        const dataDirectoryPath: string
        const exist: (path: string) => bool
        const readFileText: (path: string) => string
        const readFileBase64: (path: string) => string
        const writeFileText: (path: string, text: string) => void
        const writeFileBase64: (path: string, base64: string) => void
    }
}
