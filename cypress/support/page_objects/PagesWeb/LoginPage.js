class LoginPage {

    acessar(){

        cy.visit("https://www.automationexercise.com/login")

    }

    preencherEmailESenha(email, senha){

        cy.get('[data-qa="login-email"]')
            .clear()
            .type(email)

        cy.get('[data-qa="login-password"]')
            .clear()
            .type(senha)

    }

    clicarEntrar(){

        cy.get('[data-qa="login-button"]').click()

    }

    validarLogin(nomeUsuario) {

        cy.contains(`Logged in as ${nomeUsuario}`)
            .should('be.visible');

    }

    realizarLogin(email,senha){

        this.preencherEmailESenha(email, senha)

        this.clicarEntrar();

    }

}

export default new LoginPage()