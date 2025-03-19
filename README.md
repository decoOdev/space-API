# Projeto Sequelize com Express

Este é um projeto simples utilizando **Sequelize** e **Express** para gerenciar um banco de dados relacional.

## 📌 Tecnologias utilizadas

- Node.js
- Express
- Sequelize
- PostgreSQL (ou outro banco compatível)

## 🚀 Como rodar o projeto

### 1️⃣ Clonar o repositório

```sh
git clone https://github.com/decoOdev/space-API.git
```

### 2️⃣ Instalar as dependências

```sh
npm install
```

### 3️⃣ Configurar o banco de dados

- Certifique-se de ter um banco de dados rodando e configure corretamente as credenciais no arquivo `config/database.js`.

### 4️⃣ Rodar as migrations

```sh
npx sequelize-cli db:migrate
```

### 5️⃣ Iniciar o servidor

```sh
npm start
```

O servidor será iniciado em **http://localhost:3000**.

## 📁 Estrutura do projeto

```
/src
├── config/             # Configuração do banco de dados e associações
├── models/             # Modelos Sequelize
├── routes/             # Rotas da aplicação
├── controllers/        # Lógica de negócios
├── index.js            # Ponto de entrada do servidor
├── ... outros arquivos
```

## 🛠 Comandos úteis

- Criar uma nova migration:
  ```sh
  npx sequelize-cli migration:generate --name migration_name
  ```
- Criar um novo model:
  ```sh
  npx sequelize-cli model:generate --name ModelName --attributes column:type
  ```
- Rodar as migrations:
  ```sh
  npx sequelize-cli db:migrate
  ```
- Desfazer última migration:
  ```sh
  npx sequelize-cli db:migrate:undo
  ```
