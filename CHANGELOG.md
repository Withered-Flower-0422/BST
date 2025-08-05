# Changelog

All notable changes to this project will be documented in this file.

## v1.2.4 (2025-08-06)

-   Renamed type `IntRange` to `NonNegIntRange`.
-   Rewrote the logic of `AssertInt`.
-   Added new types `AssertNeg`, `AssertNonNeg`, `AssertNegInt`, `AssertNonNegInt`, `Assert0To1` and `Assert0To1s`, and applied them to wherever needed.
-   Added some descriptions to some functions.

## v1.2.3 (2025-08-05)

-   Added `scene.createObjectsFromAssets()`.
-   Rewrote some descriptions of functions.

## v1.2.2 (2025-08-04)

-   Added `levelManager.getConfigInputKey()` and `levelManager.getConfig()`.
-   Added a new file `keys.d.ts`, moved `KeyboardKey`, `MouseButton`, `GamePadButton` and `PlayerKey` from `inputManager.d.ts` to it, and modified some files to adapt to this change.
-   Added `enum KeyboardKeyEnum`, `enum MouseButtonEnum`, `enum GamePadButtonEnum`, and `enum PlayerKeyEnum` to `keys.d.ts`, and `KeyboardKey`, `MouseButton`, `GamePadButton` and `PlayerKey` are now computed by these enums.
-   Added `None` to `KeyboardKeyEnum`.
-   Now `inputManager.getPlayerKey()` returns `Exclude<KeyboardKey, "Enter" | "Escape">` instead of `KeyboardKey | "None"`.
-   Added a new file `localize.d.ts` where `LocalizedString` is defined.
-   Modified `CustomBallSettings` using `LocalizedString`.
-   Added new parameter `Configurations` to type `MapInfo`.

## v1.2.1 (2025-08-03)

-   Now all the components data can be imported from `editor:alias` and `game:alias`.
-   Fixed some typos.

## v1.2.0 (2025-07-31)

-   Rewrote all the descriptions of functions and some properties and types.

## v1.1.9 (2025-07-29)

-   Added a new type `AssertInt` and applied it to wherever needed.

## v1.1.8 (2025-07-28)

-   Fixed a bug that `math.angleQuaternion()` should take `Quaternion` instead of `Float3` as its parameter.

## v1.1.7 (2025-07-19)

-   Changed all `const enum` to `enum`.

## v1.1.6 (2025-07-16)

-   Added `"DeathTransfer"` to `VfxType`.
-   Fixed a bug that the type of `TransformOffset` in editor should be `Transform` instead of `Trans`.

## v1.1.5 (2025-07-15)

-   Added `levelManager.skin`.

## v1.1.4 (2025-07-05)

-   Added `LICENSE` and `NOTICE` files.

## v1.1.3 (2025-07-04)

-   Merged `editorApi/modules/math.d.ts` and `gameApi/modules/math.d.ts` into `utils/math.d.ts`.
-   Now type `KeyboardKey`, `MouseButton`, `GamePadButton`, `PlayerKey`, `CancelableEvent`, `VfxType` can be imported from `game:alias`.

## v1.1.2 (2025-07-02)

-   Renamed type `builtInCollections` to `BuiltinCollections`, and moved it to a new file `builtin.d.ts`, where another type `BuiltinVariables` is defined.
-   Moved type `BallType` to `player.d.ts`.
-   Fixed a bug that the type of `Events.OnPreGetCollection` and `Events.OnPostGetCollection` should be `string[]` instead of `` `C_${string}`[] ``.
-   Fixed some wrong descriptions.
-   Added `dialogWindowManager.openMessageDialog()` and `dialogWindowManager.openSubWindow()`.
-   Changed the type of `editor.version` from `int` to `string`.
-   Added some badges in `README.md`.

## v1.1.1 (2025-06-30)

-   Added `levelManager.spawnVfxPRS()`.
-   Renamed `gameApi/alias/item.d.ts` to `gameApi/alias/utils.d.ts`, and more types are exported from this file.
-   Fixed a typo that `CustomBallSettings.switcherLightColor` should be `CustomBallSettings.SwitcherLightColor`.
-   Temporarily removed `TerrainStamp` from `HierarchyIcon`.
-   Added `ExecutorVariables` property to `ExecutorData`.
-   Added a new file `Transform.d.ts`, where the type `Transform` is defined. This is a different type from class `Trans` and is used in the editor.
-   Now some object-array properties are marked as optional.
-   Added some descriptions.
-   Added `const` before some type variables to prevent type-widening.

## v1.1.0 (2025-06-21)

-   Changed the type of `settings.language` to `"English" | "简体中文" | "日本語" | "Spanish" | "繁體中文"`.
-   Added `levelManager.createCustomStatusBar()`, `levelManager.setCustomStatusBarValue()` and `levelManager.destroyCustomStatusBar()`.

## v1.0.8 (2025-06-18)

-   Fixed a bug that class `Trans` should take `Float3` instead of `Quaternion` as its `rot` parameter.
-   Added a private parameter `_brand` to all basic data types to prevent type-widening.
-   Now the in-game `console.log()`, `console.error()` and `console.message()` functions only take one parameter.
-   Now the type of `item` of `RaycastResult` is `Item | Player` instead of `Item`.
-   Fixed some edge cases and bugs about raycast functions.
-   Added a `bool` property `DisableCollisionDamage` to type `PhysicsObjectData`.
-   Changed the type of `Events.OnReceiveCustomEvent` from `any[]` to `[any]`.
-   Now the type of `func` parameter in `levelManager.invoke()` is `() => void` instead of `(...args: any[]) => any`.
-   Removed `item.addComponent()` and `item.removeComponent()`, modified `scene.createItem()`.
-   Added `alias` files, where `game:alias` module is defined, for convenient importing.
-   Imported some commonly used types in `editorTemplate.js` and `gameTemplate.js`.
-   Rename type `ElementTypeMap` to `UIElementTypeMap`.

## v1.0.7 (2025-06-09)

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
-   Now the type of `itemA` and `itemB` of `CollisionEvent` is `Item | Player` instead of `Item`.
-   Optimized the logic of `uiElement`, `component` and `sceneObject`.

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

-   Added a `CHANGELOG` file.
-   Fixed the missing methods `play()` and `stop()` in `Tween` type.

## v1.0.1 (2025-05-17)

-   Optimized the code structure.
-   Fixed some known bugs and typos.

## v1.0.0 (2025-05-16)

-   Initial release.
