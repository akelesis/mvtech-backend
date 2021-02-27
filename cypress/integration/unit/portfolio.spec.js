describe("Portfolio test", () => {
    it("General behaviour", () => {
      cy.visit("http://localhost:8080");

      cy.get("#portfolio").scrollIntoView({offset: {top: -50, left: 0}});

      cy.get("#consulba-button").click({force: true});
      cy.contains("Sistema web de consultas online");

      cy.get("#conextude-button").click({force: true});
      cy.contains("O projeto visa facilitar a relação entre escolas e seus alunos");

      cy.get("#don-button").click({force:true});
      cy.contains("O DoN é um sistema web na área de nutrição");
    });
  });
  