const sidebar = '[data-testid="sidebar"]'
const sidebarToggle = '[data-testid="sidebar-toggle"]'
const sidebarSearch = '[data-testid="sidebar-search"]'
const sidebarNavigation = '[data-testid="sidebar-navigation"]'

const sidebarWidth = 320
const collapsedSidebarWidth = 120

describe('desktop sidebar', () => {
    it('should be collapsed on smaller than extra size', () => {
        cy.viewport('macbook-13').visit('/')
        cy.get(sidebar).should('have.class', 'sidebar--collapsed')
    })

    it('should be opened on large viewport', () => {
        cy.viewport(2000, 720).visit('/')
        cy.get(sidebar).should('not.have.class', 'sidebar--collapsed')
    })

    it('collapsed sidebar should be specified width', () => {
        cy.viewport('macbook-13').visit('/')
        cy.get(sidebar).invoke('outerWidth').should('equal', collapsedSidebarWidth)

        cy.viewport(2000, 720)
        cy.get(sidebar).invoke('outerWidth').should('equal', sidebarWidth)
    })

    it('should open on toggle button click', () => {
        cy.viewport('macbook-13').visit('/')
        cy.get(sidebarToggle).click()
        cy.get(sidebar).should('not.have.class', 'sidebar--collapsed')
    })

    it('should collapse on click outside on smaller than extra size', () => {
        cy.viewport('macbook-13').visit('/')
        cy.get(sidebarToggle).click()
        cy.get('body').click(9999, 9999, { force: true })
        cy.get(sidebar).should('have.class', 'sidebar--collapsed')
    })

    it('should has no effect on click outside on large viewport', () => {
        cy.viewport(2000, 720).visit('/')
        cy.get(sidebarToggle).click()
        cy.get('body').click(9999, 9999, { force: true })
        cy.get(sidebar).should('have.class', 'sidebar--collapsed')
    })

    it('should open on search button click on smaller than extra size', () => {
        cy.viewport('macbook-13').visit('/')
        cy.get(sidebarSearch).click()
        cy.get(sidebar).should('not.have.class', 'sidebar--collapsed')
    })

    it('collapsed sidebar should open on navigation item click', () => {
        cy.viewport('macbook-13').visit('/')
        cy.get(sidebarNavigation).first().click()
        cy.get(sidebar).should('not.have.class', 'sidebar--collapsed')
    })
})
