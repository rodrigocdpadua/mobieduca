# Guia de Uso
Esse guia vai ajuda você a instalar o projeto.

## Dependencias
* NodeJS (16.13.1)
* npm (8.3.0)

## Baixando o Projeto
Com sua conta no GitHub, você pode fazer o fork do projeto.
Depois disso faça o clone do projeto em sua máquina com os seguintes comandos:
```shell
// Usando ssh
$ git clone git@github.com:rodrigocdpadua/mobieduca.git

// Usando https
$ git clone https://github.com/rodrigocdpadua/mobieduca.git
```
Entre no diretório do projeto:
```shell
$ cd mobieduca
```
## Instalando pacotes
Rode o seguinte comando:
```shell
$ npm install
```
## Rodando o Projeto
Para roda o projeto execute o seguinte comando:
```shell
// Usando npm
$ npm start

// Usando yarn
$ yarn start
```
O site está rodando em **http://localhost:3000/**
## Rodando json_server
Vamos usar o json_server para simular uma API. Ele já está rodando junto com o React.<br />
O servidor está rodando em **http://localhost:5000/**<br />
* Usuários: **http://localhost:5000/users**
* Escolas: **http://localhost:5000/schools**