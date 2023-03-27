import dotenv from 'dotenv/config'

export const sqlConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    server: process.env.DB_SERVER,
    port: 1434,    
    options: {
       trustedConnection: true,
       enableArithAbort: true
    }
}