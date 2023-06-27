import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { LanchesDTO } from "src/DTO/lanche/lanches.dto";
import { PratoPrincipalRepository } from "src/mongo/Repository/pratoPrincipal/pratoPrincipal.repository";

@Injectable()
export class PratoPrincipalService {

    constructor(
        private readonly pratoPrincipalRepository: PratoPrincipalRepository
    ){}
    
    async obtemPratoPrincipal(): Promise<any> {
        const pratoPrincipal = await this.pratoPrincipalRepository.obtemPratoPrincipal()

        if(!pratoPrincipal.length){
            throw new BadRequestException('Nenhum Prato Principal cadastrado')
        }

        return  pratoPrincipal
    }

    async obtemPratoPrincpalId(id: string): Promise<any> {
        try{
            const pratoPrincipal = await this.pratoPrincipalRepository.obtemPratoPrincpalId(id)

            if(!pratoPrincipal){
                throw new BadRequestException(`Sem Prato Principal com id: ${id}`)
            }

            return pratoPrincipal
        }catch(e) {
            throw new NotFoundException(`Sem Prato Principal com id: ${id}`)
        }
    }

    async salvaPratoPrincipal(pratoPrincipal: LanchesDTO): Promise<any> {
        return await this.pratoPrincipalRepository.salvaPratoPrincipal(pratoPrincipal)
    }

    async editaPratoPrincipal(id: string, pratoPrincipalAtualizar: LanchesDTO): Promise<any> {
        try {
            const pratoPrincipal = await this.obtemPratoPrincpalId(id)

            if(!pratoPrincipal){
                throw new BadRequestException(`Sem pratoPrincipal com id: ${id}`)
            }
            
            return await this.pratoPrincipalRepository.editaPratoPrincipal(id, pratoPrincipalAtualizar)
        } catch (error) {
            throw new NotFoundException(`Sem pratoPrincipal com id: ${id}`)
        }
    }

    async deletaPratoPrincipal(id: string): Promise<any>{
        try {
            return await this.pratoPrincipalRepository.deletaPratoPrincipal(id)
        } catch (error) {
            throw new NotFoundException(`Sem Prato Principal com id: ${id}`)
        }
    }
}