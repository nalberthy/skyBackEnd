
# Desafio SKY

## Instalação

 Clone o repositório:
```bash
  git clone https://github.com/nalberthyy/skyBackEnd
```

 Instalar dependências da aplicação:
```bash
  yarn
```

 Executar aplicação:
  - Ambiente de desenvolvimento:
```bash
  yarn dev
```
  - Compilar para ambiente de produção:
```bash
  yarn build
```
  - Executar aplicação compilada:
```bash
  yarn start
```

## Referencia API

### Autenticação:

#### Cadastrar:
```http
  POST /api/user/create
```
##### Body:
```bash
{
    "name":"",
    "email":"",
    "password": ""
    "phone": [
      numero: "",
      "ddd": ""
    ]
}

```
| Parametro   | Tipo     | Descrição  |
| :---------- | :------- | :----------|
|  `name`     | `string` | `required` |
|  `email    `| `string` | `required` |
|  `password` | `string` | `required` |
|  `phone   ` | `array`  |            |

#### Login:
```http
  POST /api/login
```
##### Body:
```bash
{
    "email":"",
    "password": ""
}
```
| Parametro   | Tipo     | Descrição  |
| :---------- | :------- | :----------|
|  `email    `| `string` | `required` |
|  `password` | `string` | `required` |

### Usuarios:

#### Listar usuarios:

```http
  GET /api/user
```

| Parametro | Tipo     | Descrição                      |
| :-------- | :------- | :----------------------------- |
|           |          | **É requerido o Token**       |

#### Buscar usuario:

```http
  GET /api/user/${id}
```

| Parametro | Tipo     | Descrição                       |
| :-------- | :------- | :------------------------------ |
| `id`      | `string` | **É requerido o Token**         |


  
