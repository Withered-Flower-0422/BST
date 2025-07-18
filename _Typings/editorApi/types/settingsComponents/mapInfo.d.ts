// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "editor:type" {
    enum Difficulty {
        Easy = 0,
        Normal = 1,
        Hard = 2,
        Expert = 3,
        Master = 4,
    }

    enum MapType {
        Racing = 0,
        Casual = 1,
        Landscape = 2,
        Logical = 3,
        Practice = 4,
        Technical = 5,
        Comprehensive = 6,
    }

    enum InitialBallType {
        WoodenBall = 0,
        StoneBall = 1,
        PaperBall = 2,
        IceBall = 3,
        SteelBall = 4,
        RubberBall = 5,
        BalloonBall = 6,
        StickyBall = 7,
        SpongeBall = 8,
    }

    enum ViewMode {
        FourDirectional = 0,
        FreeLook = 1,
    }

    type MapInfo = {
        AuthorName: string
        MapName: string
        MapDescription: string
        Version: int
        Difficulty: Difficulty
        MapType: MapType
        CoverPath: string
        InitialBallType: InitialBallType
        UseCustomBall: bool
        CustomBallName: string
        ViewMode: ViewMode
        ViewDistance: float
        CameraOffset: Float3
        Gravity: Float3
    }
}
