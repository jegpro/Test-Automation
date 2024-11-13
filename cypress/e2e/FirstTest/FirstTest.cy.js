describe('My First Tests', () => {
    it('Visiting Google displays the correct title', () => {
        cy.visit('https://google.com')
        cy.title().should('contain', 'Google');
    })
})