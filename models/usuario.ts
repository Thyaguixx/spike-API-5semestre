import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid';

const EnderecoSchema = new mongoose.Schema({
    _id: {type: String, default: uuidv4},
    cep: {type: String, required: true},
    logradouro: {type: String, required: true},
    bairro: {type: String, required: true},
    cidade: {type: String, required: true},
    uf: {type: String, required: true}
})

const UsuarioSchema = new mongoose.Schema({
    _id: {type: String, default: uuidv4},
    nome: {type: String, required: true, unique: true},
    email: { type: String, required: true },
    endereco: { type: EnderecoSchema, required: true }
});

export const Usuario = mongoose.model('Usuario', UsuarioSchema);