import { defineStore } from 'pinia'

interface LayoutState {
    isSidebarCollapsed: boolean
}

export const useLayoutStore = defineStore('layoutStore', {
    state: (): LayoutState => ({
        isSidebarCollapsed: false
    })
})
