import { Usuario } from "../models/usuario"

export async function SETUsuario(dadosUsuario) {
    try {
        const usuario = new Usuario(dadosUsuario)
        const retornoUsuario = await usuario.save()    //Salvar no banco (JSON)
        return { Sucesso: true, Retorno: retornoUsuario }
    } catch (erro) {
        return { Sucesso: false, Erro: erro }
    }
}