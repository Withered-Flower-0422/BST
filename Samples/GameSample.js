import {
    console, scene, variables, settings, audioManager, levelManager, inputManager, tweenManager, math, uiCanvas,
    Float2, Float3, Float4, ColorRGBA, Bool3, Trans, Quaternion,
} from "gameApi"

/** @type {Player} */
let player

/** @type {Init} */
export const init = (self, v) => { }

/** @type {GameExecute} */
export const execute = (...args) => { }

/** @type {OnTrigger} */
export const onTrigger = (self, triggerdItem, type) => { }

/** @type {OnCollide} */
export const onCollide = (self, collisionEvent) => { }

/** @type {RegisterEvent[]} */
export const registerEvents = []

/** @type {OnEvents} */
export const onEvents = (self, events) => { }
