// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:type" {
    enum VariableType {
        String = 0,
        Int = 1,
        Bool = 2,
        Bool3 = 3,
        Float = 4,
        Float2 = 5,
        Float3 = 6,
        Float4 = 7,
        ColorRGBA = 8,
        Trans = 9,
        AssetReference = 10,
        ObjectReference = 11,
        StringArray = 12,
        IntArray = 13,
        BoolArray = 14,
        Bool3Array = 15,
        FloatArray = 16,
        Float2Array = 17,
        Float3Array = 18,
        Float4Array = 19,
        ColorRGBAArray = 20,
        TransArray = 21,
        AssetReferenceArray = 22,
        ObjectReferenceArray = 23,
    }

    type ExecutorVariable = {
        VariableName: string
        VariableType: VariableType
        StringVar: string
        IntVar: int
        BoolVar: bool
        Bool3Var: Bool3
        FloatVar: float
        Float2Var: Float2
        Float3Var: Float3
        Float4Var: Float4
        ColorRGBAVar: ColorRGBA
        TransVar: Trans
        AssetReferenceVar: string
        ObjectReferenceVar: string
        StringArrayVar: string[]
        IntArrayVar: int[]
        BoolArrayVar: bool[]
        Bool3ArrayVar: Bool3[]
        FloatArrayVar: float[]
        Float2ArrayVar: Float2[]
        Float3ArrayVar: Float3[]
        Float4ArrayVar: Float4[]
        ColorRGBAArrayVar: ColorRGBA[]
        TransArrayVar: Trans[]
        AssetReferenceArrayVar: string[]
        ObjectReferenceArrayVar: string[]
    }

    type ExecutorData = {
        /**
         * BME path to the script.
         */
        readonly ScriptPath: string
        readonly ExecutorVariables: ExecutorVariable[]
    }

    type ExecutorMethod = {
        /**
         * Executed when `execute()` is called by another executor in the game.
         * @param data - The data passed in by the executor that called `execute()`.
         * @returns
         */
        execute: GameExecute
    }
}
