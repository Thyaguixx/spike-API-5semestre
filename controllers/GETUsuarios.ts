import { Usuario } from "../models/usuario"

export async function GETUsuarios() {
    try{
        const usuarioLista = await Usuario.find()
        if (usuarioLista){
            return {Sucesso: true, retornoUsuarios: usuarioLista}
        }
    } catch (erro) {
        console.log(erro);
        return {Sucesso: false}
    }
}