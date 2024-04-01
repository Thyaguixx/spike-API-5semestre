import { Usuario, UsuarioInterface } from "../models/usuario"

//SETs e PUTs
async function SETUsuario(dadosUsuario) {
    try {
        // const usuario = new Usuario(dadosUsuario)
        // const retornoUsuario = await usuario.save()    //Salvar no banco (JSON)

        const usuario = await Usuario.create(dadosUsuario)
        return { Sucesso: true, Retorno: usuario }
    } catch (erro) {
        return { Sucesso: false, Erro: erro }
    }
}

async function PUTUsuarioEmail(id, novoEmail) {
    try {
        // O método findByIdAndUpdate já encontra o usuário pelo ID que vc entra de parâmetro, e já atualiza com o dado que vc deseja
        const retornoUsuario = await Usuario.findByIdAndUpdate(id, {email: novoEmail}, { new: true }).lean()

        if (retornoUsuario) {
            return { Sucesso: true, Retorno: retornoUsuario as UsuarioInterface }
        }
    } catch (erro) {
        return { Sucesso: false, Erro: erro }
    }
}

//GETs
async function GETUsuarios() {
    try{
        const usuarioLista = await Usuario.find().lean()
        if (usuarioLista){
            return {Sucesso: true, retornoUsuarios: usuarioLista as UsuarioInterface[]}
        }
    } catch (erro) {
        console.log(erro);
        return {Sucesso: false}
    }
}

async function GETUsuarioByID(id) {
    try{
        // O .lean() faz o retorno do resultado já em um formato de objeto javascript
        const usuario = await Usuario.findById(id).lean()
        if (usuario){
            return {Sucesso: true, retorno: usuario as UsuarioInterface}    // Esse as UsuarioInterface faz com que o objeto de retorno já retorne como um objeto do tipo UsuarioInterface, sendo mais fácil de manipular depois.
        }
    } catch (erro) {
        return {Sucesso: false, Erro: erro}
    }
}

//DELETES
async function DELUsuario(id) {
    try{
        const result = await Usuario.deleteOne({_id: id})
        if (result){
            return {Sucesso: true, retorno: result}
        }
    } catch (erro) {
        return {Sucesso: false, Erro: erro}
    }
}

export {SETUsuario, PUTUsuarioEmail, GETUsuarios, GETUsuarioByID, DELUsuario}