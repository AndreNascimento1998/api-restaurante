import { Schema } from "mongoose"

export const LancheSchema = new Schema({
    nome: String,
    url: String,
    descricao: String,
    qnt: Number,
    valor: Number
})