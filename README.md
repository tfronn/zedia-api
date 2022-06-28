<h1  align="center">Zedia API - [DEV] Desafio de programação n18. </h1>

  

<p  align="center">

<img  alt="Principal linguagem do projeto"  src="https://img.shields.io/github/languages/top/tfronn/zedia-api?color=56BEB8">

  

<img  alt="Quantidade de linguagens utilizadas"  src="https://img.shields.io/github/languages/count/tfronn/zedia-apicolor=56BEB8">

  

<img  alt="Tamanho do repositório"  src="https://img.shields.io/github/repo-size/tfronn/zedia-api?color=56BEB8">

  

<img  alt="Licença"  src="https://img.shields.io/github/license/tfronn/zedia-api?color=56BEB8">

  

<!-- <img alt="Github issues" src="https://img.shields.io/github/issues/tfronn/server?color=56BEB8" /> -->

  

<!-- <img alt="Github forks" src="https://img.shields.io/github/forks/tfronn/server?color=56BEB8" /> -->

  

<!-- <img alt="Github stars" src="https://img.shields.io/github/stars/tfronn/server?color=56BEB8" /> -->

</p>

<p  align="center">

<a  href="#dart-sobre">Sobre</a> &#xa0; | &#xa0;

<a  href="#sparkles-funcionalidades">Funcionalidades</a> &#xa0; | &#xa0;

<a  href="#rocket-tecnologias">Tecnologias</a> &#xa0; | &#xa0;

<a  href="#white_check_mark-pré-requisitos">Pré requisitos</a> &#xa0; | &#xa0;

<a  href="#checkered_flag-começando">Começando</a> &#xa0; | &#xa0;

<a  href="#memo-licença">Licença</a> &#xa0; | &#xa0;

<a  href="https://github.com/tfronn"  target="_blank">Autor</a>

</p>

  

<br>

  

## :dart: Sobre ##

Projeto desenvolvido para o [DEV] Desafio de programação n18. Onde criei uma API Rest, com o objetivo de cadastrar via POST e buscar via GET, informações de workspaces e visitas. Podendo filtrar a busca por ID do workspace e/ou Data da visita.
  

## :sparkles: Funcionalidades ##

  

:heavy_check_mark: Funcionalidade 1: Cadastrar via POST informações de workspaces e visitas.

:heavy_check_mark: Funcionalidade 2: Buscar via GET informações de workspaces e visitas


  

## :rocket: Tecnologias ##

  

As seguintes ferramentas foram usadas na construção do projeto:

  



- [Node.js](https://nodejs.org/en/)

- [TypeScript](https://www.typescriptlang.org/)

- [ExpressJS](https://expressjs.com/pt-br/)

- [Prisma](https://www.prisma.io/)

- [PostgreSQL](https://www.postgresql.org/)

  

## :white_check_mark: Pré requisitos ##

  

Antes de começar :checkered_flag:, você precisa ter o [ Docker](https://www.docker.com/), [Git](https://git-scm.com) e o [Node](https://nodejs.org/en/) instalados em sua maquina.

  

## :checkered_flag: Começando ##

  

```bash

# Clone este repositório:

$ git clone https://github.com/tfronn/zedia-api

  

# Entre na pasta:

$ cd zedia-api

  

# Instale as dependências:

$ yarn / npm install



# Na pasta principal do projeto, crie um arquivo ".env" e dentro cole o seguinte:

DATABASE_URL="postgresql://docker:docker@localhost:5432/zedia-api?schema=public"



# Abra o Docker e no terminal digite o seguinte comando:

$ docker compose up 
  


# Para iniciar o projeto, em outra aba do terminal:

$ yarn dev / npm run dev



# O app vai inicializar em <http://localhost:8008>
	no console deve aparecer: "HTTP server listening!"



# Criando migrations no DB:

$ npx prisma migrate dev



# Quando solicitado, digite o nome da migração
	exemplo: "create-workspaces-and-visits-tables"


				Tudo pronto, o back-end está completo e utilizável.


```

  

&#xa0;
Feito com :heart: por <a  href="https://github.com/tfronn"  target="_blank">Kelvin Camilo</a>

<a  href="#top">Voltar para o topo</a>