import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { LanchesDTO } from "src/DTO/lanche/lanches.dto";
import { Lanche } from "src/Interfaces/lanche/lanche.interface";

@Injectable()
export class PratoFrioRepository {

    constructor(
        @InjectModel('prato-frio') private readonly pratoFrioModel: Model<Lanche>
    ){}

    async obtemPratoFrio() {
        return await this.pratoFrioModel.find({}, { __v: false}).sort({nome: + 1}).exec()
    }

    async obtemPratoFrioId(id: string) {
        return await this.pratoFrioModel.findById(id, {__v: false})
    }

    async salvaPratoFrio(pratoFrio: LanchesDTO) {
        const savePratoFrio = new this.pratoFrioModel(pratoFrio)
        if(savePratoFrio){
            savePratoFrio.save()
            return "Prato Frio cadastrado"
        }

        throw new Error('Cadastro falhou')
    } 

    async editaPratoFrio(id: string, pratoFrioAtualiza: LanchesDTO) {
        const pratoFrio = await this.pratoFrioModel.findOneAndUpdate({_id: id}, pratoFrioAtualiza, {new: true})

        if(pratoFrio){
            return `Combo editado com sucesso!`
        }

        throw new Error(`Sem combo com id: ${id}`)
    }

    async deletaPratoFrio(id: string) {
        const pratoFrioExcluido = await this.pratoFrioModel.findByIdAndRemove(id)

        if(pratoFrioExcluido){
            return `Combo excluido com sucesso!`
        }

        throw new Error(`Sem combo com id: ${id}`)
    }
}