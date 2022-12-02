import '@4tw/cypress-drag-drop'

describe('Start test cypress', () => {

    it('should load without crashing', () => {
        cy.visit('http://localhost:3000/login');
    });

    it("login user", () => {
        cy.get("[data-class='input-email']").type('ineytin@yandex.ru');
        cy.get("[data-class='input-password']").type('1234567890');
        cy.get("[data-class='btn-login']").click();
    });

    it('open modal ingredient', () => {
        cy.get("[data-class='ingredient-60d3b41abdacab0026a733c6']").click();
        cy.wait(1000);
        cy.get("[data-class='modal-close-btn']").click();
    });

    it('drag bun to constructor', () => {
        cy.get("[data-class='ingredient-60d3b41abdacab0026a733c6']").trigger('dragstart');
        cy.get("[data-class='place-bun-top']")
            .trigger('dragenter', { force: true })
            .trigger('dragover', { force: true })
            .trigger('drop', { force: true })
    });

    it('drag ingredient to constructor', () => {
        cy.get("[data-class='ingredient-60d3b41abdacab0026a733cc']").trigger('dragstart');
        cy.get("[data-class='place-ingredients']")
            .trigger('dragenter', { force: true })
            .trigger('dragover', { force: true })
            .trigger('drop', { force: true })
        cy.get("[data-class='ingredient-60d3b41abdacab0026a733ce']").trigger('dragstart');
        cy.get("[data-class='place-ingredients']")
            .trigger('dragenter', { force: true })
            .trigger('dragover', { force: true })
            .trigger('drop', { force: true })
    });

    it('send and check order', () => {
        cy.get("[data-class='order-btn']").click();
        cy.wait(7000);
        cy.get("[data-class='modal-close-btn']").click();
    });

})