import { watchDebounced } from '@vueuse/core'

import type { MenuItem } from '@/constants/menu'
import { menu } from '@/constants/menu'

export type MenuItemIds = MenuItem['id'][]

export const useNavigation = () => {
    const searchQuery = ref('')
    const foundItems = ref<MenuItemIds>([])

    const findItemsByQuery = (menu: MenuItem[], query: string): MenuItemIds => {
        let res: MenuItemIds = []

        for (const group of menu) {
            if (group.name.toLowerCase().includes(query.toLocaleLowerCase())) {
                res.push(group.id)
            }

            if (group.children && group.children.length > 0) {
                res = [...res, ...findItemsByQuery(group.children, query)]
            }
        }

        return res
    }

    watchDebounced(
        searchQuery,
        query => {
            if (query.length < 3) {
                foundItems.value = []
                return
            }

            foundItems.value = findItemsByQuery(menu, query)
        },
        {
            debounce: 500
        }
    )

    return {
        searchQuery,
        foundItems
    }
}
