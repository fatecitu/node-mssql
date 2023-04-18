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
```node index.js``` ou ```npm run dev``` (para usar o nodemon)

## ⌛ Detalhes iniciais junto ao SQL Server
- Verifique se está habilitada a autenticação via SQL Server, além do Windows
- Não esqueça de iniciar o serviço SQL Server Browser.
- Acesse o SQL Configuration Manager, abra SQL Server Network Configuration e habilite o TCP/IP (por default vem desabilitado) (Caso você não localize o SQL Configuration Manager no seu servidor, basta abrir o Menu Iniciar e digitar:
-SQLServerManager10.msc (SQL Server 2008)
-SQLServerManager11.msc (SQL Server 2012)
-SQLServerManager12.msc (SQL Server 2014)
-SQLServerManager13.msc (SQL Server 2016)
-SQLServerManager14.msc (SQL Server 2017)
-SQLServerManager15.msc (SQL Server 2019)
- Vá nas propriedades do protocolo TCP/IP, na aba IP Address e verifique se está habilitado para o endereço 127.0.0.1 
## 👉 Instalação
Rode os scripts localizados na pasta src/sql
Instale as dependências através do npm i

## 🤖 UI que irá consumir a API REST

Na pasta `public` tem um exemplo bem simples de uma página HTML consumindo a API criada.
