# Changelog

All notable changes to this project will be documented in this file.

## v1.0.7 (2025-06-07)

-   Reformatted the code to conform to the Prettier code style.
-   Fixed mounts of typos.
-   Added a new type `IntRange` in `utils.d.ts` and applied it to those parameters that accept a range of integers.
-   Restricted the value range of `levelManager.cameraMode` to `0 | 1 | 2`.
-   Restricted the value range of `levelManager.cameraDirection` to `0 | 1 | 2 | 3`.
-   Restricted the value range of the parameter `which` of `uiElement.onPointerClick()` to `0 | 1 | 2`.
-   let `AssertGuid` accept `string` as a valid value when the type parameter is not `const`.
-   Now `getTransform()` returns `[Float3, Float3, Float3]` instead of `Float3[]`.
-   Added a new type `Tuple` in `utils.d.ts` and applied it where needed.
-   Now the type of `triggeredItem` of `OnTrigger` is `Item | Player` instead of `Item`.

## v1.0.6 (2025-05-29)

-   Optimized the structure of the union types.
-   Roughly screened out the components' data that can be set during the game runtime.
-   Disallowed to add or remove a `Settings` component to an `Item`.

## v1.0.5 (2025-05-28)

-   Renamed the property `GetGlobalUVMat` to `TryGetGlobalUVMat` in `RendererData` type.
-   Added a file `utils.d.ts`, in where a new type `Mutable` is defined for future use.

## v1.0.4 (2025-05-20)

-   Fixed a mistake that `hideTipDelay()` and `hideAllTipsDelay()` methods were in the wrong module `inputManager` instead of `levelManager`.
-   Now the methods that taken item guid(s) as a parameter can check if the guid(s) conform(s) to the format.

## v1.0.3 (2025-05-19)

-   Added `CustomBall` and `Place` enums to `HierarchyIcon`.
-   Renamed the `CustomBall` property in type `CustomBall` to `CustomBalls`.
-   Added `Landscaping` type.
-   Fixed the return type of the method `removeComponent()` (now returns `void`).
-   Optimized some descriptions of methods and properties.

## v1.0.2 (2025-05-18)

-   Added a [`CHANGELOG`](./CHANGELOG.md) file.
-   Fixed the missing methods (`play()` and `stop()`) in [`Tween`](./_Typings/gameApi/types/tween.d.ts) type.

## v1.0.1 (2025-05-17)

-   Optimized the code structure.
-   Fixed some known bugs and typos.

## v1.0.0 (2025-05-16)

-   Initial release.
