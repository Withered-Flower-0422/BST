// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "utils" {
    type Equal<T, U> = (<G>() => G extends T ? 1 : 2) extends <G>() => G extends U ? 1 : 2 ? true : false

    type _Mutable<T> = {
        [P in keyof T as Equal<{ [K in P]: T[K] }, { -readonly [K in P]: T[K] }> extends true ? P : never]: T[P]
    }

    type Mutable<T> = Equal<_Mutable<T>, {}> extends true ? never : _Mutable<T>

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

    type ValidateIntString<T extends string> = T extends `${string}e+${string}`
        ? true
        : T extends `${string}e-${string}`
        ? false
        : T extends `${string}.${string}`
        ? false
        : true

    type AssertInt<T extends number> = number extends T ? T : ValidateIntString<`${T}`> extends true ? T : never

    type AssertNeg<T extends number> = number extends T ? T : `${T}` extends `-${string}` ? T : never

    type AssertNonNeg<T extends number> = number extends T ? T : `${T}` extends `-${string}` ? never : T

    type AssertNegInt<T extends number> = number extends T
        ? T
        : `${T}` extends `-${infer R}`
        ? ValidateIntString<R> extends true
            ? T
            : never
        : never

    type AssertNonNegInt<T extends number> = number extends T ? T : `${T}` extends `-${string}` ? never : AssertInt<T>

    type Validate0To1<T extends number> = number extends T
        ? true
        : T extends 0
        ? true
        : T extends 1
        ? true
        : `${T}` extends `-${string}`
        ? false
        : `${T}` extends `${string}e+${string}`
        ? false
        : `${T}` extends `${string}e-${string}`
        ? true
        : `${T}` extends `${infer I}.${string}`
        ? I extends "0"
            ? true
            : false
        : false

    type Validate0To1s<T extends readonly number[]> = T extends readonly [
        infer F extends number,
        ...infer R extends readonly number[]
    ]
        ? Validate0To1<F> extends false
            ? false
            : Validate0To1s<R>
        : true

    type Assert0To1<T extends number> = Validate0To1<T> extends true ? T : never

    type Assert0To1s<T extends readonly number[]> = Validate0To1s<T> extends true ? T : never
}
