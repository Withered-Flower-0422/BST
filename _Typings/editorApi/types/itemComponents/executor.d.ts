declare module "editor:type" {
    type ExecutorData = {
        /**
         * @description BME path to the script
         */
        ScriptPath: string
    }

    type ExecutorMethod = {
        [key: string | symbol]: never
    }
}
