import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { LanchesDTO } from "src/DTO/lanche/lanches.dto";
import { Lanche } from "src/Interfaces/lanche/lanche.interface";

@Injectable()
export class PratoPrincipalRepository{

    constructor(
        @InjectModel('prato-principal') private readonly pratoPrincipalModel: Model<Lanche>
    ){}

    async obtemPratoPrincipal() {
        return await this.pratoPrincipalModel.find({}, {__v: false}).sort({nome: + 1}).exec()
    }

    async obtemPratoPrincpalId(id: string) {
        return await this.pratoPrincipalModel.findById(id, {__v: false})
    }

    async salvaPratoPrincipal(pratoPrincipal: LanchesDTO) {
        const savePrato = new this.pratoPrincipalModel(pratoPrincipal)
        if(savePrato){
            savePrato.save()
            return "Prato Principal cadastrado"
        }
        throw new Error('Cadastro falhou')
    } 

    async editaPratoPrincipal(id: string, pratoPrincipalAtualiza: LanchesDTO) {
        const pratoPrincipalEditado = await this.pratoPrincipalModel.findOneAndUpdate({_id: id}, pratoPrincipalAtualiza, {new: true})

        if(pratoPrincipalEditado){
            return `pratoP rincipal editado com sucesso!`
        }

        throw new Error(`Sem pratoPrincipal com id: ${id}`)
    }

    async deletaPratoPrincipal(id: string) {
        const pratoPrincipalExcluido = await this.pratoPrincipalModel.findByIdAndRemove(id)

        if(pratoPrincipalExcluido){
            return `Prato Principal excluido com sucesso!`
        }

        throw new Error(`Sem Prato Principal com id: ${id}`)
    }
}