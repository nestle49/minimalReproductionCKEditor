import type { App } from 'vue'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type IPlurals = (key: string, quantity: number | string, ...args: any[]) => string

const key = Symbol('plurals')

export function usePlurals() {
    return inject<IPlurals>(key)
}

export function setPlurals(app: App, plurals: IPlurals) {
    app.provide(key, plurals)
}
