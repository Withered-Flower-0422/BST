// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "utils" {
    type _GreaterThan<T extends number, U extends number> = Tuple<0, U> extends [...Tuple<0, T>, ...0[]] ? false : true

    type _Max<T extends number, U extends number> = _GreaterThan<T, U> extends true ? T : U

    type _Minus<T extends number, U extends number> = Tuple<0, T> extends [...Tuple<0, U>, ...infer R]
        ? R["length"]
        : never

    type _CompareStrWithSameLen<
        T extends string,
        U extends string
    > = `${T}` extends `${infer TF extends number}${infer TR}`
        ? `${U}` extends `${infer UF extends number}${infer UR}`
            ? _GreaterThan<TF, UF> extends true
                ? 1
                : _GreaterThan<UF, TF> extends true
                ? -1
                : _CompareStrWithSameLen<TR, UR>
            : 0
        : 0

    type _CompareStrIntAndDecParts<
        I1 extends string,
        D1 extends string,
        I2 extends string,
        D2 extends string,
        I1L extends number = GetStrLen<I1>,
        I2L extends number = GetStrLen<I2>,
        M extends number = _Max<GetStrLen<D1>, GetStrLen<D2>>
    > = _GreaterThan<I1L, I2L> extends true
        ? 1
        : _GreaterThan<I2L, I1L> extends true
        ? -1
        : _CompareStrWithSameLen<I1, I2> extends 1 | -1
        ? _CompareStrWithSameLen<I1, I2>
        : _CompareStrWithSameLen<PadEnd<D1, M, "0">, PadEnd<D2, M, "0">>

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
        : T extends 0 | 1
        ? T
        : `${T}` extends `-${string}` | `${string}e+${string}`
        ? never
        : `${T}` extends `${string}e-${string}`
        ? T
        : `${T}` extends `${infer I}.${string}`
        ? I extends "0"
            ? T
            : never
        : never

    type Assert0To1s<T extends number[]> = {
        [K in keyof T]: Assert0To1<T[K]>
    }

    type RepeatStr<S extends string, N extends number, R extends string = "", C extends 0[] = []> = string extends S
        ? string
        : number extends N
        ? string
        : C["length"] extends N
        ? R
        : RepeatStr<S, N, `${R}${S}`, [...C, 0]>

    type PadEnd<
        S extends string,
        L extends number,
        P extends string = " ",
        M extends number = _Minus<L, GetStrLen<S>>
    > = string extends S ? string : number extends L ? string : [M] extends [never] ? S : `${S}${RepeatStr<P, M>}`

    type NumToStr<T extends number> = number extends T
        ? "number"
        : `${T}` extends "Infinity" | "-Infinity" | `${string}e${string}` | `${string}.${string}`
        ? `${T}`
        : `${T}.0`

    type GetStrLen<T extends string, C extends 0[] = []> = string extends T
        ? number
        : T extends `${string}${infer R}`
        ? GetStrLen<R, [...C, 0]>
        : C["length"]

    type Compare<T extends number, U extends number> = number extends T
        ? -1 | 0 | 1
        : number extends U
        ? 1 | 0 | -1
        : `${T}` extends "Infinity"
        ? `${U}` extends "Infinity"
            ? 0
            : 1
        : `${T}` extends "-Infinity"
        ? `${U}` extends "-Infinity"
            ? 0
            : -1
        : `${T}` extends `-${infer T1 extends number}`
        ? `${U}` extends `-${infer U1 extends number}`
            ? Compare<U1, T1>
            : -1
        : `${U}` extends `-${string}`
        ? 1
        : `${T}` extends `${infer T1 extends number}e+${infer T2 extends number}`
        ? `${U}` extends `${infer U1 extends number}e+${infer U2 extends number}`
            ? Compare<T2, U2> extends 0
                ? Compare<T1, U1>
                : Compare<T2, U2>
            : 1
        : `${T}` extends `${infer T1 extends number}e-${infer T2 extends number}`
        ? `${U}` extends `${infer U1 extends number}e-${infer U2 extends number}`
            ? Compare<T2, U2> extends 0
                ? Compare<T1, U1>
                : Compare<U2, T2>
            : -1
        : `${U}` extends `${string}e+${string}`
        ? -1
        : `${U}` extends `${string}e-${string}`
        ? 1
        : NumToStr<T> extends `${infer T1}.${infer T2}`
        ? NumToStr<U> extends `${infer U1}.${infer U2}`
            ? _CompareStrIntAndDecParts<T1, T2, U1, U2>
            : never
        : never

    type Includes<T extends readonly any[], U> = T extends [infer F, ...infer R]
        ? Equal<F, U> extends true
            ? true
            : Includes<R, U>
        : false

    type IsUnique<T extends readonly any[], AllowAny extends boolean = true> = AllowAny extends false
        ? Includes<T, any> extends true
            ? false
            : IsUnique<T>
        : T extends [infer F, ...infer R]
        ? Includes<R, F> extends true
            ? false
            : IsUnique<R>
        : true

    type ExpectTrue<T extends true> = T
}
