import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { LanchesDTO } from "src/DTO/lanche/lanches.dto";
import { ComboRepository } from "src/Repository/combo.repository"; 

@Injectable()
export class ComboService {

    constructor(
        private readonly comboRepository: ComboRepository
    ){}

    async obtemCombo(): Promise<any> {
        const combo = await this.comboRepository.obtemCombo()

        if(!combo.length){
            throw new BadRequestException('Nenhum combo cadastrado')
        }

        return combo
    }

    async obtemComboId(id: string): Promise<any> {
        try{
            const combo = await this.comboRepository.obtemComboId(id)

            if(!combo){
                throw new BadRequestException(`Sem combo com id: ${id}`)
            }

            return combo
        }catch(e) {
            throw new NotFoundException(`Sem combo com id: ${id}`)
        }
    }

    async salvaCombo(combo: LanchesDTO): Promise<any> {
        return await this.comboRepository.salvaCombo(combo)
    }

    async editaCombo(id: string, comboAtualizar: LanchesDTO): Promise<any> {
        try {
            const combo = await this.obtemComboId(id)

            if(!combo){
                throw new BadRequestException(`Sem combo com id: ${id}`)
            }
            
            return await this.comboRepository.editaCombo(id, comboAtualizar)
        } catch (error) {
            throw new NotFoundException(`Sem combo com id: ${id}`)
        }
    }

    async deletaCombo(id: string): Promise<any> {
        try {
            return await this.comboRepository.deletaCombo(id)
        } catch (error) {
            throw new NotFoundException(`Sem combo com id: ${id}`)
        }
    }
}