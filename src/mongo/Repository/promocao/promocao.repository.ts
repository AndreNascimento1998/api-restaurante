import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { LanchesDTO } from "src/DTO/lanche/lanches.dto";
import { Lanche } from "src/mongo/Interfaces/lanche/lanche.interface";

@Injectable()
export class PromocaoRepository {

    constructor(
        @InjectModel('promocao') private readonly promocaoModel: Model<Lanche>
    ){}

    async obtemPromocao() {
        return await this.promocaoModel.find({}, { __v: false}).sort({nome: + 1}).exec()
    }

    async obtemPromocaoId(id: string) {
        return await this.promocaoModel.findById(id, {__v: false})
    }

    async salvaPromocao(combo: LanchesDTO) {
        const savePromocao = new this.promocaoModel(combo)
        if(savePromocao){
            savePromocao.save()
            return "Promoção cadastrado"
        }

        throw new Error('Cadastro falhou')
    }

    async editaPromocao(id: string, comboAtualiza: LanchesDTO) {
        const comboEditado = await this.promocaoModel.findOneAndUpdate({_id: id}, comboAtualiza, {new: true})

        if(comboEditado){
            return `Promoção editado com sucesso!`
        }

        throw new Error(`Sem Promoção com id: ${id}`)
    }

    async deletaPromocao(id: string) {
        const promocaoExcluida = await this.promocaoModel.findByIdAndRemove(id)

        if(promocaoExcluida){
            return `Promoção excluido com sucesso!`
        }

        throw new Error(`Sem Promoção com id: ${id}`)
    }
}