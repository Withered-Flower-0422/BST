// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "guid" {
    type IsHexStringOfExactLength<S extends string, L extends number, C extends any[] = []> = C["length"] extends L
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
        ? IsHexStringOfExactLength<R, L, [...C, any]>
        : false

    type ValidateGuidParts<
        P1 extends string,
        P2 extends string,
        P3 extends string,
        P4 extends string,
        P5 extends string
    > = IsHexStringOfExactLength<P1, 8> extends true
        ? IsHexStringOfExactLength<P2, 4> extends true
            ? IsHexStringOfExactLength<P3, 4> extends true
                ? IsHexStringOfExactLength<P4, 4> extends true
                    ? IsHexStringOfExactLength<P5, 12> extends true
                        ? true
                        : false
                    : false
                : false
            : false
        : false

    type AllElementsAreGuids<S extends readonly string[]> = S extends readonly [
        infer F extends string,
        ...infer R extends readonly string[]
    ]
        ? AssertGuid<F> extends never
            ? false
            : AllElementsAreGuids<R>
        : true

    type AssertGuid<S extends string> = string extends S
        ? S
        : S extends `${infer P1}-${infer P2}-${infer P3}-${infer P4}-${infer P5}`
        ? ValidateGuidParts<P1, P2, P3, P4, P5> extends true
            ? S
            : never
        : never

    type AssertGuids<S extends readonly string[]> = AllElementsAreGuids<S> extends true ? S : never
}
