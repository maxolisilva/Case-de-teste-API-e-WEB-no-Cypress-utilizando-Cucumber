import LoginPage from "../../page_objects/PagesWeb/LoginPage";
import ProdutosPage from "../../page_objects/PagesWeb/ProdutosPage";
import CartPage from "../../page_objects/PagesWeb/CartPage";

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

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

When("Produto {string} É Adicionado Ao Carrinho", (produto) => {

    ProdutosPage.adicionarPrimeiroProduto(produto);

});

When("Carrinho é Acessado",()=>{

    ProdutosPage.visualizarCarrinho();

})

When("Existencia Do Produto {string} É Validada No Carrinho",(produto)=>{

    CartPage.validarQuantidadeProdutos(1);

    CartPage.validarProduto(produto);

    CartPage.validarQuantidade(1);

    CartPage.validarPreco();

})

When("Prossegue Para Checkout",()=>{

    CartPage.prosseguirCheckout()

})

Then("Produto {string} É Exibido Em Resumo Da Compra",(produto)=>{

    CartPage.validarProduto(produto);

    CartPage.validarQuantidade(1);

    CartPage.validarPreco();
})

Then("Remover Item Do Carrinho",()=>{

    CartPage.apagarItemCarrinho();


})