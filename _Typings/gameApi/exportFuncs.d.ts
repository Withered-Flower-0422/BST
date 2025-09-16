// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:type" {
    import { BuiltinCollections } from "game:type"

    type Events = {
        /**
         * On every physics updates. The physics frame rate of Ballex² is 100Hz.
         */
        OnPhysicsUpdate?: [null]

        /**
         * After level loaded, before level start.
         */
        OnLoadLevel?: [null]

        /**
         * On level start, including the first entering and restarting.
         */
        OnStartLevel?: [null]

        /**
         * On quitting level without completing it.
         */
        OnQuitLevel?: [null]

        /**
         * On timer active, as well as when the player ball is generated.
         */
        OnTimerActive?: [null]

        /**
         * On pre-restarting level, excludes the restarting after completing the level.
         * @cancelable
         */
        OnPreRestartLevel?: [null]

        /**
         * On post-restarting level.
         */
        OnPostRestartLevel?: [null]

        /**
         * On pre player ball is dead. (falling into the death area / duration expired / suicide)
         * @cancelable
         */
        OnPrePlayerDeadStart?: [null]

        /**
         * On post player ball is dead. (falling into the death area / duration expired / suicide)
         */
        OnPostPlayerDeadStart?: [null]

        /**
         * On player ball has already dead, after the death animation.
         */
        OnPlayerDeadEnd?: [null]

        /**
         * On pre-reached the checkpoint.
         * @cancelable
         * @Message The checkpoint item, wrapped in an array.
         */
        OnPreCheckpointReached?: [Item]

        /**
         * On post-reached the checkpoint.
         * @Message The checkpoint item, wrapped in an array.
         */
        OnPostCheckpointReached?: [Item]

        /**
         * On pre-reached the destination.
         * @cancelable
         * @Message The destination item, wrapped in an array.
         */
        OnPreDestinationReached?: [Item]

        /**
         * On post-reached the destination.
         * @Message The destination item, wrapped in an array.
         */
        OnPostDestinationReached?: [Item]

        /**
         * On pre-getting collections.
         * @cancelable
         * @Message Name of collection items that are being collected, wrapped in an array.
         * @BuiltinCollections Click to see {@link BuiltinCollections | all built-in collections}.
         */
        OnPreGetCollection?: string[]

        /**
         * On post-getting collections.
         * @BuiltinCollections Click to see {@link BuiltinCollections | all built-in collections}.
         * @Message Name of collection items that are being collected, wrapped in an array.
         */
        OnPostGetCollection?: string[]

        /**
         * Before the ball switch animation starts.
         * @cancelable
         * @Message The type of the ball that is being switched to, wrapped in an array.
         */
        OnPreSwitchBallStart?: [BallType]

        /**
         * Before the ball switch animation ends.
         * @cancelable
         * @Message The type of the ball that is being switched to, wrapped in an array.
         */
        OnPreSwitchBallEnd?: [BallType]

        /**
         * After the ball switch animation ends.
         * @Message The type of the ball that is being switched to, wrapped in an array.
         */
        OnPostSwitchBallEnd?: [BallType]

        /**
         * Before the ball transfer animation starts.
         * @cancelable
         * @Message The transporter items that are being triggered, wrapped in an array.
         * - The first item is the current transporter, and the second item is the target transporter.
         */
        OnPreTransferBallStart?: [Item, Item]

        /**
         * Before the ball transfer animation ends.
         * @cancelable
         * @Message The transporter items that are being triggered, wrapped in an array.
         * - The first item is the current transporter, and the second item is the target transporter.
         */
        OnPreTransferBallEnd?: [Item, Item]

        /**
         * After the ball transfer animation ends.
         * @Message The transporter items that are being triggered, wrapped in an array.
         * - The first item is the current transporter, and the second item is the target transporter.
         */
        OnPostTransferBallEnd?: [Item, Item]

        /**
         * On player starting to collide with other item.
         * @Message The collision events, wrapped in an array.
         */
        OnPlayerCollideEnter?: CollisionEvent[]

        /**
         * On player staying in collision with other item.
         * @Message The collision events, wrapped in an array.
         */
        OnPlayerCollideStay?: CollisionEvent[]

        /**
         * On player leaving collision with other item.
         * @Message The collision events, wrapped in an array.
         */
        OnPlayerCollideExit?: CollisionEvent[]

        /**
         * On Receiving custom event.
         * @Message Customized values, wrapped in an array.
         */
        OnReceiveCustomEvent?: [any]

        /**
         * On TNT explosion.
         * @Message The positions of each TNT explosion, wrapped in an array.
         */
        OnTntExploded?: Float3[]
    }

    global {
        /**
         * Executed when the executor loads the script. It executes before all other events and only executes once.
         * @param self - A reference to the item where the executor component is located.
         * @param vars - The variables set on the executor, passed in as key-value pairs.
         * @returns
         */
        type Init = (self: Item, vars: { [key: string]: any }) => void

        /**
         * Executed when `execute()` is called by another executor in the game.
         * @param args - The arguments passed in by the executor that called `execute()`.
         * @returns
         */
        type GameExecute = (...args: any[]) => void

        /**
         * Click to see all {@link Events}.
         */
        type RegisterEvent = keyof Events

        /**
         * Executed when a registered event is triggered.
         * @param self - A reference to the item where the executor component is located.
         * @param events - The triggered events and their passed messages, passed in as key-value pairs. The key is the event name, and the value is the passed message **array**.
         * @returns
         */
        type OnEvents<RegisterEvents extends RegisterEvent[] = RegisterEvent[]> = (
            self: Item,
            events: Pick<Events, RegisterEvents[number]>
        ) => void

        /**
         * Executed when the trigger is activated.
         * @param self - A reference to the item where the trigger component is located.
         * @param triggeredItem - A reference to the item or player that activated the trigger.
         * @param type - The type of trigger event.
         * @returns
         */
        type OnTrigger = (self: Item, triggeredItem: Item | Player, type: CollisionEvent["eventType"]) => void

        /**
         * Executed when an object collides.
         * @param self - A reference to the item where the collider component is located.
         * @param collisionEvent - The collision event object, which contains information about the colliding object, the type of collision, the position of the collision, etc.
         * @returns
         */
        type OnCollide = (self: Item, collisionEvent: CollisionEvent) => void
    }
}
