
## 📋 Introdução
Este projeto consiste no desenvolvimento de uma API REST para a StarCafé, uma cafeteria renomada pela variedade de cafés e lanches. A API permite que os clientes façam pedidos e que a administração gerencie o estoque de produtos.


## 📦 Instalação
Para rodar este projeto localmente, siga os passos abaixo:

1. Clone o repositório:

    ```bash
    git clone https://github.com/gihcaron/ATV02_Starcafe.git
    ```
2. Navegue até o diretório do projeto:

    ```bash
    cd starcafe-api
    ```
3. Instale as dependências:

    ```bash
    npm install
    ```
4. Configure as variáveis de ambiente no arquivo `.env`:
    ```env
    PORT=3000
    ```
5. Inicie o servidor:
    ```bash
    npm run dev
    ```

## ⚒️ | Ferramentas 

Para o teste de método e requisições estamos utilizando o Postman.

# Endpoints

### 👩🏻‍💻 Testando o Servidor 

Antes de testar as requisições, verifique se o seu servidor está funcionando de maneira correta. 

Digite a seguinte rota e clique em enviar requisição:

    localhost:4000
    
Ao inicializar o servidor, ele retornará a seguinte mensagem:

    "Eu amo muito backend! ❤️"
    
Caso contrário, exibirá uma mensagem de erro. 

### 1️⃣ GET /menu
Retorna o cardápio da cafeteria.

#### Cabeçalhos HTTP
- **Accept**: application/json → Indica que o cliente espera uma resposta em JSON.

### ❔| Como realizar a requisição?

Para retornar o cardápio com os produtos da cafeteria digite a seguinte nota e envie a requisição junto com o corpo JSON:

    
```json
   localhost:4000/api/menu
```
    
Dessa forma ele listará todos os cafés disponíveis na loja, como no exemplo abaixo: 

```json
[
    {
        "id": 1,
        "nome": "Café do Dia",
        "valor": 5.2,
        "descricao": "Café preto Expresso"
    },
    {
        "id": 2,
        "nome": "Café da Casa",
        "valor": 7,
        "descricao": "Café do dia com leite e caramelo"
    },
    {
        "id": 3,
        "nome": "Café Candy",
        "valor": 8,
        "descricao": "Café com leite e Marshmallow"
    },
    {
        "id": 4,
        "nome": "Mocha Café",
        "valor": 9,
        "descricao": "Café com leite, chocolate e chantilly"
    },
    {
        "id": 5,
        "nome": "Capucinno",
        "valor": 6,
        "descricao": "Café com pouco leite e muito chantilly"
    },
    {
        "id": 6,
        "nome": "Café Árabe",
        "valor": 10,
        "descricao": "Café com especiarias"
    }
]
```

### 2️⃣ POST /order
Permite que um cliente faça um pedido.

#### Códigos de Status
- **201 Created**: Pedido criado com sucesso.
- **400 Bad Request**: Dados inválidos na requisição.
- **500 Internal Server Error**: Erro no servidor ao processar a requisição.

### ❔| Como realizar a requisição?

Primeiro digite a seguinte rota:
````JSON
localhost:4000/api/order
````

Para realizar um pedido, **forneça o nome do café, valor, descrição, nome do cliente e o status do pedido (status inicial = "Pedido") em formato JSON.** Veja o exemplo abaixo:

````JSON
{
    "nome": "Mocha Café",
    "valor": 9.00,
    "descricao": "Café com leite, chocolate e chantilly" ,
    "cliente": "Alicia", 
    "status" : "Pedido"
}
````

### 3️⃣ GET /order/:id
Consulta o status de um pedido.

#### Cabeçalhos HTTP
- **Accept**: application/json → Indica que o cliente espera uma resposta em JSON.

#### Códigos de Status
- **200 OK**: Pedido encontrado com sucesso.
- **404 Not Found**: Pedido não encontrado.
- **500 Internal Server Error**: Erro no servidor ao processar a requisição.

### ❔| Como realizar a requisição?

Primeiro digite a seguinte rota:

```json
localhost:4000/api/order/:id
```

Para consultar o status de um pedido, forneça o id do pedido na rota e envie a requisição. Veja o exemplo abaixo:

```json
// Rota para consultar o pedido com o id 3
localhost:4000/api/order/3

// Resposta de sucesso
{
    "id": 3,
    "nome": "Café Candy",
    "valor": 8,
    "descricao": "Café com leite e Marshmallow",
    "cliente": "Carlos",
    "status": "Preparando"
}
```

### 4️⃣ DELETE /order/:id
Cancela um pedido (caso ainda não tenha sido preparado).

#### Cabeçalhos HTTP
- **Accept**: application/json → Indica que o cliente espera uma resposta em JSON.

#### Códigos de Status
- **200 OK**: Pedido cancelado com sucesso.
````JSON
{
  "mensagem": "Café removido com grande sucesso!! ✨☕"
}
````

- **400 Bad Request**: **Pedido não pode ser cancelado (já preparado).**
````JSON
{
    "erro": "Só é possível remover cafés se ele estiver apenas pedido ou pendente!"
}
````

- **404 Not Found**: Pedido não encontrado. 

````JSON
{
    "erro": "Café não encontrado! 🤷‍♂️"
}

````
- **500 Internal Server Error**: Erro no servidor ao processar a requisição.

### ❔| Como remover um pedido?

Primeiro digite a seguinte rota:

````JSON
localhost:4000/api/order/:id
````
Para deletar um pedido, o id na rota e envie sua requisição Veja o exemplo abaixo:

````JSON

//Rota para deletar pedido com o id 8
localhost:4000/api/order/:id

// Mensagem exibida como confirmação do cancelamento
{
    "mensagem": "Café removido com grande sucesso!! ✨☕",
    "cafeRemovido": {
        "id": 8,
        "nome": "Mocha Café",
        "valor": 9,
        "descricao": "Café com leite, chocolate e chantilly",
        "cliente": "Ana",
        "status": "Pedido"
    }
}
````

## 🚀 Tecnologias Utilizadas
- Node.js
- Express
## 📄 Licença
Este projeto está licenciado sob a Licença MIT. 

## 📞 Contato
Para mais informações, entre em contato pelo email: giovanna.c.barros@aluno.senai.br














































