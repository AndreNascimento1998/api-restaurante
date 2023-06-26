import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Lanche } from "../../Interfaces/lanche/lanche.interface";
import { LanchesDTO } from "src/DTO/lanche/lanches.dto";

@Injectable()
export class LancheRepository {

    constructor(
        @InjectModel('lanche') private readonly lancheModel: Model<Lanche>
    ){}

    async obtemLanche() {
        return await this.lancheModel.find({}, { __v: false}).sort({nome: +1}).exec()
    }

    async obtemLanchePorId(id: string) {
        return await this.lancheModel.findById(id, {__v: false})
    }

    async saveLanche(novoLanche: LanchesDTO) {
        const saveLanche = new this.lancheModel(novoLanche);
        return await saveLanche.save()
    } 

    async atualizaLanche(id: string, lancheAtualizar: LanchesDTO) {
        return await this.lancheModel.findOneAndUpdate({ _id: id }, lancheAtualizar, {new: true})
    }

    async deletaLanche(id: string) {
        return await this.lancheModel.findByIdAndDelete(id)
    }
}