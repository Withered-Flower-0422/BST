declare module "game:type" {
    type Image = {
        /**
         * `readonly`
         */
        readonly elementType: "Image"
        /**
         * @default_value `new ColorRGBA(1, 1, 1, 1)`
         */
        color: ColorRGBA
        /**
         * @description path of the texture
         */
        texture: string
        /**
         * @default_value `new Float4(0, 0, 0, 0)`
         * @description adjust the raycast range `(x, y, width, height)`
         */
        raycastPadding: Float4
        /**
         * @default_value `new Float4(0, 0, 1, 1)`
         * @description uv's offset and tile
         */
        uvRect: Float4
        /**
         * @default_value `"None"`
         */
        aspectRatioMode: "None" | "WidthControlsHeight" | "HeightControlsWidth" | "FitInParent" | "EnvelopeParent"
        /**
         * @default_value `1`
         */
        aspectRatio: float
        /**
         * @default_value `true`
         */
        maskable: bool
        /**
         * @default_value `true`
         */
        showMaskElement: bool
    }

    type Text = {
        /**
         * `readonly`
         */
        readonly elementType: "Text"
        /**
         * @default_value `new ColorRGBA(1, 1, 1, 1)`
         */
        color: ColorRGBA
        /**
         * @description support rich text tags
         */
        text: string
        /**
         * @default_value `26`
         */
        fontSize: float
        /**
         * @default_value `"Center"`
         */
        horizontalAlignment: "Left" | "Center" | "Right" | "Justified" | "Flush" | "Geometry"
        /**
         * @default_value `"Middle"`
         */
        verticalAlignment: "Top" | "Middle" | "Bottom" | "Baseline" | "Geometry" | "Capline"
        /**
         * @default_value `false`
         */
        textWrapping: bool
        /**
         * @default_value `true`
         */
        maskable: bool
        /**
         * @default_value `true`
         */
        showMaskElement: bool
    }

    type Panel = {
        /**
         * `readonly`
         */
        readonly elementType: "Panel"
        /**
         * @default_value `1`
         * @description used for convenient control of transparency for all sub UIs
         */
        alpha: float
    }

    type UIElementTypeMap = {
        Image: Image
        Text: Text
        Panel: Panel
    }

    type UIElement<T extends keyof UIElementTypeMap> = {
        /**
         * @default_value `true`
         */
        enabled: bool
        /**
         * @default_value `null`
         */
        parent: UIElement<keyof UIElementTypeMap> | null
        /**
         * @default_value `new Float2(0, 0)`
         */
        position: Float2
        /**
         * @default_value `0`
         */
        rotation: float
        /**
         * @default_value `new Float2(1, 1)`
         */
        scale: Float2
        /**
         * @default_value `new Float2(0.5, 0.5)`
         */
        anchorMin: Float2
        /**
         * @default_value `new Float2(0.5, 0.5)`
         */
        anchorMax: Float2
        /**
         * @default_value
         * @Panel `new Float2(100, 100)`
         * @Image `new Float2(100, 100)`
         * @Text `new Float2(200, 50)`
         */
        sizeDelta: Float2
        /**
         * @default_value `new Float2(0.5, 0.5)`
         */
        pivot: Float2
        /**
         * @default_value `false`
         */
        raycastEvent: bool
        onPointerEnter: () => void
        onPointerExit: () => void
        /**
         * @param which `0: Left`, `1: Middle`, `2: Right`
         */
        onPointerClick: (which: 0 | 1 | 2) => void
        /**
         * @default_value `true`
         */
        raycastTarget: bool
        /**
         * @default_value `false`
         */
        mask: bool
    } & UIElementTypeMap[T]
}
