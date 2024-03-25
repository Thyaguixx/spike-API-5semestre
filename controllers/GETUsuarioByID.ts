import { Usuario } from "../models/usuario"

export async function GETUsuarioByID(id) {
    try{
        const usuario = await Usuario.findById({_id: id})
        if (usuario){
            return {Sucesso: true, retorno: usuario}
        }
    } catch (erro) {
        return {Sucesso: false, Erro: erro}
    }
}