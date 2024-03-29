import mongoose from "mongoose";
import express from 'express'
import cors from 'cors'
import { Usuario, UsuarioInterface } from "../models/usuario";
import { SETUsuario } from "../controllers/SETUsuario";
import { GETUsuarios } from "../controllers/GETUsuarios";
import { GETUsuarioByID } from "../controllers/GETUsuarioByID";
import { DELUsuario } from "../controllers/DELUsuario";
import { PUTUsuarioEmail } from "../controllers/PUTUsuarioEmail";

//Conexão com banco do MongoDB Atlas (servidor)
mongoose.connect("mongodb+srv://thyaguixx:apithy2024@api-4desk.9q9ww5g.mongodb.net/SpikeAPI")
    .then(() => {
        console.log('Conectado ao MongoDB');
    })
    .catch(err => {
        console.error('Erro de conexão com o MongoDB:', err);
    });

//Conexão com o localhost do mongo compass lá da maquina da fatec
// mongoose.connect('mongodb://localhost:27017/SpikeAPI')
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
        const usuarioLista = result.retornoUsuarios
        
        // Método com For padrãozão
        if (usuarioLista){
            for (const usuario of usuarioLista) {
                console.log(usuario.nome)
            }
        }
        
        // Método com for each
        usuarioLista?.forEach(usuario => {
            console.log(usuario.endereco)
        })
        
        res.send({ Sucesso: true, Retorno: usuarioLista })
    } else {
        res.send({ msg: "Erro ao buscar usuários.", Erro: result })
    }
})

app.get('/getUsuarioByID/:id', async (req, res) => {
    const { id } = req.params

    const result = await GETUsuarioByID(id)
   
    if (result && result.Sucesso) {
        const usuario = result.retorno
        res.send({ Sucesso: true, Usuario: usuario})
    } else {
        res.send({ msg: "Erro ao buscar usuário.", Erro: result })
    }
})

app.put('/alterarEmail', async (req, res) => {
    const { id , email } = req.body

    const result = await PUTUsuarioEmail(id, email)
    
    if (result?.Sucesso) {
        res.send({msg: "E-mail do usuário modificado com sucesso.", Sucesso: result.Sucesso, Retorno: result.Retorno})
    } else {
        res.send({msg: "Falha ao tentar modificar o e-mail do usuário.", Sucesso: result?.Sucesso, Erro: result?.Erro})
    }
    
})

app.delete("/deletarUsuario/:id", async (req, res) => {
    const { id } = req.params

    const result = await DELUsuario(id)

    if (result?.Sucesso) {
        res.send({msg: "Usuário deletado com sucesso.", Sucesso: result?.Sucesso, Retorno: result?.retorno})
    } else {
        res.send({msg: "Falha ao deletar usuário.", Sucesso: result?.Sucesso, Retorno: result?.retorno})
    }
})

app.listen(3001, () => {
    console.log("Rodando");
})