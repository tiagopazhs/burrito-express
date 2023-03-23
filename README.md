<h1>Burrito Express<img src="https://cdn-icons-png.flaticon.com/512/4343/4343854.png" alt="mexican mask" style="height: 1em; margin-left: 0.4em; margin-top: 0.2em;"></h1>
<p>Burrito Express é uma aplicação de delivery de comida mexicana que possui back-end, front-end e banco de dados relacional, construída com as tecnologias Node.js, React.js e Typescript. Ela permite a criação, leitura, atualização e exclusão de produtos e categorias, bem como o lançamento de vendas. </p>
<h3>Propósito</h3>  
<p>O propósito deste projeto é avaliar habilidades e competências como um desenvolvedor Fullstack.</p>

<h4>Screenshot:</h4>
<p align="center">
  <img src="https://github.com/tiagopazhs/burrito-express/blob/main/web/public/screenshots/sc1.jpg" alt="sample" style="width: 85%">
</p>


## Índice

  * [Funcionalidades](#funcionalidades)
  * [Tecnologias](#tecnologias)
  * [Instalação](#instalação)
  
  
## Funcionalidades
<p>A aplicação foi desenvolvida com uma estrutura robusta no back-end, incluindo rotas, middlewares, controllers, utils e services bem definidos. Além disso, foi implementado um banco de dados com tabelas de produtos, categorias, pedidos e pedidos por item. Embora o front-end apresente algumas limitações devido à necessidade de conclusão do projeto até 22/03/2023, todas as rotas já podem ser testadas com o postman e novas versões serão disponibilizadas em breve.</p>

<h3>Versão 1 - atual</h3>
<h4>Funcionalidades implementadas</h4>

* Back-end em NodeJs com TypeScript.
* CRUD de categorias e produtos para campos personalizados.
* Rotas adicionais: alterar imagem, filtro de produtos e deletar tudo.
* Implantação do CRUD de pedidos com duas tabelas: orders e ordersItem. 
* Banco de dados relacional Postgres.
* Migração e documentação do banco de dados com Sequelize.
* Tela principal em React.tsx.
* Para explorar diferentes estilizações: Tailwind, pasta de constantes customizáveis e Material UI para o componente TopBar/alerts.

<h3>Versão 2</h3>
<h4>Funcionalidades previstas</h4>

* Telas de alterar quantidade, carrinho e pedidos.

<h3>Versão 3</h3>
<h4>Funcionalidades previstas</h4>

* Implementação de personalização dos campos de categorias e produtos diretamente pelo usuário no front-end.
* Deploy na Azure.
* Testes do back-end com Jest.
* Documentação da Api com Swagger

<h3>Versão 4</h3>
<h4>Funcionalidade prevista</h4>

* Criação da aplicação Burrito Express Mobile com React Native.

  
## Tecnologias

<h4>Resumo:</h4>
<p>No projeto foram utilizados o Node.js com Typescript como plataforma principal para o back-end e o framework Express.js para criação de rotas e middleware. PostgreSQL para o banco de dados relacional que foi gerenciado pelo ORM Sequelize. Na interface do usuário, utilizou-se a biblioteca React.tsx tipada e para criar estilos e layouts responsivos utilizou-se Material UI e Tailwind CSS. Para testar e documentar as APIs, a ferramenta Postman foi utilizada.</p>

<h4>Ferramentas:</h4>
<p align="center">
    <img src="https://skillicons.dev/icons?i=ts,js,react,html,css,tailwind,materialui,nodejs,express,postgres,sequelize,postman,git" />
</p>

## Instalação

<h3>Server:</h3>

<p>Clone o repositório em sua máquina local:

```python
git clone https://github.com/tiagopazhs/burrito-express.git
```

<p>Navegue até o diretório server do projeto: 

```python
cd burrito-express
cd server
```

<p>Instale as dependências do projeto utilizando o gerenciador de pacotes npm: 

```python
npm install
```

Inicie o servidor Node.js:
```python
npm run start
```

<h3>Banco de dados:</h3>

Configure as variáveis de ambiente no arquivo .env, com as credenciais do banco de dados e a porta utilizada pela aplicação:

```python
DB_USER=seu-username
DB_PASS=sua-senha
DB_NAME=nome-do-banco-de-dados
```


Crie as tabelas do banco de dados executando as migrations do Sequelize: 
```python
npm run db:migrate
```

<h3>Client:</h3>

Em outra janela do terminal, navegue até o diretório client e instale as dependências do projeto: 
```python
cd client && npm install
```


Inicie o servidor de desenvolvimento do React:
```python
npm start
```

Abra o navegador e acesse http://localhost:3000 para visualizar a aplicação em funcionamento.

<h3>Postman:</h3>

Abra o link no navegador para abrir o workspace no postman e testar os Cruds.

https://www.postman.com/satellite-pilot-16703156/workspace/publicws

