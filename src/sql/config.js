import dotenv from 'dotenv/config'

export const sqlConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  server: 'localhost\\SQLEXPRESS',
  database: 'Estacionamento',
  port: 1433,
  options: {
      encrypt: true,
      trustServerCertificate: true,
      ssl: false // Desabilita a validação do certificado SSL
    }
}