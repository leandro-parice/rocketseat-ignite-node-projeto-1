# Ignite - NodeJS

#### Rocketseat Projeto-1

Repositório criado para o desenvolvimento e estudo da trilha Ignite NodeJS da 💜[Rocketseat](https://www.rocketseat.com.br/)

### Tecnologias / Linguagens de programação

- Javascript
- NodeJS
- GitHub

### Instalação

    npm install

### Rodar o servidor

    npm run dev

# REST API

A API REST para o aplicativo de exemplo é descrita abaixo.

## Listagem de tarefas

### Request

`GET /users/`

    curl --request GET \
      --url http://localhost:3333/users \
      --header 'Content-type: application/json'

### Response

    Content-type: application/json
    Date: Mon, 29 May 2023 10:49:03 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5
    Content-Length: 2

    200 Ok
    []

## Criação de usuário

### Request

`POST /users/`

    curl --request POST \
      --url http://localhost:3333/users \
      --header 'Content-Type: application/json' \
      --data '{
        "name": "Leandro Parice",
        "email": "contato@leandroparice.com.br"
    }'

### Response

    Content-type: application/json
    Date: Mon, 29 May 2023 10:50:14 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5
    Transfer-Encoding: chunked

    201 Created
    No body returned for response

## Edição de usuário

### Request

`PUT /users/:id`

    curl --request PUT \
      --url http://localhost:3333/users/02729739-8b1a-4cb7-8365-2a52c1dfc024 \
      --header 'Content-Type: application/json' \
      --data '{
        "name": "Leandro Parice alterado",
        "email": "contato2@leandroparice.com.br"
      }'

### Response

    Content-type: application/json
    Date: Mon, 29 May 2023 10:56:38 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5

    204 No Content
    No body returned for response


## Exclusão de usuário

### Request

`DELETE /users/:id`

    curl --request DELETE \
      --url http://localhost:3333/users/02729739-8b1a-4cb7-8365-2a52c1dfc024

### Response

    Content-type: application/json
    Date: Mon, 29 May 2023 10:59:40 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5

    204 No Content
    No body returned for response
