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
Vamos usar o json_server para simular uma API.<br />
Para rodar o server execute o seguinte comando em outro prompt:
```shell
// Entre no diretório
$ cd mobieduca
// Execute
$ npx json-server --watch src/db.json --port 5000
```
Caso o servidor não iniciar certifique-se de intalar o pacote (Só por garantia):
```shell
$ npm install json-server --save
```
Repita o comando anterior.<br />
O servidor está rodando em **http://localhost:5000/**
## Demo do CORS Anywhere
Ocorreu problemas para conectar com a API fornecida.<br />
Para resolver desbloqueie um acesso temporário a essa Demo pelo link: https://cors-anywhere.herokuapp.com/corsdemo.