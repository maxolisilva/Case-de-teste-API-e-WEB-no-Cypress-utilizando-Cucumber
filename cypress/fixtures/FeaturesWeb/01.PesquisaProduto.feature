@web
@pesquisa

Feature: PesquisaProduto

    Background:
        Given Tela De Login É Acessada

    Scenario Outline: Pesquisar Um Produto E Validar

        When Login É Realizado Com "<email>" e "<senha>"
        Then Valida Se Nome Do Usuario É "<nomeUsuario>"
        And Produto "<produto>" É Pesquisado
        And Valida Se Produto "<produto>" É O Unico Filtrado

        Examples:

            | email                      | senha  | produto                      | nomeUsuario                |
            | maxsilva.teste@gmail.com   | 102030 | Little Girls Mr. Panda Shirt | Max Andre Oliveira e Silva |