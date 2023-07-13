import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { LanchesDTO } from "src/DTO/lanche/lanches.dto";
import { PromocaoRepository } from "src/Repository/promocao.repository";

@Injectable()
export class PromocaoService {

    constructor(
        private readonly promocaoRepository: PromocaoRepository
    ){}

    async obtemPromocao(): Promise<any> {
        const promocao = await this.promocaoRepository.obtemPromocao()

        if(!promocao.length){
            throw new BadRequestException('Nenhum Promoção cadastrado')
        }

        return promocao
    }

    async obtemPromocaoId(id: string): Promise<any> {
        try{
            const promocao = await this.promocaoRepository.obtemPromocaoId(id)

            if(!promocao){
                throw new BadRequestException(`Sem Promocao com id: ${id}`)
            }

            return promocao
        }catch(e) {
            throw new NotFoundException(`Sem Promocao com id: ${id}`)
        }
    }

    async salvaPromocao(promocao: LanchesDTO): Promise<any> {
        return await this.promocaoRepository.salvaPromocao(promocao)
    }

    async editaPromocao(id: string, promocaoAtualiza: LanchesDTO): Promise<any> {
        try {
            const promocao = await this.obtemPromocaoId(id)

            if(!promocao){
                throw new BadRequestException(`Sem Promoção com id: ${id}`)
            }
            
            return await this.promocaoRepository.editaPromocao(id, promocaoAtualiza)
        } catch (error) {
            throw new NotFoundException(`Sem Promoção com id: ${id}`)
        }
    }

    async deletaPromocao(id: string): Promise<any> {
        try {
            return await this.promocaoRepository.deletaPromocao(id)
        } catch (error) {
            throw new NotFoundException(`Sem Promoção com id: ${id}`)
        }
    }
}