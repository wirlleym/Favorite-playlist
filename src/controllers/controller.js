// import { redirect } from "express/lib/response"
import {
    connection
} from "../database/connection.js"
import {
    musica
} from "../model/musica.js"

export let message = "";

export const getIndex = async (req, res) => {
    setTimeout(() => {
        message = "";
      }, 1000);

    try {
        // const playlist = await connection.query('SELECT * FROM musica', {
        //     model: musica
        // })
        const playlist = await musica.findAll()
        console.log(playlist)
        res.render('index.ejs', {
            playlist,musica,message
        })
    } catch(error) {
        res.send(error.message)
    }
}

export const getDetalhes = async (req, res) => {
    try {
        // const playlistDetalhes = await connection.query(`SELECT * FROM playlist WHERE id = ${req.params.id}`)
        const musicaDetalhes = await musica.findByPk(req.params.id)
        res.render('detalhes.ejs', {
            musicaDetalhes,message
        })
    }
    catch(error){
        res.send(error.message)
    }
}

export const getDeletar = async (req, res) => {
    try {
        // await connection.query(`DELETE FROM musica WHERE id = ${req.params.id}`)
        await musica.destroy({
            where: {
                id: req.params.id
            }
        })
        message="Deletado com Sucesso!"
        res.redirect('/')
    }
    catch(error){
        res.send(error.message)
    }
}

export const getCriar = (req, res) => {
    res.render('criar.ejs', {toggle: false})
}

export const postCriar = async (req, res) => {
    const { nome, cantor, duração, iframe } = req.body
    try {
        // await connection.query(`INSERT INTO musica (nome, cantor, duracao, iframe) VALUES('${nome}', '${cantor}', ${duracao}, '${iframe}')`) 
        if(!nome || !cantor || !duração || !iframe){
            res.send('Todos os campos são obrigatórios!')
        } else {
            await musica.create({nome, cantor, duração, iframe})
            res.render('criar.ejs', {toggle: true})
        }
    }
    catch(error){
        res.send(error.message)
    }
}

export const getEditar = async (req, res) => {
    try {
        const musicaAtual = await musica.findByPk(req.params.id)
        res.render('editar.ejs', {
            musicaAtual,
        })
    }
    catch(error){
        res.send(error.message)
    }
}

export const postEditar = async (req, res) => {
    try {
        const { nome, cantor, duracao, iframe } = req.body
        await musica.update({
            nome: nome,
            cantor: cantor,
            duracao: duracao,
            iframe: iframe
        }, {
            where: {
                id: req.params.id
            }
        })
        message="Atualizado com Sucesso!"
        res.redirect('/')
    }
    catch(error){
        res.send(error.message)
    }
}