class ProductsPage {

    pesquisar(produto) {

        cy.contains("Products").click();

        cy.get("#search_product")
            .clear()
            .type(produto);

        cy.get("#submit_search").click();
    }

    adicionarPrimeiroProduto(produto) {

        cy.contains(produto)
            .parents('.product-image-wrapper')
            .within(() => {

                cy.get('.productinfo h2')
                    .invoke('text')
                    .then((preco) => {

                        cy.wrap(preco.trim()).as('precoProduto');

                    });

                cy.contains('Add to cart').click();

            });

        this.validarProdutoAdicionado();

    }

    validarProdutoAdicionado() {

        cy.contains("Added!")
            .should("be.visible");

        cy.contains("Your product has been added to cart.")
            .should("be.visible");
    }

    visualizarCarrinho() {

        cy.contains("View Cart").click();

    }
}

export default new ProductsPage();