import mongoose from "mongoose";
import { nanoid } from "nanoid";    //Gerar GUIDs

const EnderecoSchema = new mongoose.Schema({
    _id: {type: String, default: () => nanoid()},
    cep: {type: String, required: true},
    logradouro: {type: String, required: true},
    bairro: {type: String, required: true},
    cidade: {type: String, required: true},
    uf: {type: String, required: true}
})

const UsuarioSchema = new mongoose.Schema({
    _id: {type: String, default: () => nanoid()},
    nome: {type: String, required: true, unique: true},
    email: { type: String, required: true },
    endereco: [EnderecoSchema]
});

export const Usuario = mongoose.model('Usuario', UsuarioSchema);