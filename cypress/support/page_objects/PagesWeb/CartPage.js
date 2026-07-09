class CartPage {

    validarQuantidadeProdutos(quantidade) {

        cy.get('#cart_info_table tbody tr')
            .should('have.length', quantidade);

    }

    validarProduto(produto) {

        cy.get('.cart_description a')
            .should('contain', produto);

    }

    validarQuantidade(quantidade) {

        cy.get('.cart_quantity button')
            .should('contain', quantidade);

    }

    validarPreco() {

        cy.get('@precoProduto').then((precoEsperado) => {

            cy.get('.cart_price p')
                .invoke('text')
                .then((precoCarrinho) => {

                    expect(precoCarrinho.trim()).to.equal(precoEsperado);

                });

        });

    }

    prosseguirCheckout() {

        cy.contains('Proceed To Checkout')
            .click();

    }

    apagarItemCarrinho(){

        cy.get('[href="/view_cart"]')
            .click();

        cy.get('.cart_quantity_delete')
            .click();

        cy.get('[id="empty_cart"]')
            .should('exist');

    }

}

export default new CartPage();