class InventoryPage {
    elements = {
        inventoryContainer: () => cy.get('#inventory_container'),
    }
}

module.exports = new InventoryPage();