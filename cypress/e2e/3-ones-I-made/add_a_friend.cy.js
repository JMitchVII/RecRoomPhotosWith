describe('adding a friend', () => {
    it('accepts the name of a friend as input', () => {
        cy.visit('http://localhost:3000');

        cy.get('[data-testid="FriendSearchField"]')
            .type('Kookaburra')
    })
})