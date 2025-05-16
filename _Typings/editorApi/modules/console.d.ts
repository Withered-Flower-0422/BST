declare module "editor:module" {
    namespace console {
        const log: (...data: any[]) => void
        const error: (...data: any[]) => void
        const clear: () => void
    }
}
