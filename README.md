# CRUD de Clientes (Frontend)

Este projeto consiste em uma interface web simples para consumir a API REST de gerenciamento de clientes.

## 🚀 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (Fetch API)

## 📌 Funcionalidades

A aplicação permite interagir com a API para realizar as seguintes operações:

1️⃣ **Criar Cliente (Create)**  
   - Preencha o nome e email no formulário e clique em "Criar".
   - A solicitação será enviada para `POST http://localhost:8080/clientes`.

2️⃣ **Consultar Cliente por ID (Read)**  
   - Insira o ID do cliente e clique em "Consultar".
   - A solicitação será enviada para `GET http://localhost:8080/clientes/{id}`.

3️⃣ **Listar Todos os Clientes (Read)**  
   - Clique no botão "Listar Todos" para exibir a lista de clientes.
   - A solicitação será enviada para `GET http://localhost:8080/clientes`.

4️⃣ **Atualizar Cliente (Update)**  
   - Informe o ID do cliente e os novos valores de nome e email, depois clique em "Atualizar".
   - A solicitação será enviada para `PUT http://localhost:8080/clientes/{id}`.

5️⃣ **Deletar Cliente (Delete)**  
   - Informe o ID do cliente e clique em "Deletar".
   - A solicitação será enviada para `DELETE http://localhost:8080/clientes/{id}`.

## 📂 Estrutura do Projeto

```
📂 simple-frontend-crud-clientes
├── 📂 css
│   └── style.css  # Estilos da aplicação
├── 📂 js
│   └── script.js  # Lógica de consumo da API
└── index.html      # Interface principal
```

## ▶️ Como Executar

1️⃣ Clone o repositório:
```bash
git clone https://github.com/gaius007/simple-frontend-crud-clientes.git
```

2️⃣ Acesse a pasta do projeto:
```bash
cd simple-frontend-crud-clientes
```

3️⃣ Abra o arquivo `index.html` em um navegador.

🔹 Certifique-se de que a API backend (`crud-clientes`) está em execução localmente na porta `8080` para o correto funcionamento da aplicação.
