// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "editor:alias" {
    import { ItemComponent } from "editor:type"
    export { ItemComponent }

    export type AudioPlayer = ItemComponent<"AudioPlayer">
    export type Camera = ItemComponent<"Camera">
    export type Collection = ItemComponent<"Collection">
    export type Decal = ItemComponent<"Decal">
    export type Executor = ItemComponent<"Executor">
    export type ItemLink = ItemComponent<"ItemLink">
    export type Joint = ItemComponent<"Joint">
    export type Light = ItemComponent<"Light">
    export type ParticleEmitter = ItemComponent<"ParticleEmitter">
    export type PhysicsObject = ItemComponent<"PhysicsObject">
    export type Renderer = ItemComponent<"Renderer">
    export type RoadGenerator = ItemComponent<"RoadGenerator">
    export type Settings = ItemComponent<"Settings">
    export type TerrainStamp = ItemComponent<"TerrainStamp">
    export type Trigger = ItemComponent<"Trigger">
    export type WayPath = ItemComponent<"WayPath">
    export type WayPoint = ItemComponent<"WayPoint">
}
