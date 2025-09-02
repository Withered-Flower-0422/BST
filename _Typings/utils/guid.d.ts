// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "guid" {
    type IsHexStringOfExactLength<S extends string, L extends number, C extends 0[] = []> = C["length"] extends L
        ? S extends ""
            ? true
            : false
        : S extends `${infer _ extends
              | "0"
              | "1"
              | "2"
              | "3"
              | "4"
              | "5"
              | "6"
              | "7"
              | "8"
              | "9"
              | "a"
              | "b"
              | "c"
              | "d"
              | "e"
              | "f"}${infer R}`
        ? IsHexStringOfExactLength<R, L, [...C, 0]>
        : false

    type ValidateGuidParts<P extends [string, string, string, string, string]> = P extends [
        infer P1 extends string,
        infer P2 extends string,
        infer P3 extends string,
        infer P4 extends string,
        infer P5 extends string
    ]
        ? [
              IsHexStringOfExactLength<P1, 8>,
              IsHexStringOfExactLength<P2, 4>,
              IsHexStringOfExactLength<P3, 4>,
              IsHexStringOfExactLength<P4, 4>,
              IsHexStringOfExactLength<P5, 12>
          ] extends [true, true, true, true, true]
            ? true
            : false
        : false

    type AssertGuid<S extends string> = string extends S
        ? S
        : S extends `${infer P1}-${infer P2}-${infer P3}-${infer P4}-${infer P5}`
        ? ValidateGuidParts<[P1, P2, P3, P4, P5]> extends true
            ? S
            : never
        : never

    type AssertGuids<S extends string[]> = {
        [K in keyof S]: AssertGuid<S[K]>
    }
}
