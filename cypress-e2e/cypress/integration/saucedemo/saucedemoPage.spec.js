import SauceDemoPage from '../../pages/saucedemoPage';
import InventoryPage from '../../pages/inventoryPage';

describe('SauceDemo tests', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    });

    it('Should have title Swag Labs', () => {
        cy.title().should('eq', 'Swag Labs');
    });

    it('Should URL use https', () => {
        cy.location('protocol').should('contains', 'https');
    });

    it('Should URL be https://www.saucedemo.com/', () => {
        cy.url().should('eq', 'https://www.saucedemo.com/');
    });

    it('Should redirect /inventory', () => {
        SauceDemoPage.typeUsername('standard_user');
        SauceDemoPage.typePassword('secret_sauce');
        SauceDemoPage.login();
        InventoryPage.elements.inventoryContainer().should('be.visible');
        cy.location('pathname').should('eq', '/inventory.html');
    });
    
});