// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "editor:module" {
    import { SceneObject, SceneObjectType } from "editor:type"
    import { AssertGuid, AssertGuids } from "guid"
    import { AssertPath } from "path"
    import { Float3 } from "basicData"

    namespace scene {
        /**
         * Gets all the objects in the scene.
         * @returns An array of all the objects in the scene.
         */
        const getAllObjects: () => SceneObject[]

        /**
         * Gets an object by its guid.
         * @param guid - The guid string of the object to get.
         * @returns The object with the given guid, or `null` if the object does not exist.
         */
        const getObject: <S extends string>(guid: AssertGuid<S>) => SceneObject | null

        /**
         * Gets multiple objects by their guids.
         * @param guids - The guid strings in an array of the objects to get.
         * @returns An array of the objects with the given guids.
         */
        const getObjects: <const S extends string[]>(guids: AssertGuids<S>) => { [P in keyof S]: SceneObject }

        /**
         * Destroys an object by its guid.
         * @param guid - The guid string of the object to destroy.
         * @returns
         */
        const destroyObject: <S extends string>(guid: AssertGuid<S>) => void

        /**
         * Destroys multiple objects by their guids.
         * @param guids - The guid strings in an array of the objects to destroy.
         * @returns
         */
        const destroyObjects: <const S extends string[]>(guids: AssertGuids<S>) => void

        /**
         * Creates a new object with the given name and type.
         * @param name - The name of the new object.
         * @param type - The type of the new object.
         * @returns The new object.
         * @NOTE -
         * - To avoid strange behaviors, **NEVER** manually create a folder or a settings object.
         */
        const createObject: <T extends SceneObjectType>(name: string, type: T) => SceneObject<T>

        /**
         * Duplicates an object by its guid.
         * @param guid - The guid string of the object to duplicate.
         * @returns The duplicated object.
         */
        const duplicateObject: <S extends string>(guid: AssertGuid<S>) => SceneObject

        /**
         * Duplicates multiple objects by their guids.
         * @param guids - The guid strings in an array of the objects to duplicate.
         * @returns An array of the duplicated objects.
         */
        const duplicateObjects: <const S extends string[]>(guids: AssertGuids<S>) => { [P in keyof S]: SceneObject }

        /**
         * Gets the selected object in the scene. If no object is selected, returns `null`.
         * If multiple objects are selected, returns the activated selected object.
         * @returns The activated selected object or `null` if no object is selected.
         */
        const getSelectedObject: () => SceneObject | null

        /**
         * Gets all the selected objects in the scene. If no object is selected, returns an empty array.
         * @returns An array of all the selected objects in the scene.
         */
        const getSelectedObjects: () => SceneObject[]

        /**
         * Sets the selection of the objects in the scene.
         * @param activatedObjectGuid - The guid string of the activated object to select. This will influence the result of `getSelectedObject()`.
         * @param selectedObjectsGuid - The guid strings in an array of all the objects to select. If not include the activated object, the activated object will be the first one in the array.
         * @returns
         */
        const setSelection: <S1 extends string, const S2 extends string[]>(
            activatedObjectGuid: AssertGuid<S1>,
            selectedObjectsGuid: AssertGuids<S2>
        ) => void

        /**
         * Gets the position of the camera.
         * @returns The position of the camera.
         */
        const getCameraPosition: () => Float3

        /**
         * Gets the pivot of the camera.
         * @returns The pivot of the camera.
         */
        const getCameraPivot: () => Float3

        /**
         * Sets the position and pivot for the camera.
         * @param position - The position to set.
         * @param pivot - The pivot to set.
         * @returns
         */
        const setCameraPositionAndPivot: (position: Float3, pivot: Float3) => void

        /**
         * Creates objects from assets in the given path.
         * @param path - The path to the item assets, in the format of `` `Items/${folder}/${name}.item` `` or `` `Meshes/${folder}/${name}.mesh` ``.
         * @returns The main object created from the assets.
         */
        const createObjectsFromAssets: <T extends string>(
            path: AssertPath<T, "Items" | "Meshes", true, false>
        ) => SceneObject<"Item">
    }
}
