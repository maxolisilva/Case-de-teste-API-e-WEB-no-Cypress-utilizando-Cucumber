import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import TrelloService from "../../services/TrelloService";

When("Uma Requisição GET É Enviada Para A API Do Trello", () => {

    TrelloService.obterAction()

        .then((response) => {

            cy.wrap(response).as("response");

        });

});

Then("O Status Da Resposta É 200", () => {

    cy.get("@response").then((response) => {

        expect(response.status).to.eq(200);

    });

});

Then("A Estrutura Da Resposta É Valida", () => {

    cy.get("@response").then((response) => {

        expect(response.body).to.have.property("data");

        expect(response.body.data).to.have.property("list");

        expect(response.body.data.list).to.have.property("id");

        expect(response.body.data.list).to.have.property("name");

        expect(response.body.data.list.name).to.not.be.empty;

    });

});

Then("O Nome Da Lista É Exibido", () => {

    cy.get("@response").then((response) => {

        cy.log(`Nome da lista: ${response.body.data.list.name}`);

    });

});