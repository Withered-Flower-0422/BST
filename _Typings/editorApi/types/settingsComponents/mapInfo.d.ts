// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "editor:type" {
    import { KeyboardKey } from "keys"
    import { LocalizedString } from "localize"
    import { Path } from "path"
    import { Float3 } from "basicData"

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

    enum ConfigType {
        String = 0,
        LocalizedString = 1,
        Keys = 2,
    }

    type Configuration = {
        Key: string
        ConfigItemName: LocalizedString
        ConfigType: ConfigType
        DefaultIndex: int
        DefaultKey: KeyboardKey
        Strings: string[]
        LocalizedStrings: LocalizedString[]
    }

    type MapInfo = {
        AuthorName: string
        MapName: string
        MapDescription: string
        Version: int
        Difficulty: Difficulty
        MapType: MapType
        CoverPath: Path<"Textures">
        InitialBallType: InitialBallType
        UseCustomBall: bool
        CustomBallName: string
        ViewMode: ViewMode
        ViewDistance: float
        CameraOffset: Float3
        Gravity: Float3
        Configurations: Partial<Configuration>[]
    }
}
