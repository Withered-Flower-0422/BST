declare module "editor:module:console" {
    export namespace console {
        const log: (...data: any[]) => void
        const error: (...data: any[]) => void
        const clear: () => void
    }
}
