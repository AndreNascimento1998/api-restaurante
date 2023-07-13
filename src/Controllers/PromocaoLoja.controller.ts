import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { LanchesDTO } from "src/DTO/lanche/lanches.dto";
import { PromocaoService } from "src/Services/promocao.service"; 
import { Lanche } from "src/Interfaces/lanche/lanche.interface";

@Controller('/promocao')
export class PromocaoLojaController {

    constructor(
        private readonly promocaoService: PromocaoService
    ){}

    @Get()
    async obtemPromocao(): Promise<Lanche>{
        return await this.promocaoService.obtemPromocao()
    }

    @Get(':id')
    async obtemPromocaoId(@Param ('id') id: string): Promise<Lanche> {
        return await this.promocaoService.obtemPromocaoId(id)
    }

    @Post()
    async salvaPromocao(@Body() promocao: LanchesDTO): Promise<LanchesDTO>{
        return await this.promocaoService.salvaPromocao(promocao)
    }

    @Put(':id')
    async editaPromocao(@Param ('id') id: string, @Body() promocao: LanchesDTO): Promise<LanchesDTO> {
        return await this.promocaoService.editaPromocao(id, promocao)
    }

    @Delete(':id')
    async deletaPromocao(@Param ('id') id: string): Promise<Lanche>{
    return await this.promocaoService.deletaPromocao(id)
    }
}