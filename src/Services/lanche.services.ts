import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { LanchesDTO } from "src/DTO/lanche/lanches.dto";
import { LancheRepository } from "src/Repository/lanche.repository";


@Injectable()
export class LancheServices {

    constructor(
        private readonly lancheRepository: LancheRepository
    ){}

    async obtemLanche(): Promise<any> {
        const lanches = await this.lancheRepository.obtemLanche()

        if(!lanches.length){
            throw new BadRequestException('Nenhum lanche cadastrado')
        }

        return lanches
    }

    async obtemLanchePorId(id: string): Promise<any> {
        try {
            const lanche = await this.lancheRepository.obtemLanchePorId(id)

            if(!lanche){
                throw new BadRequestException(`Sem lanche com id: ${id}`)
            }

            return lanche
        } catch (e) { 
                throw new NotFoundException(`Sem lanche com id: ${id}`)
        }
    }
 
    async saveLanche(novoLanche: LanchesDTO): Promise<any> {
        return await this.lancheRepository.saveLanche(novoLanche)
    }

    async atualizaLanche(id: string, LancheAtualizar: LanchesDTO): Promise<any> {
        try{
            const lanche = await this.lancheRepository.obtemLanchePorId(id)
            if(!lanche){
                throw new BadRequestException(`Sem lanche com id: ${id}`)
            }
            
            return await this.lancheRepository.atualizaLanche(id, LancheAtualizar)
        }catch(e){
            throw new NotFoundException(`Sem lanche com id: ${id}`)
        }
            
    }

    async deletaLanche(id: string): Promise<any> {
        try {
            return await this.lancheRepository.deletaLanche(id)
        } catch (error) {
            throw new NotFoundException(`Sem lanche com id: ${id}`)
        }
    }
}