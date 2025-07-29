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

    type IntRange<L extends int, H extends int> = TupleToExactLength<H> extends [...TupleToExactLength<L>, ...infer R]
        ? [...R, H][number]
        : never

    type Tuple<T, L extends number = number, C extends T[] = []> = number extends L
        ? T[]
        : C["length"] extends L
        ? C
        : Tuple<T, L, [...C, T]>

    type AssertInt<T extends number> = `${T}` extends `${string}.${string}` ? never : T
}
