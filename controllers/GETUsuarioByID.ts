import { Usuario, UsuarioInterface } from "../models/usuario"

export async function GETUsuarioByID(id) {
    try{
        const usuario = await Usuario.findById({_id: id}).lean()
        if (usuario){
            return {Sucesso: true, retorno: usuario as UsuarioInterface}
        }
    } catch (erro) {
        return {Sucesso: false, Erro: erro}
    }
}