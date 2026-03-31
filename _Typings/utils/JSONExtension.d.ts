// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

export {}

declare const jsonDataType: unique symbol

type AddNullToNumber<T> = T extends number
    ? T | null
    : T extends object
      ? { [K in keyof T]: AddNullToNumber<T[K]> }
      : T

type StringifyReturnType<T> = T extends Function | undefined | symbol
    ? undefined
    : json<AddNullToNumber<T>> // JSON.stringify() returns `null` for `NaN` and `Infinity`.

declare global {
    /** A valid JSON string. */
    type json<T = any> = string & { [jsonDataType]: T }

    interface JSON {
        parse<T>(text: json<T>): T

        stringify<T>(
            value: T extends bigint ? never : T,
            replacer?: null,
            space?: number,
        ): StringifyReturnType<T>
    }
}
