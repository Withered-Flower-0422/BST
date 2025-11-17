// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "editor:alias" {
    import { SceneObject } from "editor:type"
    export { SceneObject }

    /** @deprecated */
    export type SceneFolder = SceneObject<"Folder">
    export type SceneItem = SceneObject<"Item">
    export type SceneSettings = SceneObject<"Settings">
}
