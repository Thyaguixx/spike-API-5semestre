import { Usuario } from "../models/usuario"

export async function DELUsuario(id) {
    try{
        const result = await Usuario.deleteOne({_id: id})
        if (result){
            return {Sucesso: true, retorno: result}
        }
    } catch (erro) {
        return {Sucesso: false, Erro: erro}
    }
}