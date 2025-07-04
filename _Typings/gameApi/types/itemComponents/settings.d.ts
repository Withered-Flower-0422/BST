// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:type" {
    const enum HierarchyIcon {
        Auto = 0,
        MapInfo = 1,
        Environment = 2,
        Lighting = 3,
        Sky = 4,
        Cloud = 5,
        Fog = 6,
        Lens = 7,
        BGM = 8,
        Terrain = 9,
        CollectionPrototype = 10,
        AssetReference = 11,
        ItemSettings = 12,
        Renderer = 13,
        RoadGenerator = 14,
        Trigger = 15,
        ItemLink = 16,
        PhysicsObject = 17,
        Joint = 18,
        WayPoint = 19,
        WayPath = 20,
        Collection = 21,
        Light = 22,
        ParticleEmitter = 23,
        AudioPlayer = 24,
        Decal = 25,
        // TerrainStamp = 26,
        // Camera = 27,
        // Executor = 28,
        // Empty = 29,
        // CustomBall = 30,
        // Place = 31,
        Camera = 26,
        Executor = 27,
        Empty = 28,
        CustomBall = 29,
        Place = 30,
    }

    type SettingsData = {
        AsTemplate: bool
        TemplateName: string
        HierarchyIcon: HierarchyIcon
        HierarchyColor: ColorRGBA
        ShowCube: bool
        CubePosition: Float3
        CubeRotation: Float3
        CubeScale: Float3
        CubeColor: ColorRGBA
        Tags: string[]
    }

    type SettingsMethod = {
        [key: string | symbol]: never
    }
}
