const locator = require('../locator/DashboardPageLocator')


class DashboardPage{
    async click_perbesar() {
    //cy.xpath(locator.datatestid.perbesar).click()
    cy.viewport(window.screen.width, window.screen.height);
}

async user_name(name) {
    cy.xpath(locator.datatestid.user_name)
        .type(name)
        .should('have.value', name)
}


    async verify_dashboard_page() {
        cy.xpath(locator.datatestid.dashboard, { timeout: 10000 }).should('be.visible')
        cy.xpath(locator.datatestid.promosi, { timeout: 10000 }).should('be.visible')
        cy.xpath(locator.datatestid.konten_marketing, { timeout: 10000 }).should('be.visible')
        cy.xpath(locator.datatestid.pesan, { timeout: 10000 }).should('be.visible')
        cy.xpath(locator.datatestid.klien, { timeout: 10000 }).should('be.visible')
        cy.xpath(locator.datatestid.event, { timeout: 10000 }).should('be.visible')
        cy.xpath(locator.datatestid.transaksi, { timeout: 10000 }).should('be.visible')
        cy.xpath(locator.datatestid.komisi, { timeout: 10000 }).should('be.visible')
    }

 }






module.exports = DashboardPage
