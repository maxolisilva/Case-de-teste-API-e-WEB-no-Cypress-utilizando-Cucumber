@web
@carrinho

Feature: Carrinho

    Background:
        Given Tela De Login É Acessada

    Scenario Outline: Adicionar Produto Em Carrinho e Validar

        When Login É Realizado Com "<email>" e "<senha>"
        And Produto "<produto>" É Pesquisado
        And Produto "<produto>" É Adicionado Ao Carrinho
        And Carrinho é Acessado Pela Compra
        And Existencia Do Produto "<produto>" É Validada No Carrinho

        Examples:

            | email                      | senha  | produto                      |
            | maxsilva.teste@gmail.com   | 102030 | Little Girls Mr. Panda Shirt |