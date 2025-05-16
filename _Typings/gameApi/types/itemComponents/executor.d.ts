declare module "game:type" {
    type ExecutorData = {
        /**
         * @description BME path to the script
         */
        "ScriptPath": string
    }

    type ExecutorMethod = {
        execute: GameExecute
    }
}
