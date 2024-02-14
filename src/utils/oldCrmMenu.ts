// npx esbuild src/utils/oldCrmMenu.ts

;(function () {
    const rootItems = [
        ...document.querySelectorAll<HTMLElement>('.wrapper_navigation_bar > .list_sections, .wrapper_navigation_bar > .link_section')
    ]

    const menu = rootItems.map(item => ({
        name: item.firstChild?.textContent,
        href: item.getAttribute('href') ?? undefined,
        children: [...item.querySelectorAll<HTMLLinkElement>('& > .wrapper_tree_sections > .link_section')].map(child => ({
            name: child.firstChild?.textContent,
            href: child.getAttribute('href') ?? undefined,
            children: [...child.querySelectorAll<HTMLLinkElement>('& > .wrapper_tree_sections > .link_section')].map(childSecondLevel => ({
                name: childSecondLevel.firstChild?.textContent,
                href: childSecondLevel.getAttribute('href') ?? undefined
            }))
        }))
    }))

    console.log('menu', menu)
})()
