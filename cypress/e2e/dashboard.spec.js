describe('Dashboard Tests', () => {
  it('should load the dashboard and display KPIs', () => {
    cy.visit('/');
    cy.contains('Dashboard').should('be.visible');
    cy.contains('Active Clients').should('be.visible');
    cy.contains('Revenue').should('be.visible');
  });

  it('should open the filter dialog', () => {
    cy.visit('/');
    cy.get('[aria-label="filter"]').click();
    cy.contains('Filter Dialog').should('be.visible');
  });
});
