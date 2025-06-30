declare module "editor:module" {
    import { SceneObject, SceneObjectType } from "editor:type"
    import { AssertGuid, AssertGuids } from "guid"
    import { Tuple } from "utils"

    namespace scene {
        const getAllObjects: () => SceneObject<SceneObjectType>[]
        /**
         * @param guid `string`: the guid string of the object to get
         */
        const getObject: <S extends string>(guid: AssertGuid<S>) => SceneObject<SceneObjectType>
        /**
         * @param guids `string[]`: the guid strings in an array of the objects to get
         */
        const getObjects: <const S extends readonly string[]>(
            guids: AssertGuids<S>
        ) => Tuple<SceneObject<SceneObjectType>, S["length"]>
        /**
         * @param guid `string`: the guid string of the object to destroy
         */
        const destroyObject: <S extends string>(guid: AssertGuid<S>) => void
        /**
         * @param guids `string[]`: the guid strings in an array of the objects to destroy
         */
        const destroyObjects: <const S extends readonly string[]>(guids: AssertGuids<S>) => void
        /**
         * @NOTE never manually create a folder or a settings object to avoid bugs
         */
        const createObject: <T extends SceneObjectType>(name: string, type: T) => SceneObject<T>
        /**
         * @param guid `string`: the guid string of the object to duplicate
         */
        const duplicateObject: <S extends string>(guid: AssertGuid<S>) => SceneObject<SceneObjectType>
        /**
         * @param guids `string[]`: the guid strings in an array of the objects to duplicate
         */
        const duplicateObjects: <const S extends readonly string[]>(
            guids: AssertGuids<S>
        ) => Tuple<SceneObject<SceneObjectType>, S["length"]>
        const getSelectedObject: () => SceneObject<SceneObjectType>
        const getSelectedObjects: () => SceneObject<SceneObjectType>[]
        /**
         * @param activatedObjectGuid `string`: the guid string of the main object to select
         * @param selectedObjectsGuid `string[]`: the guid strings in an array of other objects to select
         */
        const setSelection: <S1 extends string, const S2 extends readonly string[]>(
            activatedObjectGuid: AssertGuid<S1>,
            selectedObjectsGuid: AssertGuids<S2>
        ) => void
        const getCameraPosition: () => Float3
        const getCameraPivot: () => Float3
        const setCameraPositionAndPivot: (position: Float3, pivot: Float3) => void
    }
}
