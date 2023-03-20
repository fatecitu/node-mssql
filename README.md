# 🖥 Backend Node.JS integrado ao SQL Server via Stored Procedure

O objetivo deste projeto é criar um Webservice RESTfull integrado ao SQL Server 2019 através de stored procedures.

## 👣 Começando um novo projeto
```
npm init
npm i cors
npm i dotenv
npm i express
npm i mssql
npm i -D nodemon
```

### 📦 Pacotes a serem instalados
|Pacote	|Função|
|-------|-------|
|cors|	Fornece uma solução para o problema de compartilhamento de recursos entre diferentes origens|
|dotenv|	Carrega variáveis de ambiente de um arquivo .env para process.env|
|express|	Framework para aplicativos Node.js que fornece recursos para lidar com rotas, solicitações e respostas HTTP|
|mssql|	Driver para o Node.js que permite a conexão com o banco de dados Microsoft SQL Server|
|nodemon|	O nodemon é um utilitário de interface de linha de comando (CLI) desenvolvido pelo @rem que encapsula seu aplicativo Node, monitora o sistema de arquivos e reinicia o processo automaticament|

# 🚀 Iniciando o projeto
node index.js

## ✅ Detalhes iniciais
Não esqueça de iniciar o serviço SQL Server Browser.
Acesse o SQL Configuration Manager, abra SQL Server Network Configuration e habilite o TCP/IP (por default vem desabilitado)
Vá nas propriedades do protocolo TCP/IP, na aba IP Address e informe o endereço 127.0.0.1 
## 👉 Instalação
Rode os scripts localizados na pasta src/sql
Instale as dependências através do npm i

## 🤖 Crie a UI que irá consumir a API REST
A forma mais simples e rápida é utilizar o [ChatGPT](https://chat.openai.com)

Eis um exemplo de busca:

_Crie uma página html com bootstrap que liste os registros vindos da API https://localhost:4000/api/veiculos e que permita editá-los e enviá-los novamente via PUT para a mesma url
O veiculo terá código, placa, nome, descrição, data de fabricação e preço._
