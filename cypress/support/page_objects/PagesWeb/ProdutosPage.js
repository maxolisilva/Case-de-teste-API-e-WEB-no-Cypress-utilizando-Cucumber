class ProductsPage {

elements = {

    menuProdutos: () => cy.contains('Products'),

    campoPesquisa: () => cy.get('#search_product'),

    botaoPesquisar: () => cy.get('#submit_search'),

    botaoViewProduct: () => cy.contains('View Product'),

    tituloProduto: () => cy.get('.product-information h2'),

    mensagemAdded: () => cy.contains('Added!'),

    mensagemProdutoAdicionado: () => cy.contains('Your product has been added to cart.'),

    botaoViewCart: () => cy.contains('View Cart'),

    MenuCart: () => cy.contains('Cart'),

    precoProdutoCard: () => cy.get('.productinfo h2'),

    botaoAdicionar: () => cy.contains('Add to cart')

}

    pesquisar(produto) {

        this.elements.menuProdutos().click();

        this.elements.campoPesquisa()
            .clear()
            .type(produto);

        this.elements.botaoPesquisar().click();

    }

    validarQuantidadeViewProduct(quantidade) {

        this.elements.botaoViewProduct()
            .should('have.length', quantidade);

    }

    clicarViewProduct() {

        this.elements.botaoViewProduct()
            .click();

    }

    validarTituloProduto(produto) {

        this.elements.tituloProduto()
            .should('contain.text', produto);

    }

    adicionarPrimeiroProduto(produto) {

        cy.contains(produto)
            .parents('.product-image-wrapper')
            .within(() => {
                
            this.elements.precoProdutoCard()
                .invoke('text')
                .then((preco) => {
                    cy.wrap(preco.trim()).as('precoProduto');
                });

            this.elements.botaoAdicionar().click();

            });

        this.validarProdutoAdicionado();

    }

    validarProdutoAdicionado() {

        this.elements.mensagemAdded()
            .should('be.visible');

        this.elements.mensagemProdutoAdicionado()
            .should('be.visible');

    }

    visualizarCarrinhoPelaCompra() {

        this.elements.botaoViewCart().click();

    }

    visualizarCarrinhoPeloMenu() {

        this.elements.MenuCart().click();

    }

}

export default new ProductsPage();