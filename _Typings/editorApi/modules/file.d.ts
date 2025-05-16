declare module "editor:module:file" {
    export namespace file {
        /**
         * @description - the system path to the "BME Pro HDRP.exe"
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
