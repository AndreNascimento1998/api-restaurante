import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { LanchesDTO } from "src/DTO/lanche/lanches.dto";
import { BebidaRepository } from "src/Repository/bebida.repository"; 

@Injectable()
export class BebidaService {

    constructor(
        private readonly bebidaRepository: BebidaRepository
    ){}

    async obtemBebidas(): Promise<any> {
        const bebidas = await this.bebidaRepository.obtemBebida()

        if(!bebidas.length){
            throw new BadRequestException('Nenhuma bebida cadastrada')
        }

        return bebidas
    }

    async obtemBebidaId(id: string): Promise<any> {
        try {
            const bebida = await this.bebidaRepository.obtemBebidaId(id)

            if(!bebida){
                throw new BadRequestException(`Sem bebidas com id: ${id}`)
            }

            return bebida
        } catch (error) {
            throw new NotFoundException(`Sem bebias com id: ${id}`)
        }
    }

    async salvaBebida(bebida: LanchesDTO): Promise<any> {
        return await this.bebidaRepository.salvaBebida(bebida)
    }

    async editaBebida(id: string, bebidaAtualiza: LanchesDTO): Promise<any> {
        try {
            const bebida = await this.bebidaRepository.obtemBebidaId(id)

            if(!bebida){
                throw new BadRequestException(`Sem bebida com id: ${id}`)
            }

            return await this.bebidaRepository.editaBebida(id, bebidaAtualiza)
        } catch (error) {
            throw new NotFoundException(`Sem bebida com id: ${id}`)
        }
    }

    async deletaBebida(id: string): Promise <any> {
        try {
            return await this.bebidaRepository.deletaBebida(id)
        } catch (error) {
            throw new NotFoundException(`Sem bebidas com id: ${id}`)
        }
    }
}