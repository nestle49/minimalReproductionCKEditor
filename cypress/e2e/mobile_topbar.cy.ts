const topbar = '[data-testid="topbar"]'
const topbarInfoBtn = '[data-testid="tb-info-btn"]'
const topbarInfoContainer = '[data-testid="tb-info-container"]'
const topbarBurger = '[data-testid="tb-burger"]'
const topbarMenu = '[data-testid="tb-menu"]'

describe('mobile topbar', () => {
    beforeEach(() => {
        cy.viewport('iphone-xr').visit('/')
    })

    it('should be visible', () => {
        cy.get(topbar).should('be.visible')
    })

    it('should open information by click', () => {
        cy.get(topbarInfoBtn).should('be.visible').click()
        cy.get(topbarInfoContainer).should('be.visible')
    })

    it('should open menu by click', () => {
        cy.get(topbarBurger).should('be.visible').click()
        cy.get(topbarMenu).should('be.visible')
    })
})
