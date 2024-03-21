describe("Note app", function () {
    beforeEach(function () {
        cy.visit("http://127.0.0.1:5500/index.html");
    });
    it("front page can be opened", function () {
        cy.contains("Is Frontend Mentor free?");
        cy.contains("What is Frontend Mentor, and how will it help me?");
        cy.contains(`Frontend Mentor offers realistic`);
    });
    it("login form can be opened", function () {
        cy.contains("Is Frontend Mentor free?").click();
        cy.contains("Yes, Frontend Mentor offers both free and premium coding");
    });
});
