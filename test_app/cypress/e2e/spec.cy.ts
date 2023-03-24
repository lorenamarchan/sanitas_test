describe('Test app E2E', () => {

  it('Visits the initial project page correctly', () => {
    cy.visit('/')
    const header = cy.get('.main__header')
    const content = cy.get('.main__content')
    const filterID = cy.get('.filters__field[name="id"]')
    const filterText = cy.get('.filters__field[name="text"]')
    const pagination = cy.get('.main__header__pagination')
    header.should('exist')
    content.should('exist')
    filterID.get('.input__field').should('have.value', '')
    filterText.get('.input__field').should('have.value', '')
    pagination.invoke('attr', 'data-cards-length').should('eq', '4000')
    pagination.get('.mat-mdc-select-value-text').should('have.text', '4000')

  })

  it('Filters cards by ID', () => {
    cy.visit('/')
    cy.get('.filters__field[name="id"]').then(($idFilter) => {
      cy.wrap($idFilter).type('1')
      cy.get('.filters__button').click()
      cy.get('.main__header__pagination').invoke('attr', 'data-cards-length').should('eq', '1111')
    })
  })

  it('Filters cards by Text', () => {
    cy.visit('/')
    cy.get('.filters__field[name="text"]').then(($idText) => {
      cy.wrap($idText).type('photo1')
      cy.get('.filters__button').click()
      cy.get('.main__header__pagination').invoke('attr', 'data-cards-length').should('eq', '1111')
    })
  })

  it('Paginates correctly', () => {
    cy.visit('/')
    cy.get('.mat-mdc-select-trigger').then(($select) => {
      cy.wrap($select).click().then(() => {
        cy.get('.mat-mdc-option').first().then(($firstOption) => {
          cy.wrap($firstOption).click().then(() => {
            cy.get('.mat-mdc-paginator-navigation-next').click().then(() => {
                cy.get('app-card [role="card-id"]').first().should("have.text", "#251")
            })
          })
        })
      })
    })
  })

  it('Returns to first page after applying filters', () => {
    cy.visit('/')
    cy.get('.mat-mdc-select-trigger').then(($select) => {
      cy.wrap($select).click().then(() => {
        cy.get('.mat-mdc-option').first().then(($firstOption) => {
          cy.wrap($firstOption).click().then(() => {
            cy.get('.mat-mdc-paginator-navigation-next').click().then(() => {
              cy.get('.filters__field[name="id"]').then(($idFilter) => {
                cy.wrap($idFilter).type('1')
                cy.get('.filters__button').click()
                cy.get('.main__header__pagination').invoke('attr', 'data-page').should('eq', '0')
              })
            })
          })
        })
      })
    })
  })

})
