# Teste Técnico - Automação Web e API

## Descrição

Este projeto foi desenvolvido como solução para o teste técnico de automação utilizando **Cypress**, **Cucumber** e **JavaScript**.

Foram automatizados cenários Web e API seguindo o padrão **Page Object Model (POM)** para os testes Web e **Service Object** para os testes de API, para melhor organização, reutilização de código e facilidade de manutenção.


## Tecnologias Utilizadas

- JavaScript
- Cypress
- Cucumber
- Node.js


## Pré-requisitos

Antes de executar o projeto, é necessário possuir instalado:

- Node.js
- NPM (instalado junto com o Node.js)


## Instalação

Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
```

Acesse a pasta do projeto:

```bash
cd <NOME_DO_PROJETO>
```

Instale todas as dependências:

```bash
npm install
```

## Executando os Testes

### Abrir a interface do Cypress

```bash
npx cypress open
```

Após abrir o Cypress:

- Selecione **E2E Testing**
- Escolha um navegador
- Execute o arquivo `.feature` desejado

---

### Executar todos os testes via terminal

```bash
npx cypress run
```

---

## Estrutura do Projeto

```
cypress
│
├── downloads
│
├── fixtures
│   ├── FeaturesApi
│   │   └── Trello.feature
│   ├── FeaturesWeb
│   │   └── compraAutomationExercise.feature
│   └── informações.json
│
├── support
│   ├── page_objects
│   │   └── PagesWeb
│   │       ├── CartPage.js
│   │       ├── LoginPage.js
│   │       └── ProdutosPage.js
│   │
│   ├── services
│   │   └── trelloService.js
│   │
│   ├── step_definitions
│   │   ├── StepsApi
│   │   │   └── trelloStep.js
│   │   └── StepsWeb
│   │       └── compraAutomationExerciseStep.js
│   │
│   ├── commands.js
│   └── e2e.js
│
├── cypress.config.js
├── package.json
└── README.md
```

## Cenários Automatizados

### Web

- Login de usuário
- Validação do usuário autenticado
- Pesquisa de produto
- Adição de produto ao carrinho
- Validação do modal de confirmação
- Validação dos produtos no carrinho
- Acesso ao checkout
- Validação dos produtos na tela de checkout

### API

- Envio de requisição GET para a API do Trello
- Validação do Status Code da resposta
- Validação da estrutura do JSON retornado
- Exibição do campo **list.name**
- Validação da existência e preenchimento dos principais campos da resposta

## Arquitetura

O projeto foi desenvolvido utilizando:

- **BDD** para descrição dos cenários.
- **Page Object Model (POM)** para encapsular ações e validações das páginas Web.
- **Service Object** para centralizar as chamadas da API.
- **Step Definitions** para implementação dos passos descritos nas Features.
- **Fixtures** para armazenamento de dados utilizados pelos testes.

Essa organização busca facilitar a manutenção, reutilização de código e legibilidade do projeto.