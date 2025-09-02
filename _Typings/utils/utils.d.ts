// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "utils" {
    type Equal<T, U> = (<G>() => G extends T ? 1 : 2) extends <G>() => G extends U ? 1 : 2 ? true : false

    type Mutable<
        T,
        M = {
            [P in keyof T as Equal<{ [K in P]: T[K] }, { -readonly [K in P]: T[K] }> extends true ? P : never]: T[P]
        }
    > = Equal<M, {}> extends true ? never : M

    type TupleToExactLength<L extends int, T extends int[] = []> = T["length"] extends L
        ? T
        : TupleToExactLength<L, [...T, T["length"]]>

    type NonNegIntRange<L extends int, H extends int> = TupleToExactLength<H> extends [
        ...TupleToExactLength<L>,
        ...infer R
    ]
        ? [...R, H][number]
        : never

    type Tuple<T, L extends number = number, C extends T[] = []> = number extends L
        ? T[]
        : C["length"] extends L
        ? C
        : Tuple<T, L, [...C, T]>

    type AssertNeg<T extends number> = number extends T ? T : `${T}` extends `-${string}` ? T : never

    type AssertNonNeg<T extends number> = number extends T ? T : `${T}` extends `-${string}` ? never : T

    type ValidateIntString<T extends string> = T extends `${string}e+${string}`
        ? true
        : T extends `${string}e-${string}`
        ? false
        : T extends `${string}.${string}`
        ? false
        : true

    type AssertInt<T extends number> = number extends T ? T : ValidateIntString<`${T}`> extends true ? T : never

    type AssertNegInt<T extends number> = number extends T
        ? T
        : `${T}` extends `-${infer R}`
        ? ValidateIntString<R> extends true
            ? T
            : never
        : never

    type AssertNonNegInt<T extends number> = number extends T ? T : `${T}` extends `-${string}` ? never : AssertInt<T>

    type Assert0To1<T extends number> = number extends T
        ? T
        : T extends 0
        ? T
        : T extends 1
        ? T
        : `${T}` extends `-${string}`
        ? never
        : `${T}` extends `${string}e+${string}`
        ? never
        : `${T}` extends `${string}e-${string}`
        ? T
        : `${T}` extends `${infer I}.${string}`
        ? I extends "0"
            ? T
            : never
        : never

    type Assert0To1s<T extends readonly number[]> = {
        [K in keyof T]: Assert0To1<T[K]>
    }
}
