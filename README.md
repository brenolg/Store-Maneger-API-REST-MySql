

## Banco de dados  
<details close>
    <summary><strong> Diagrama e Tabelas</strong></summary>
  - MySQL 

 #### Diagrama de Entidade-Relacionamento
<img>

#### Tabelas
  
 O banco terá três tabelas:

- A tabela `products`, com os atributos `id` e `name`;
- A tabela `sales`, com os atributos `id` e `date`;
- A tabela `sales_products`, com os atributos `sale_id`, `product_id` e `quantity`;
- O script de criação do banco de dados pode ser visto [aqui](migration.sql);
- O script que popula o banco de dados pode ser visto [aqui](seed.sql);
 </details>

## Documentação da API
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

01. Crie endpoints para listar produtos
02. Desenvolva testes que cubram no mínimo 5% das camadas da sua aplicação
03. Crie endpoint para cadastrar produtos
04. Crie validações para produtos
05. Desenvolva testes que cubram no mínimo 10% das camadas da sua aplicação
06. Crie endpoint para validar e cadastrar vendas
07. Desenvolva testes que cubram no mínimo 15% das camadas da sua aplicação
08. Crie endpoints para listar vendas
09. Desenvolva testes que cubram no mínimo 20% das camadas da sua aplicação
10. Crie endpoint para atualizar um produto
11. Desenvolva testes que cubram no mínimo 25% das camadas da sua aplicação
12. Crie endpoint para deletar um produto
</details>
