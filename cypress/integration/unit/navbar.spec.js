describe("Navbar Test", () => {
  it("Desktop device", () => {
    cy.visit("http://localhost:8080");

    cy.contains("Quem Somos").click();
    cy.url().should("include", "#about");
    cy.get("#about").isInViewport();

    cy.contains("Serviços").click();
    cy.url().should("include", "#services");
    cy.get("#services").isInViewport();

    cy.contains("Tecnologias").click();
    cy.url().should("include", "#tecnologies");
    cy.get("#tecnologies").isInViewport();

    cy.contains("Portfólio").click();
    cy.url().should("include", "#portfolio");
    cy.get("#portfolio").isInViewport();

    cy.contains("Solicite Orçamento").click();
    cy.url().should("include", "#budget");
    cy.get("#budget").isInViewport();
  });

  it("Mobile device", () => {
    cy.visit("http://localhost:8080");
  });
});
