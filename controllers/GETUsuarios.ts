import { Usuario, UsuarioInterface } from "../models/usuario"

export async function GETUsuarios() {
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