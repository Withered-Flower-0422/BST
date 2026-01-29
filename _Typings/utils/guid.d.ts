// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "guid" {
    type _IsHexStringOfExactLength<
        S extends string,
        L extends number,
        B extends boolean = false,
        C extends 0[] = [],
    > = C["length"] extends L
        ? S extends ""
            ? true
            : false
        : S extends `${
                | (
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
                      | "f"
                  )
                | (B extends true
                      ? "A" | "B" | "C" | "D" | "E" | "F"
                      : never)}${infer R}`
          ? _IsHexStringOfExactLength<R, L, B, [...C, 0]>
          : false

    type IsHexStringOfExactLength<
        S extends string,
        L extends number,
        B extends boolean = false,
    > = {
        [I in L]: _IsHexStringOfExactLength<S, I, B>
    }[L] extends false
        ? false
        : true

    type AssertGuid<S extends string> = string extends S
        ? S
        : S extends `${infer P1}-${infer P2}-${infer P3}-${infer P4}-${infer P5}`
          ? [
                IsHexStringOfExactLength<P1, 8>,
                IsHexStringOfExactLength<P2, 4>,
                IsHexStringOfExactLength<P3, 4>,
                IsHexStringOfExactLength<P4, 4>,
                IsHexStringOfExactLength<P5, 12>,
            ][number] extends true
              ? S
              : never
          : never

    type AssertGuids<S extends readonly string[]> = {
        [K in keyof S]: AssertGuid<S[K]>
    }
}
