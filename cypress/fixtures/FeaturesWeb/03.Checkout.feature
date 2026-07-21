@web
@cesquisa

Feature: Checkout

    Background:
        Given Tela De Login É Acessada

    Scenario Outline: Validar Produto Na Tela De Pagamento

        When Login É Realizado Com "<email>" e "<senha>"
        And Carrinho é Acessado Por Menu
        And Prossegue Para Checkout
        Then Produto "<produto>" É Exibido Em Resumo Da Compra
        Then Remover Item Do Carrinho

        Examples:

            | email                      | senha  | produto                      |
            | maxsilva.teste@gmail.com   | 102030 | Little Girls Mr. Panda Shirt |