/// <reference types = "cypress"/>

describe("Mouse Actions",()=> {

    it("Testing mouse hover functionality", ()=> {
        cy.visit('http://webdriveruniversity.com')
        cy.get('#actions')
          .invoke('removeAttr','target')
          .click()

        cy.url().should('include','Actions')
        cy.get('#droppable').should('be.visible')

        cy.get('.dropbtn').first().trigger('mouseover')
    });

    it.only("Testing mouse hover functionality with Amazon", ()=> {
        cy.visit('https://www.amazon.in/')
        cy.get('#nav-tools a')
          .eq(1)
          .trigger('mouseover')

        cy.get('#nav-al-your-account a').each(($e1, index, elist) => {
            cy.log(index+" : "+$e1.text())

            if($e1.text().includes("Your Prime Video")){
                cy.wrap($e1).click({force:true})
                // cy.url().should('include','primevideo')
            }          

        })

    });

});