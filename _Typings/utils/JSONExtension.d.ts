// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "JSONExtension" {
    import { PickStringKey, AddTypeTo, TurnTypeTo, DeepPartial } from "utils"

    const jsonDataType: unique symbol

    /** A stricter return type for `JSON.stringify()`. */
    type StringifyReturnType<T> = json<
        DeepPartial<
            PickStringKey<
                AddTypeTo<
                    TurnTypeTo<
                        TurnTypeTo<T, never, bigint>,
                        undefined,
                        Function | symbol
                    >,
                    null,
                    number
                >
            >
        >
    >

    global {
        /** A valid JSON string. */
        type json<T = any> = string & { [jsonDataType]: T }

        interface JSON {
            parse<T>(text: json<T>): T

            stringify<T>(value: T, replacer?: null, space?: number): json<T>
        }
    }
}
