import { Usuario } from "../models/usuario"

export async function SETUsuario(dadosUsuario) {
    try {
        const usuario = new Usuario(dadosUsuario)

        await usuario.save()    //Salvar no banco (JSON)
        return { Sucesso: true, Retorno: usuario.toJSON() }
    } catch (erro) {
        return { Sucesso: false, Erro: erro }
    }
}