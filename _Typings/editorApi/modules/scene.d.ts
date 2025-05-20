declare module "editor:module" {
    import { SceneObject, SceneObjectType } from "editor:type"
    import { AssertGuid, AssertGuids } from "guid"

    namespace scene {
        const getAllObjects: () => SceneObject<SceneObjectType>[]
        const getObject: <S extends string>(guid: AssertGuid<S>) => SceneObject<SceneObjectType>
        const getObjects: <S extends readonly string[]>(guids: AssertGuids<S>) => SceneObject<SceneObjectType>[]
        const destroyObject: <S extends string>(guid: AssertGuid<S>) => void
        const destroyObjects: <S extends readonly string[]>(guids: AssertGuids<S>) => void
        const createObject: <T extends SceneObjectType>(name: string, type: T) => SceneObject<T>
        const duplicateObject: <S extends string>(guid: AssertGuid<S>) => SceneObject<SceneObjectType>
        const duplicateObjects: <S extends readonly string[]>(guids: AssertGuids<S>) => SceneObject<SceneObjectType>[]
        const getSelectedObject: () => SceneObject<SceneObjectType>
        const getSelectedObjects: () => SceneObject<SceneObjectType>[]
        const setSelection: (activatedObjectGuid: string, selectedObjectsGuid: string[]) => void
        const getCameraPosition: () => Float3
        const getCameraPivot: () => Float3
        const setCameraPositionAndPivot: (position: Float3, pivot: Float3) => void
    }
}
