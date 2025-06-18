declare module "game:module" {
    namespace console {
        /**
         * @description message only shown in `Testmap Mode`
         * @NOTE unlike js intrinsic `console.log()`, this function only takes one argument, and some data types may not be printed correctly
         */
        const log: (data: any) => void
        /**
         * @description message only shown in `Testmap Mode`
         * @NOTE this function only takes one argument, and some data types may not be printed correctly
         */
        const error: (data: any) => void
        /**
         * @description message always shown
         * @NOTE this function only takes one argument, and some data types may not be printed correctly
         */
        const message: (data: any) => void
        const clear: () => void
    }
}
