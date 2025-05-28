declare module "utils" {
    type Equal<T, U> = (<G>() => G extends T ? 1 : 2) extends (<G>() => G extends U ? 1 : 2) ? true : false

    type Mutable<T> = {
        [P in keyof T as Equal<{ [K in P]: T[K] }, { -readonly [K in P]: T[K] }> extends true ? P : never]: T[P]
    }
}
