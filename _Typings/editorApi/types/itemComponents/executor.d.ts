declare module "editor:type" {
    const enum VariableType {
        String = 0,
        Int = 1,
        Bool = 2,
        Bool3 = 3,
        Float = 4,
        Float2 = 5,
        Float3 = 6,
        Float4 = 7,
        ColorRGBA = 8,
        Transform = 9,
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
        TransformArray = 21,
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
        TransformVar: Transform
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
        TransformArrayVar: Transform[]
        AssetReferenceArrayVar: string[]
        ObjectReferenceArrayVar: string[]
    }

    type ExecutorData = {
        /**
         * @description BME path to the script
         */
        ScriptPath: string
        ExecutorVariables: Partial<ExecutorVariable>[]
    }

    type ExecutorMethod = {
        [key: string | symbol]: never
    }
}
