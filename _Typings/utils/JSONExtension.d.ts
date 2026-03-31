// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

export {}

declare const jsonDataType: unique symbol

declare global {
    /** A valid JSON string. */
    type json<T = any> = string & { [jsonDataType]: T }

    interface JSON {
        parse<T>(text: json<T>): T

        stringify<T>(value: T, replacer?: null, space?: number): json<T>
    }
}
