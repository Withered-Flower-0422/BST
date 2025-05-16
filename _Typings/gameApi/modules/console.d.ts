declare module "game:module:console" {
    export namespace console {
        /**
         * @description message only shown in `Testmap Mode`
         */
        const log: (...data: any[]) => void
        /**
         * @description message only shown in `Testmap Mode`
         */
        const error: (...data: any[]) => void
        /**
         * @description message always shown
         */
        const message: (...data: any[]) => void
        const clear: () => void
    }
}
