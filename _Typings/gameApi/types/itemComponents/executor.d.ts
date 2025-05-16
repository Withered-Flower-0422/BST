declare module "game:type:executor" {
    export type ExecutorData = {
        /**
         * @description BME path to the script
         */
        "ScriptPath": string
    }

    export type ExecutorMethod = {
        execute: GameExecute
    }
}
