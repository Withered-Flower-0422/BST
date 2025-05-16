declare module "game:type" {
    type Tween = {
        next: () => void
        pause: () => void
        resume: () => void
    }
}
