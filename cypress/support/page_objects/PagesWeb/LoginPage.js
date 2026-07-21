class LoginPage {

    elements = {

        email: () => cy.get('[data-qa="login-email"]'),

        senha: () => cy.get('[data-qa="login-password"]'),

        entrar: () => cy.get('[data-qa="login-button"]'),

        usuarioLogado: (nome) => cy.contains(`Logged in as ${nome}`)

    }

    acessar() {

        cy.visit("https://www.automationexercise.com/login");

    }

    preencherEmailESenha(email, senha) {

        this.elements.email()
            .clear()
            .type(email);

        this.elements.senha()
            .clear()
            .type(senha);

    }

    clicarEntrar() {

        this.elements.entrar().click();

    }

    validarLogin(nome) {

        this.elements.usuarioLogado(nome)
            .should("be.visible");

    }

    realizarLogin(email, senha) {

        this.preencherEmailESenha(email, senha);

        this.clicarEntrar();

    }

}

export default new LoginPage();