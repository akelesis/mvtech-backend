describe("Navbar Test", () => {
  it("Desktop device", () => {
    cy.visit("http://localhost:8080");

    cy.contains("Quem Somos").click();
    cy.url().should("include", "#about");
    cy.get("#about");

    cy.contains("Serviços").click();
    cy.url().should("include", "#services");
    cy.get("#services");

    cy.contains("Tecnologias").click();
    cy.url().should("include", "#tecnologies");
    cy.get("#tecnologies");

    cy.contains("Portfólio").click();
    cy.url().should("include", "#portfolio");
    cy.get("#portfolio");

    cy.contains("Solicite Orçamento").click();
    cy.url().should("include", "#budget");
    cy.get("#budget");

    cy.get(".mobile-nav-btn").should("not.be.visible");
  });

  it("Mobile device (smartphone)", () => {
    cy.viewport("iphone-x");
    cy.visit("http://localhost:8080");

    cy.get(".mobile-nav-btn").click();
    cy.get(".mobile-navigator")
      .contains("Quem Somos")
      .click();
    cy.url().should("include", "#about");
    cy.get("#about");

    cy.get(".mobile-nav-btn").click();
    cy.get(".mobile-navigator")
      .contains("Serviços")
      .click();
    cy.url().should("include", "#services");
    cy.get("#services");

    cy.get(".mobile-nav-btn").click();
    cy.get(".mobile-navigator")
      .contains("Tecnologias")
      .click();
    cy.url().should("include", "#tecnologies");
    cy.get("#tecnologies");

    cy.get(".mobile-nav-btn").click();
    cy.get(".mobile-navigator")
      .contains("Portfólio")
      .click();
    cy.url().should("include", "#portfolio");
    cy.get("#portfolio");

    cy.get(".mobile-nav-btn").click();
    cy.get(".mobile-navigator")
      .contains("Solicite Orçamento")
      .click();
    cy.url().should("include", "#budget");
    cy.get("#budget");
  });

  it("Medium tablet", () => {
    cy.viewport("ipad-2");
    cy.visit("http://localhost:8080");

    cy.get(".mobile-nav-btn").click();
    cy.get(".mobile-navigator")
      .contains("Quem Somos")
      .click();
    cy.url().should("include", "#about");
    cy.get("#about");

    cy.get(".mobile-nav-btn").click();
    cy.get(".mobile-navigator")
      .contains("Serviços")
      .click();
    cy.url().should("include", "#services");
    cy.get("#services");

    cy.get(".mobile-nav-btn").click();
    cy.get(".mobile-navigator")
      .contains("Tecnologias")
      .click();
    cy.url().should("include", "#tecnologies");
    cy.get("#tecnologies");

    cy.get(".mobile-nav-btn").click();
    cy.get(".mobile-navigator")
      .contains("Portfólio")
      .click();
    cy.url().should("include", "#portfolio");
    cy.get("#portfolio");

    cy.get(".mobile-nav-btn").click();
    cy.get(".mobile-navigator")
      .contains("Solicite Orçamento")
      .click();
    cy.url().should("include", "#budget");
    cy.get("#budget");
  });

  it("Large tablet", () => {
    // I know macbook is not a tablet, but it was the closest preset I could find
    cy.viewport("macbook-11");
    cy.visit("http://localhost:8080");

    cy.contains("Quem Somos").click();
    cy.url().should("include", "#about");
    cy.get("#about");

    cy.contains("Serviços").click();
    cy.url().should("include", "#services");
    cy.get("#services");

    cy.contains("Tecnologias").click();
    cy.url().should("include", "#tecnologies");
    cy.get("#tecnologies");

    cy.contains("Portfólio").click();
    cy.url().should("include", "#portfolio");
    cy.get("#portfolio");

    cy.contains("Solicite Orçamento").click();
    cy.url().should("include", "#budget");
    cy.get("#budget");

    cy.get(".mobile-nav-btn").should("not.be.visible");
  });
});
