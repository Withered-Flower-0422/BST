declare module "game:type" {
    type int64 = number

    const enum Difficulty {
        Easy = 0,
        Normal = 1,
        Hard = 2,
        Expert = 3,
        Master = 4,
    }

    const enum MapType {
        Racing = 0,
        Casual = 1,
        Landscape = 2,
        Logical = 3,
        Practice = 4,
        Technical = 5,
        Comprehensive = 6,
    }

    const enum InitialBallType {
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

    const enum ViewMode {
        FourDirectional = 0,
        FreeLook = 1,
    }

    type MapInfo = {
        readonly AuthorName: string
        readonly AuthorSteamID: int64
        readonly MapName: string
        readonly MapDescription: string
        readonly Version: int
        readonly Difficulty: Difficulty
        readonly MapType: MapType
        readonly CoverPath: string
        readonly InitialBallType: InitialBallType
        readonly UseCustomBall: bool
        readonly CustomBallName: string
        readonly ViewMode: ViewMode
        readonly ViewDistance: float
        readonly CameraOffset: Float3
        readonly Gravity: Float3
    }
}
