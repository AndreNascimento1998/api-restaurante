import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { LanchesDTO } from "src/DTO/lanche/lanches.dto";
import { Lanche } from "src/Interfaces/lanche/lanche.interface";

@Injectable()
export class ComboRepository {

    constructor(
        @InjectModel('combo') private readonly comboModel: Model<Lanche>
    ){}

    async obtemCombo() {
        return await this.comboModel.find({}, { __v: false}).sort({nome: + 1}).exec()
    }

    async obtemComboId(id: string) {
        return await this.comboModel.findById(id, {__v: false})
    }

    async salvaCombo(combo: LanchesDTO) {
        const saveCombo = new this.comboModel(combo)
        if(saveCombo){
            saveCombo.save()
            return "Combo cadastrado"
        }

        throw new Error('Cadastro falhou')
    }

    async editaCombo(id: string, comboAtualiza: LanchesDTO) {
        const comboEditado = await this.comboModel.findOneAndUpdate({_id: id}, comboAtualiza, {new: true})

        if(comboEditado){
            return `Combo editado com sucesso!`
        }

        throw new Error(`Sem combo com id: ${id}`)
    }

    async deletaCombo(id: string) {
        const comboExcluido = await this.comboModel.findByIdAndRemove(id)

        if(comboExcluido){
            return `Combo excluido com sucesso!`
        }

        throw new Error(`Sem combo com id: ${id}`)
    }
}