declare module "editor:alias" {
    import { SceneObject } from "editor:type"

    type SceneFolder = SceneObject<"Folder">
    type SceneItem = SceneObject<"Item">
    type SceneSettings = SceneObject<"Settings">
}
