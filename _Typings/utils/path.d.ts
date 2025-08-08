// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "path" {
    type AssetsSuffixMap = {
        Scenes: "scene"
        Items: "item"
        Meshes: "mesh"
        Textures: "tex"
        Materials: "mat"
        Audios: "audio"
        Scripts: "js"
    }

    type Folder<T extends keyof AssetsSuffixMap> = `${T}/${string}`

    type Path<T extends keyof AssetsSuffixMap, S extends boolean = true> =
        | {
              [P in T]: `${P}/${string}/${string}${S extends true ? `.${AssetsSuffixMap[P]}` : ""}`
          }[T]
        | ""

    type ValidateFolder<T extends string, P extends keyof AssetsSuffixMap> = string extends T
        ? true
        : T extends `${P}/${infer A}`
        ? A extends ""
            ? false
            : true
        : false

    type ValidatePath<T extends string, P extends keyof AssetsSuffixMap, S extends boolean = true> = T extends ""
        ? true
        : string extends T
        ? true
        : {
              [K in P]: T extends `${K}/${infer A}/${infer B}${S extends true ? `.${AssetsSuffixMap[K]}` : ""}`
                  ? A extends ""
                      ? false
                      : B extends ""
                      ? false
                      : true
                  : false
          }[P] extends false
        ? false
        : true

    type ValidateFolders<T extends readonly string[], P extends keyof AssetsSuffixMap> = T extends readonly [
        infer F extends string,
        ...infer R extends readonly string[]
    ]
        ? ValidateFolder<F, P> extends false
            ? false
            : ValidateFolders<R, P>
        : true

    type ValidatePaths<
        T extends readonly string[],
        P extends keyof AssetsSuffixMap,
        S extends boolean = true
    > = T extends readonly [infer F extends string, ...infer R extends readonly string[]]
        ? ValidatePath<F, P, S> extends false
            ? false
            : ValidatePaths<R, P, S>
        : true

    type AssertFolder<T extends string, P extends keyof AssetsSuffixMap> = ValidateFolder<T, P> extends true ? T : never

    type AssertPath<T extends string, P extends keyof AssetsSuffixMap, S extends boolean = true> = ValidatePath<
        T,
        P,
        S
    > extends true
        ? T
        : never

    type AssertFolders<T extends readonly string[], P extends keyof AssetsSuffixMap> = ValidateFolders<
        T,
        P
    > extends true
        ? T
        : never

    type AssertPaths<
        T extends readonly string[],
        P extends keyof AssetsSuffixMap,
        S extends boolean = true
    > = ValidatePaths<T, P, S> extends true ? T : never

    // ============== alias ==============
    type ScenePath = Path<"Scenes">
    type ItemPath = Path<"Items">
    type MeshPath = Path<"Meshes">
    type TexturePath = Path<"Textures">
    type MaterialPath = Path<"Materials">
    type AudioPath = Path<"Audios">
    type ScriptPath = Path<"Scripts">
}
