// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "editor:alias" {
    import { SceneObject } from "editor:type"

    type SceneFolder = SceneObject<"Folder">
    type SceneItem = SceneObject<"Item">
    type SceneSettings = SceneObject<"Settings">
}
