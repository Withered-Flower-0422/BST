# Changelog

All notable changes to this project will be documented in this file.

## v1.0.4 (2025-05-20)

- Fixed a mistake that `hideTipDelay()` and `hideAllTipsDelay()` methods were in the wrong module `inputManager` instead of `levelManager`.
- Now the methods that taken item guid(s) as a parameter can check if the guid(s) conform(s) to the format.

## v1.0.3 (2025-05-19)

- Added `CustomBall` and `Place` enums to `HierachyIcon`.
- Renamed the `CustomBall` property in type `CustomBall` to `CustomBalls`.
- Added `Landscaping` type.
- Fixed the return type of the method `removeComponent()` (now returns `void`).
- Optimized some descriptions of methods and properties.

## v1.0.2 (2025-05-18)

- Added a [`CHANGELOG`](./CHANGELOG.md) file.
- Fixed the missing methods (`play()` and `stop()`) in [`Tween`](./_Typings/gameApi/types/tween.d.ts) type.

## v1.0.1 (2025-05-17)

- Optimized the code structure.
- Fixed some known bugs and typos.

## v1.0.0 (2025-05-16)

- Initial release.
