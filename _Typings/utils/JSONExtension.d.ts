// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

export {}

declare const jsonDataType: unique symbol

declare global {
    /** A valid JSON string. */
    type json<T = any> = string & { [jsonDataType]: T }

    interface JSON {
        parse<T extends json>(
            text: T,
            reviver?: (this: any, key: string, value: any) => any,
        ): T extends json<infer U> ? U : never

        stringify<T>(
            value: T,
            replacer?: (this: any, key: string, value: any) => any,
            space?: string | number,
        ): json<T>

        stringify<T>(
            value: T,
            replacer?: (number | string)[] | null,
            space?: string | number,
        ): json<T>
    }
}
