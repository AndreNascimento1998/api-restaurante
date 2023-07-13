import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common"
import { LanchesDTO } from "src/DTO/lanche/lanches.dto"
import { PratoFrioRepository } from "src/Repository/pratoFrio.repository" 

@Injectable()
export class PratoFrioService {

    constructor(
        private readonly pratoFrioRepository: PratoFrioRepository
    ){}

    async obtemPratoFrio(): Promise<any> {
        const pratoFrio = await this.pratoFrioRepository.obtemPratoFrio()

        if(!pratoFrio.length){
            throw new BadRequestException('Nenhum pratoFrio cadastrado')
        }

        return pratoFrio
    }
    
    async salvaPratoFrio(pratoFrio: LanchesDTO): Promise<any> {
        return await this.pratoFrioRepository.salvaPratoFrio(pratoFrio)
    }

    async obtemPratoFrioId(id: string): Promise<any> {
        try{
            const pratoFrio = await this.pratoFrioRepository.obtemPratoFrioId(id)

            if(!pratoFrio){
                throw new BadRequestException(`Sem Prato Frio com id: ${id}`)
            }

            return pratoFrio
        }catch(e) {
            throw new NotFoundException(`Sem Prato Frio com id: ${id}`)
        }
    }

    async editaPratoFrio(id: string, pratoFrioAtualizar: LanchesDTO): Promise<any> {
        try {
            const pratoFrio = await this.obtemPratoFrioId(id)

            if(!pratoFrio){
                throw new BadRequestException(`Sem Prato Frio com id: ${id}`)
            }
            
            return await this.pratoFrioRepository.editaPratoFrio(id, pratoFrioAtualizar)
        } catch (error) {
            throw new NotFoundException(`Sem Prato Frio com id: ${id}`)
        }
    }

    async deletaPratoFrio(id: string): Promise<any> {
        try {
            return await this.pratoFrioRepository.deletaPratoFrio(id)
        } catch (error) {
            throw new NotFoundException(`Sem combo com id: ${id}`)
        }
    }
}