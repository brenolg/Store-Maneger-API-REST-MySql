# Store Manager

Neste projeto, foi desenvolvida uma API de gerenciamento de vendas utilizando a arquitetura MSC (Model-Service-Controller) e seguindo os princípios do REST. A API foi construída com o objetivo de possibilitar a criação, visualização, atualização e exclusão de produtos e vendas em um sistema de dropshipping.

A aplicação utiliza um banco de dados MySQL para a gestão dos dados. O desenvolvimento da API seguiu a normalização de dados, garantindo a integridade e a consistência das informações armazenadas no banco.

Em resumo, o projeto Store Manager consiste em uma API de gerenciamento de vendas baseada na arquitetura MSC e seguindo os princípios do REST. Com a utilização do banco de dados MySQL, é possível criar, visualizar, atualizar e excluir produtos e vendas, proporcionando uma plataforma robusta e escalável para o gerenciamento eficiente das operações de dropshipping.

## Funcionalidades

- Endpoints que irão cadastrar, listar, pesquisar, editar e excluir produtos
- Endpoints que irão cadastrar, listar, pesquisar, editar e excluir vendas

## Tecnologias utilizadas
- APIs REST
- MSC Architeture
- Express
- C.R.U.D
- Middlewares
- Node.js

## Banco de dados
<details close>
    <summary><strong> Diagrama e Tabelas</strong></summary>


 #### Diagrama de Entidade-Relacionamento
<img src='./storeManager.png'>

#### Tabelas

 O banco terá três tabelas:

- A tabela `products`, com os atributos `id` e `name`;
- A tabela `sales`, com os atributos `id` e `date`;
- A tabela `sales_products`, com os atributos `sale_id`, `product_id` e `quantity`;
- O script de criação do banco de dados pode ser visto [aqui](migration.sql);
- O script que popula o banco de dados pode ser visto [aqui](seed.sql);
 </details>

## Documentação da API
A API segue os princípios do REST, fornecendo uma interface uniforme e intuitiva por meio de endpoints que representam as entidades e suas operações. Isso resulta em um sistema eficiente e escalável para o gerenciamento de vendas no modelo dropshipping.

<details close>
      <summary><strong> Visão geral</summary>

| Endpoint     | Método HTTP | Descrição               |
| :----------- | :---------- | :---------------------- |
| [`/products`](#)   | GET        | Todos os produtos devem ser retornados|
| [`/products/:id`](#)| GET         | Apenas o produto com o id presente na URL deve ser retornado|
| [`/products`](#)     | POST         | Cria um produto
| [`/products/:id`](#) | PUT      | Atualizar um produto
| [`/products/:id`](#)   | DELETE       | Deleta um produto
| [`/sales`](#)   | GET        | Todos os produtos devem ser retornados|
| [`/sales`](#)| GET         | Apenas a venda com o id presente na URL deve ser retornada;|
| [`/sales`](#)     | POST         | Validar e cadastrar vendas
| [`/sales/:id`](#) | PUT      | Atualizar uma venda
| [`/sales/:id`](#)   | DELETE       | Deleta uma venda
 </details>

## Requisitos
<details close>
1. Crie endpoints para listar produtos
2. Desenvolva testes que cubram no mínimo 5% das camadas da sua aplicação
3. Crie endpoint para cadastrar produtos
4. Crie validações para produtos
5. Desenvolva testes que cubram no mínimo 10% das camadas da sua aplicação
6. Crie endpoint para validar e cadastrar vendas
7. Desenvolva testes que cubram no mínimo 15% das camadas da sua aplicação
8. Crie endpoints para listar vendas
9. Desenvolva testes que cubram no mínimo 20% das camadas da sua aplicação
10. Crie endpoint para atualizar um produto
11. Desenvolva testes que cubram no mínimo 25% das camadas da sua aplicação
</details>

## Instalação do projeto localmente

Para instalar e executar o projeto localmente, você precisa ter o Docker instalado na sua máquina. Depois, siga os seguintes passos:

1. Clone o repositório do GitHub:

```bash
git clone git@github.com:brenolg/Store-Maneger-API-REST-MySql.git
```
Rode os serviços node e db:
```bash
docker-compose up -d
```
Rode o container one_for_all via CLI ou abri-lo no VS Code
```bash
docker exec -it store_manager bash
```
Instale as dependências usando
```bash
npm install
```
- Execute a aplicação com npm run debug
- Execute as rotas como preferir

## Agradecimentos
Este projeto foi desenvolvido como parte do curso de Desenvolvimento de Software da Trybe. Agradeço à Trybe pela oportunidade de aprender e praticar SQL e outras tecnologias.
