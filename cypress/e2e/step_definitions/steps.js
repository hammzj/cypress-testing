const {Given, When, Then} = require("@badeball/cypress-cucumber-preprocessor");

Given("the base URL is visited", function () {
    cy.visit(Cypress.config().baseUrl);
});

When("the page is viewed", function () {
    cy.wait(100);
});

const items = [
    {text: "Product", href: "/app"},
    {text: "Docs", href: "https://on.cypress.io/"},
    {text: "Community", href: "/blog"},
    {text: "Company", href: "/blog/category/Company"},
    {text: "Pricing", href: "/pricing"},
];
const createLongListOfItems = () => {
    let i = 0;
    const longList = [];
    do {
        longList.push(items);
        i++;
    } while (i < 70);
    return longList.flat();
};

Then("a long list of items is validated", function () {
    const longListOfItems = createLongListOfItems();
    cy.log("longListOfItems.length", longListOfItems.length);
    longListOfItems.forEach(i => {
        const element = cy.contains("a", i.text);
        element.should("contain.text", i.text);
        element.should("have.attr", "href", i.href);
        //cy.wait(100); //Seems to help avoid testrunner freezing
    });
});

Then("the test waits for {int} seconds", function (ms) {
    cy.wait(1000 * ms);
});
