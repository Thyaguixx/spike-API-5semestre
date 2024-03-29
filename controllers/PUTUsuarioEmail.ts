import { Usuario, UsuarioInterface } from "../models/usuario"

export async function PUTUsuarioEmail(id, novoEmail) {
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