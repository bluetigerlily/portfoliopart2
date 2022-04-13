describe(`My First Test`, () => {
    it(`Makes an assertion`, () =>  {
        // Arrange -setup initial app state
        // - visit a webpage -
        cy.visit(`https://excellentscales.emergentsoftware.io/`)
        // - query for an element -
        cy.contains(`Products`)
        cy.contains(`Company`)
        cy.contains(`Contact Us`)
        // Act - take an action - 
        // - interact with that element -
        // Assert - make an assertion about page content -
        // cy.url()
        //     .should(`include`, `/commands/action`)
        
        // cy.get(`.action-email`)
        //     .type(`fake@email.com`)
        //     .should(`have.value`, `fake@email.com`)
      
    })
})
