class CartPage {

    elements = {

        linhasCarrinho: () => cy.get('#cart_info_table tbody tr'),

        descricaoProduto: () => cy.get('.cart_description a'),

        quantidadeProduto: () => cy.get('.cart_quantity button'),

        precoProduto: () => cy.get('.cart_price p'),

        botaoCheckout: () => cy.contains('Proceed To Checkout'),

        botaoCarrinho: () => cy.get('[href="/view_cart"]'),

        botaoExcluir: () => cy.get('.cart_quantity_delete'),

        carrinhoVazio: () => cy.get('#empty_cart')

    }

    validarQuantidadeTiposDeProduto(quantidade) {

        this.elements.linhasCarrinho()
            .should('have.length', quantidade);

    }

    validarProduto(produto) {

        this.elements.descricaoProduto()
            .should('contain', produto);

    }

    validarQuantidadeDeCertoProduto(quantidade) {

        this.elements.quantidadeProduto()
            .should('contain', quantidade);

    }

    validarPreco() {

        cy.get('@precoProduto').then((precoEsperado) => {

            this.elements.precoProduto()
                .invoke('text')
                .then((precoCarrinho) => {

                    expect(precoCarrinho.trim()).to.equal(precoEsperado);

                });

        });

    }

    prosseguirCheckout() {

        this.elements.botaoCheckout().click();

    }

    apagarItemCarrinho() {

        this.elements.botaoCarrinho().click();

        this.elements.botaoExcluir().click();

        this.elements.carrinhoVazio()
            .should('exist');

    }

}

export default new CartPage();