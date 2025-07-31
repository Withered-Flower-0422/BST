// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/Withered-Flower-0422/BST/blob/main/LICENSE

declare module "game:type" {
    type Image = {
        /**
         * @readonly
         */
        readonly elementType: "Image"
        /**
         * @default new Float2(100, 100)
         */
        sizeDelta: Float2
        /**
         * @default new ColorRGBA(1, 1, 1, 1)
         */
        color: ColorRGBA
        /**
         * Path of the texture.
         */
        texture: string
        /**
         * Adjust the raycast range `(x, y, width, height)`.
         * @default new Float4(0, 0, 0, 0)
         */
        raycastPadding: Float4
        /**
         * UV's offset and tile.
         * @default new Float4(0, 0, 1, 1)
         */
        uvRect: Float4
        /**
         * @default "None"
         */
        aspectRatioMode: "None" | "WidthControlsHeight" | "HeightControlsWidth" | "FitInParent" | "EnvelopeParent"
        /**
         * @default 1
         */
        aspectRatio: float
        /**
         * @default true
         */
        maskable: bool
        /**
         * @default true
         */
        showMaskElement: bool
    }

    type Text = {
        /**
         * @readonly
         */
        readonly elementType: "Text"
        /**
         * @default new Float2(200, 50)
         */
        sizeDelta: Float2
        /**
         * @default new ColorRGBA(1, 1, 1, 1)
         */
        color: ColorRGBA
        /**
         * Supports rich text tags.
         */
        text: string
        /**
         * @default 26
         */
        fontSize: float
        /**
         * @default "Center"
         */
        horizontalAlignment: "Left" | "Center" | "Right" | "Justified" | "Flush" | "Geometry"
        /**
         * @default "Middle"
         */
        verticalAlignment: "Top" | "Middle" | "Bottom" | "Baseline" | "Geometry" | "Capline"
        /**
         * @default false
         */
        textWrapping: bool
        /**
         * @default true
         */
        maskable: bool
        /**
         * @default true
         */
        showMaskElement: bool
    }

    type Panel = {
        /**
         * @readonly
         */
        readonly elementType: "Panel"
        /**
         * @default new Float2(100, 100)
         */
        sizeDelta: Float2
        /**
         * Used for convenient control of transparency for all sub UIs.
         * @default 1
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
         * @default true
         */
        enabled: bool
        /**
         * @default null
         */
        parent: UIElement<keyof UIElementTypeMap> | null
        /**
         * @default new Float2(0, 0)
         */
        position: Float2
        /**
         * @default 0
         */
        rotation: float
        /**
         * @default new Float2(1, 1)
         */
        scale: Float2
        /**
         * @default new Float2(0.5, 0.5)
         */
        anchorMin: Float2
        /**
         * @default new Float2(0.5, 0.5)
         */
        anchorMax: Float2
        /**
         * @default new Float2(0.5, 0.5)
         */
        pivot: Float2
        /**
         * @default false
         */
        raycastEvent: bool

        /**
         * Invoked when the pointer enters the UI element.
         * @returns
         */
        onPointerEnter: () => void

        /**
         * Invoked when the pointer leaves the UI element.
         * @returns
         */
        onPointerExit: () => void

        /**
         * Invoked when the pointer clicks the UI element.
         * @param which - Which mouse button was clicked. `0: Left`, `1: Middle`, `2: Right`
         * @returns
         */
        onPointerClick: (which: 0 | 1 | 2) => void

        /**
         * @default true
         */
        raycastTarget: bool
        /**
         * @default false
         */
        mask: bool
    } & UIElementTypeMap[T]
}
