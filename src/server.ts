import mongoose from "mongoose";
import express from 'express'
import cors from 'cors'
import { Usuario } from "../models/usuario";
import { SETUsuario } from "../controllers/SETUsuario";
import { GETUsuarios } from "../controllers/GETUsuarios";
import { GETUsuarioByID } from "../controllers/GETUsuarioByID";
import { DELUsuario } from "../controllers/DELUsuario";

//Conexão com banco do MongoDB Atlas (servidor)
// mongoose.connect("mongodb+srv://thyaguixx:apithy2024@api-4desk.9q9ww5g.mongodb.net/?retryWrites=true&w=majority")
//     .then(() => {
//         console.log('Conectado ao MongoDB');
//     })
//     .catch(err => {
//         console.error('Erro de conexão com o MongoDB:', err);
//     });

//Conexão com o localhost do mongo compass lá da maquina da fatec
mongoose.connect('mongodb://localhost:27017/SpikeAPI')
    .then(() => {
        console.log('Conectado ao MongoDB');
    })
    .catch(err => {
        console.error('Erro de conexão com o MongoDB:', err);
    });

// mongoose.connect('mongodb://localhost:27017/API-4Desk')
//     .then(() => {
//         console.log('Conectado ao MongoDB');
//     })
//     .catch(err => {
//         console.error('Erro de conexão com o MongoDB:', err);
//     });

const app = express()
app.use(cors())
app.use(express.json())


app.post('/cadastro', async (req, res) => {
    const retorno = await SETUsuario(req.body)

    if (retorno.Sucesso) {
        res.send({ msg: "Usuário cadastrado com sucesso.", Sucesso: retorno.Sucesso, retornoUsuario: retorno.Retorno })
    } else {
        res.send({ msg: "Erro ao cadastrar usuario.", erro: retorno.Erro })
    }
})

app.get('/listarUsuarios', async (req, res) => {
    const result = await GETUsuarios()

    if (result) {
        res.send({ Sucesso: true, Retorno: result.retornoUsuarios })
    } else {
        res.send({ msg: "Erro ao buscar usuários.", Erro: result })
    }
})

app.get('/getUsuarioByID/:id', async (req, res) => {
    const { id } = req.params

    const result = await GETUsuarioByID(id)

    if (result) {
        res.send({ Sucesso: true, Usuario: result.retorno })
    } else {
        res.send({ msg: "Erro ao buscar usuário.", Erro: result })
    }
})

app.listen(3001, () => {
    console.log("Rodando");
})