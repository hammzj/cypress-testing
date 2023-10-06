const {Given, When, Then} = require("@badeball/cypress-cucumber-preprocessor");

Given('the base URL is visited',
    function () {
        cy.visit(Cypress.config().baseUrl);
    });

When('the page is viewed', function () {
    cy.wait(100);
});

Then('a long list of items is validated', function () {
    const items = [
        {id: `dropdownProduct`, dataCy: 'dropdown-product', text: 'Product'},
        {id: `dropdownDocs`, dataCy: 'dropdown-docs', text: 'Docs'},
        {id: `dropdownCommunity`, dataCy: 'dropdown-community', text: 'Community'},
        {id: `dropdownCompany`, dataCy: 'dropdown-company', text: 'Company'},
        {id: `dropdownPricing`, dataCy: 'dropdown-pricing', text: 'Pricing'},
    ];

    items.forEach(i => {
        const element = cy.get(`a[id="${i.id}"]`);
        element.its('data-cy').should('eq', i.dataCy);
        element.should('contain.text', i.text);
    });
});
