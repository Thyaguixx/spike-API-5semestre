import { Usuario } from "../models/usuario"

export async function SETUsuario(dadosUsuario) {
    try {
        // const usuario = new Usuario(dadosUsuario)
        // const retornoUsuario = await usuario.save()    //Salvar no banco (JSON)

        const usuario = await Usuario.create(dadosUsuario)
        return { Sucesso: true, Retorno: usuario }
    } catch (erro) {
        return { Sucesso: false, Erro: erro }
    }
}