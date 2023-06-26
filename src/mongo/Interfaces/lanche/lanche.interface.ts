import { Document } from "mongoose"
import * as mongoose from "mongoose"

export interface Lanche extends Document {

    readonly _id: mongoose.Schema.Types.ObjectId,
    readonly nome: string,
    readonly url: string,
    readonly descricao: string,
    readonly qnt: number,
    readonly valor: number
}