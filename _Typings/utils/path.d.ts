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

    type Folder<T extends keyof AssetsSuffixMap = keyof AssetsSuffixMap> =
        `${T}/${string}`

    type Path<
        T extends keyof AssetsSuffixMap = keyof AssetsSuffixMap,
        S extends boolean = true,
        E extends boolean = true,
    > =
        | {
              [P in T]: `${P}/${string}/${string}${S extends true ? `.${AssetsSuffixMap[P]}` : ""}`
          }[T]
        | (E extends true ? "" : never)

    type AssertFolder<
        T extends string,
        P extends keyof AssetsSuffixMap = keyof AssetsSuffixMap,
    > = string extends T
        ? T
        : T extends `${P}/${infer A}`
          ? A extends ""
              ? never
              : T
          : never

    type AssertPath<
        T extends string,
        P extends keyof AssetsSuffixMap = keyof AssetsSuffixMap,
        S extends boolean = true,
        E extends boolean = true,
    > = T extends ""
        ? E extends true
            ? T
            : never
        : string extends T
          ? T
          : {
                  [K in P]: T extends `${K}/${infer A}/${infer B}${S extends true ? `.${AssetsSuffixMap[K]}` : ""}`
                      ? A extends ""
                          ? false
                          : B extends ""
                            ? false
                            : true
                      : false
              }[P] extends false
            ? never
            : T

    type AssertFolders<
        T extends readonly string[],
        P extends keyof AssetsSuffixMap = keyof AssetsSuffixMap,
    > = {
        [K in keyof T]: AssertFolder<T[K], P>
    }

    type AssertPaths<
        T extends readonly string[],
        P extends keyof AssetsSuffixMap = keyof AssetsSuffixMap,
        S extends boolean = true,
        E extends boolean = true,
    > = {
        [K in keyof T]: AssertPath<T[K], P, S, E>
    }

    // ============== alias ==============
    type ScenePath = Path<"Scenes">
    type ItemPath = Path<"Items">
    type MeshPath = Path<"Meshes">
    type TexturePath = Path<"Textures">
    type MaterialPath = Path<"Materials">
    type AudioPath = Path<"Audios">
    type ScriptPath = Path<"Scripts">
}
