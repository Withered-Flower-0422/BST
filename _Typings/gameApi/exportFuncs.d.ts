declare module "game:type" {
    type BallType =
        | "WoodenBall"
        | "StoneBall"
        | "PaperBall"
        | "IceBall"
        | "SteelBall"
        | "RubberBall"
        | "BalloonBall"
        | "StickyBall"
        | "SpongeBall"

    type Events = {
        OnPhysicsUpdate?: never[]
        /**
         * @description after level loaded, before level start
         */
        OnLoadLevel?: never[]
        /**
         * @description on level start, including the first entering and restarting
         */
        OnStartLevel?: never[]
        /**
         * @description on quit level without completing it
         */
        OnQuitLevel?: never[]
        /**
         * @description on timer active when the player ball is generated
         */
        OnTimerActive?: never[]
        /**
         * @description on pre-restart level, excludes the restarting after completing the level
         * @NOTE `cancelable`
         */
        OnPreRestartLevel?: never[]
        OnPostRestartLevel?: never[]
        /**
         * @description on pre player ball is dead (falling into the death zone || duration expired || suicide)
         * @NOTE `cancelable`
         */
        OnPrePlayerDeadStart?: never[]
        /**
         * @description on post player ball is dead (falling into the death zone || duration expired || suicide)
         */
        OnPostPlayerDeadStart?: never[]
        /**
         * @description on player ball has already dead, after the death animation
         */
        OnPlayerDeadEnd?: never[]
        /**
         * @NOTE `cancelable`
         * @Message the checkpoint item, wrapped in an array
         */
        OnPreCheckpointReached?: [Item]
        /**
         * @Message the checkpoint item, wrapped in an array
         */
        OnPostCheckpointReached?: [Item]
        /**
         * @NOTE `cancelable`
         * @Message the destination item, wrapped in an array
         */
        OnPreDestinationReached?: [Item]
        /**
         * @Message the destination item, wrapped in an array
         */
        OnPostDestinationReached?: [Item]
        /**
         * @NOTE `cancelable`
         * @Message name of collection items that are being collected, wrapped in an array
         */
        OnPreGetCollection?: `C_${string}`[]
        /**
         * @Message name of collection items that are being collected, wrapped in an array
         */
        OnPostGetCollection?: `C_${string}`[]
        /**
         * @description before the ball switch animation starts
         * @NOTE `cancelable`
         * @Message the type of the ball that is being switched to, wrapped in an array
         */
        OnPreSwitchBallStart?: [BallType]
        /**
         * @description before the ball switch animation ends
         * @NOTE `cancelable`
         * @Message the type of the ball that is being switched to, wrapped in an array
         */
        OnPreSwitchBallEnd?: [BallType]
        /**
         * @description after the ball switch animation ends
         * @Message the type of the ball that is being switched to, wrapped in an array
         */
        OnPostSwitchBallEnd?: [BallType]
        /**
         * @description before the ball transfer animation starts
         * @NOTE `cancelable`
         * @Message the transporter items that are being used, wrapped in an array, first item is the current transporter, second item is the target transporter
         */
        OnPreTransferBallStart?: [Item, Item]
        /**
         * @description before the ball transfer animation ends
         * @NOTE `cancelable`
         * @Message the transporter items that are being used, wrapped in an array, first item is the current transporter, second item is the target transporter
         */
        OnPreTransferBallEnd?: [Item, Item]
        /**
         * @description after the ball transfer animation ends
         * @Message the transporter items that are being used, wrapped in an array, first item is the current transporter, second item is the target transporter
         */
        OnPostTransferBallEnd?: [Item, Item]
        OnPlayerCollideEnter?: CollisionEvent[]
        OnPlayerCollideStay?: CollisionEvent[]
        OnPlayerCollideExit?: CollisionEvent[]
        /**
         * @Message customized values
         */
        OnReceiveCustomEvent?: [any]
        /**
         * @Message pos of each TNT explosion
         */
        OnTntExploded?: Float3[]
    }

    global {
        /**
         * @param self the item referred to self
         * @param vars variables set on the *Executor*
         * @description only executed once when the script is being loaded before all events
         */
        type Init = (self: Item, vars: { [key: string]: any }) => void

        /**
         * @description invoked by other *Executor* using execute()
         */
        type GameExecute = (...args: any[]) => void

        /**
         * click to see all {@link Events}
         */
        type RegisterEvent = keyof Events

        /**
         * @param self the item referred to self
         * @param events registered triggered events
         */
        type OnEvents = (self: Item, events: Events) => void

        type OnTrigger = (self: Item, triggeredItem: Item | Player, type: CollisionEvent["eventType"]) => void

        type OnCollide = (self: Item, collisionEvent: CollisionEvent) => void
    }
}
