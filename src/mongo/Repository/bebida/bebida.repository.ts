import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { LanchesDTO } from "src/DTO/lanche/lanches.dto";
import { Lanche } from "src/mongo/Interfaces/lanche/lanche.interface";

@Injectable()
export class BebidaRepository {

    constructor(
        @InjectModel('bebida') private readonly bebidaModel: Model<Lanche>
    ){}

    async obtemBebida() {
        return await this.bebidaModel.find({}, {__v: false}).sort({nome: + 1}).exec()
    }

    async obtemBebidaId(id: string) {
        return await this.bebidaModel.findById(id, {__v: false})
    }

    async salvaBebida(bebida: Lanche) {
        const saveBebida = new this.bebidaModel(bebida)
        return await saveBebida.save()
    }

    async editaBebida(id: string, bebidaAtualiza: LanchesDTO) {
        return await this.bebidaModel.findOneAndUpdate({_id: id}, bebidaAtualiza, {new: true})
    }

    async deletaBebida(id: string) {
        const bebidaExcluida = await this.bebidaModel.findByIdAndDelete(id)

        if(bebidaExcluida) {
            return "Bebida excluída com sucesso!"
        }
        throw new Error(`Sem bebida com id: ${id}`)
    }
}