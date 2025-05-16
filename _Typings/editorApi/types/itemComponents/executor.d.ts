declare module "editor:type:executor" {
    export type ExecutorData = {
        /**
         * @description BME path to the script
         */
        ScriptPath: string
    }

    export type ExecutorMethod = {
        [key: string | symbol]: never
    }
}
