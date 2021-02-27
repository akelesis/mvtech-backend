describe("Services test", () => {
    it("General behaviour", () => {
      cy.visit("http://localhost:8080");

      cy.get("#services").scrollIntoView({offset: {top: -50, left: 0}});

      cy.get("#globe-button").click({force: true});
      cy.contains("Websites");

      cy.get("#laptop-button").click({force: true});
      cy.contains("Aplicações Desktop");

      cy.get("#tablet-button").click({force:true});
      cy.contains("PWA");

      cy.get("#server-button").click({force:true});
      cy.contains("Business Intelligence");

      cy.get("#cogs-button").click({force:true});
      cy.contains("Manutenção");

      cy.get("#palette-button").click({force:true});
      cy.contains("Desenvolvimento de Layouts");
    });
  });
  