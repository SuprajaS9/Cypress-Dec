/// <reference types = "cypress"/>

describe("Drag And Drop",()=> {

    it("Testing Drag And Drop functionality", ()=> {
        cy.visit('http://webdriveruniversity.com')
        cy.get('#actions')
          .invoke('removeAttr','target')
          .click()

        cy.get('#draggable').trigger('mousedown', {which:1})
        // cy.get('#draggable').trigger('mousedown', {which:1, pageX: 100, pageY: 50})
        cy.get('#droppable')
          .scrollIntoView()
          .trigger('mousemove')
          .trigger('mouseup',{force:true})
    });

});
