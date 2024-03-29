import { Usuario, UsuarioInterface } from "../models/usuario"

export async function GETUsuarioByID(id) {
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