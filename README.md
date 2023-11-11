<h1>Burrito Express<img src="https://cdn-icons-png.flaticon.com/512/4343/4343854.png" alt="mexican mask" style="height: 1em; margin-left: 0.4em; margin-top: 0.2em;"></h1>
<p>Burrito Express is an applicarion to delivery mexican food that have back-end, front-end (future) and data base. It allows to create, read, apdate, exclude products and exclude categories, as it allows to manage orders. </p>
<h3>Purpose</h3>  
<p>The purpose of this project is to show habilities and skils of a Full Stack Software Developer.</p>

<h4>Screenshot:</h4>
<p align="center">
  <img src="https://github.com/tiagopazhs/burrito-express/blob/main/web/public/screenshots/sc1.jpg" alt="sample" style="width: 85%">
</p>


## Index

  * [Features](#features)
  * [Tecnologies](#tecnologies)
  * [Instalation](#instalation)
  
  
## Features
<p>The application was developed with a robust backend structure, including well-defined routes, middlewares, controllers, utils, and services. Additionally, a database with tables for products, categories, orders, and order items was implemented. Although the front-end has some limitations due to the need to complete the interface, all routes can already be tested with Postman.</p>

<h3>Version 1:</h3>
<h4>Funcionalities</h4>

* Back-end using NodeJs + TypeScript.
* CRUD of categories and products to the custom fields.
* Adtional routes: Update image, products filter and delete all.
* CRUD implementation with two tables: orders e ordersItem. 
* Relational database PostgreSQL.
* Migration and documentation of the database using Sequelize.
* Main screen using React.tsx.
* To explore different stylings: Tailwind, a folder for customizable constants, and Material UI for the TopBar/alerts component.

<h3>To do next version:</h3>
<h4>Future features</h4>

* Screens: Update qty, cart and orders.
* Implemnt CRUD directly from front-end instead postman.
* Deploy in Azure.
* Back-end with Jest.
* Swagger api documentation.
 
  
## Tecnologies

<h4>Summary:</h4>
<p>In the project, Node.js with TypeScript was used as the main platform for the back-end, and the Express.js framework was employed to create routes and middleware. PostgreSQL was utilized as the relational database managed by the Sequelize ORM. For the user interface, the typed React.tsx library was used, and to create responsive styles and layouts, Material UI and Tailwind CSS were employed. Postman was used for testing and documenting the APIs.</p>

<h4>Ferramentas:</h4>
<p align="center">
    <img src="https://skillicons.dev/icons?i=ts,js,react,html,css,tailwind,materialui,nodejs,express,postgres,sequelize,postman,git" />
</p>

## Instalation

<h3>Server:</h3>

<p>Clone the repository to your local machine:

```python
git clone https://github.com/tiagopazhs/burrito-express.git
```

<p>Navigate to the project's server directory: 

```python
cd burrito-express
cd server
```

<p>Install the project's dependencies using the npm package manager:

```python
npm install
```

Start the server:
```python
npm run start
```

<h3>Data base:</h3>

Setup the enviroment variables in the file .env, with the DB credentials and the aplication port.

```python
DB_USER=seu-username
DB_PASS=sua-senha
DB_NAME=nome-do-banco-de-dados
```


Create the tables using Sequelize migrations:
```python
npm run db:migrate
```

<h3>Client:</h3>

In other terminal window navigate to the client repository and install the dependencies: 
```python
cd web && npm install
```


Start the Client:
```python
npm start
```

Open your browser and go to http://localhost:3000 to show the application running.

<h3>Postman:</h3>

Open the follow link on your broswe to show the postman workspace and test CRUDs..

https://www.postman.com/satellite-pilot-16703156/workspace/publicws

