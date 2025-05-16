declare module "game:type:tween" {
    export type Tween = {
        next: () => void
        pause: () => void
        resume: () => void
    }
}
