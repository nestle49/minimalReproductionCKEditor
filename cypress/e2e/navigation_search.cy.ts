const mockSearchQueries = ['смс', 'аккаунт', 'сервис', 'тех', 'сайт']

describe('navigation search', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('search input should have value', () => {
        cy.get('.navigation-search input').type('смс')
        cy.get('.navigation-search input').invoke('val').should('equal', 'смс')
    })

    it('short string should not trigger search', () => {
        cy.get('.navigation-search input').type('см')
        cy.get('.main-nav [type="checkbox"]').each<HTMLInputElement>(($el) => {
            cy.wrap($el).should('not.be.checked')
        })
    })

    mockSearchQueries.forEach((query) => {
        it(`found items with query=${query} should be visible`, () => {
            cy.get('.navigation-search input').type(query)
            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(500) // because of debounce on input
            cy.get('.main-nav__highlight').each<HTMLInputElement>(($el) => {
                cy.wrap($el).as('highlightedElement')
                cy.get('@highlightedElement').scrollIntoView()
                cy.get('@highlightedElement').should('be.visible')
            })
        })
    })
})
