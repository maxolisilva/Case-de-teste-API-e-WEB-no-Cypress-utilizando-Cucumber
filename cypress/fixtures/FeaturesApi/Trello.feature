@api
@trello

Feature: Consulta de Action do Trello

    Scenario: Consultar Action com sucesso

        When Uma Requisição GET É Enviada Para A API Do Trello
        Then O Status Da Resposta É 200
        And A Estrutura Da Resposta É Valida
        And O Nome Da Lista É Exibido