declare module "editor:module" {
    import { SceneObject, SceneObjectType } from "editor:type"

    namespace scene {
        const getAllObjects: () => SceneObject<SceneObjectType>[]
        const getObject: (guid: string) => SceneObject<SceneObjectType>
        const getObjects: (guids: string[]) => SceneObject<SceneObjectType>[]
        const destroyObject: (guid: string) => void
        const destroyObjects: (guids: string[]) => void
        const createObject: <T extends SceneObjectType>(name: string, type: T) => SceneObject<T>
        const duplicateObject: (guid: string) => SceneObject<SceneObjectType>
        const duplicateObjects: (guids: string[]) => SceneObject<SceneObjectType>[]
        const getSelectedObject: () => SceneObject<SceneObjectType>
        const getSelectedObjects: () => SceneObject<SceneObjectType>[]
        const setSelection: (activatedObjectGuid: string, selectedObjectsGuid: string[]) => void
        const getCameraPosition: () => Float3
        const getCameraPivot: () => Float3
        const setCameraPositionAndPivot: (position: Float3, pivot: Float3) => void
    }
}
