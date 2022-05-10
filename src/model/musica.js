import Sequelize from 'sequelize'
import { connection } from '../database/connection.js'

export const musica = connection.define('musica', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cantor: {
        type: Sequelize.STRING,
        allowNull: false
    },
    duração: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    iframe: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true,
    createdAt: false, 
    updatedAt: false,
    timestamps: false
})

const initTable = async () => {
    await musica.sync()
}

initTable()

// database
// insert into musica (nome, cantor, duração)
// values ('Os Anjos Te Louvam', 'Eli Soares', 5,11)