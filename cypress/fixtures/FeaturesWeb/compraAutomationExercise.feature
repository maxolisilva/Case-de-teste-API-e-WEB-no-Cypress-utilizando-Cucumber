@web

Feature: Compra de produtos

    Background:
        Given Tela De Login É Acessada

    Scenario Outline: Comprar um produto com sucesso

        When Login É Realizado Com "<email>" e "<senha>"
        Then Valida Se Nome Do Usuario É "<nomeUsuario>"
        And Produto "<produto>" É Pesquisado
        And Produto "<produto>" É Adicionado Ao Carrinho
        And Carrinho é Acessado
        And Existencia Do Produto "<produto>" É Validada No Carrinho
        And Prossegue Para Checkout
        Then Produto "<produto>" É Exibido Em Resumo Da Compra
        Then Remover Item Do Carrinho

        Examples:

            | email                      | senha  | produto                      | nomeUsuario                |
            | maxsilva.teste@gmail.com   | 102030 | Little Girls Mr. Panda Shirt | Max Andre Oliveira e Silva |