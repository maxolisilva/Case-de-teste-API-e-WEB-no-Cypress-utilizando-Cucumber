import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import CartPage from "../../page_objects/PagesWeb/CartPage";
import LoginPage from "../../page_objects/PagesWeb/LoginPage";
import ProdutosPage from "../../page_objects/PagesWeb/ProdutosPage";

Given("Tela De Login É Acessada",()=>{

    LoginPage.acessar()

})

When("Login É Realizado Com {string} e {string}",(email,senha)=>{

    LoginPage.realizarLogin(email,senha)

})

Then("Valida Se Nome Do Usuario É {string}", (nomeUsuario) => {

    LoginPage.validarLogin(nomeUsuario);

});

When("Produto {string} É Pesquisado",(produto)=>{

    ProdutosPage.pesquisar(produto)

})

Then("Existe apenas {int} View Product", (quantidade) => {

    ProdutosPage.validarQuantidadeViewProduct(quantidade);

});

When("Valida Se Produto {string} É O Unico Filtrado", (produto) => {

    ProdutosPage.validarQuantidadeViewProduct(1);
    ProdutosPage.clicarViewProduct();
    ProdutosPage.validarTituloProduto(produto);

});

When("Produto {string} É Adicionado Ao Carrinho", (produto) => {

    ProdutosPage.adicionarPrimeiroProduto(produto);

});

When("Carrinho é Acessado Pela Compra",()=>{

    ProdutosPage.visualizarCarrinhoPelaCompra();

})

When("Carrinho é Acessado Por Menu",()=>{

    ProdutosPage.visualizarCarrinhoPeloMenu();

})

When("Existencia Do Produto {string} É Validada No Carrinho",(produto)=>{

    CartPage.validarQuantidadeTiposDeProduto(1);

    CartPage.validarProduto(produto);

    CartPage.validarQuantidadeDeCertoProduto(1);

    CartPage.validarPreco();

})

When("Prossegue Para Checkout",()=>{

    CartPage.prosseguirCheckout()

})

Then("Produto {string} É Exibido Em Resumo Da Compra",(produto)=>{

    CartPage.validarProduto(produto);

    CartPage.validarQuantidadeDeCertoProduto(1);
})

Then("Remover Item Do Carrinho",()=>{

    CartPage.apagarItemCarrinho();


})