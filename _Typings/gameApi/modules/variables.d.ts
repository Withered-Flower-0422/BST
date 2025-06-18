declare module "game:module" {
    type builtInCollections =
        | "Score"
        | "Cure"
        | "Recover"
        | "Froze"
        | "Electric"
        | "Key_Red"
        | "Key_Blue"
        | "Key_Green"
        | "Key_Cyan"
        | "Key_Magenta"
        | "Key_Yellow"

    namespace variables {
        /**
         * @param name the name of the variable to get, if starts with `C_` it refers to a `Collection`
         * @builtinCollections Click to see {@link builtInCollections}
         */
        const get: <T extends string>(name: T) => T extends `C_${string}` ? int : any
        /**
         * @param name the name of the variable to set, if starts with `C_` it refers to a `Collection`
         * @param value the value to set. `Collection` values should be `int`
         * @NOTE **NEVER** name a variable starting with `C_` manually
         * @builtinCollections Click to see {@link builtInCollections}
         */
        const set: <T extends string>(name: T, value: T extends `C_${string}` ? int : any) => void
        /**
         * @description will not clear the variables starting with `C_`
         */
        const clear: () => void
    }
}
