import Sequelize from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

export const connection = new Sequelize(
    process.env.DB_BASE, //Database
    process.env.DB_USER, //Usuário
    process.env.DB_PASS, //Senha
    {
        host: process.env.DB_LOCAL,//URL do meu dados
        port: 5432,//Porta que está o banco de dados
        dialect: 'postgres' //Qual banco de dados o Sequelize está trabalhando
    })

    // process.env.DB_URL
//     'postgres://filmes_user:6srPbTUMNE1USFC5iBIQYfGMcPq86bPx@dpg-c9qstqf6d9krv7939vq0-a/filmes',
//     {
//         dialect: 'postgres',
//         dialectOptions: {
//             ssl: {
//                 require: true,
//                 rejectUnauthorized: false
//             }
//         }
//     }
// )