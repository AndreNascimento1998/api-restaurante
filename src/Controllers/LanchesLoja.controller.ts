import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { LanchesDTO } from "src/DTO/lanche/lanches.dto";
import { LancheServices } from "src/Services/lanche.services"; 
import { Lanche } from "src/Interfaces/lanche/lanche.interface";


@Controller('/lanches')
export class LanchesLojaController {
    
    constructor(
        private readonly lancheService: LancheServices
    ){}

    @Get()
    async obtemAlimento(): Promise<LanchesDTO> {
        return await this.lancheService.obtemLanche()
    }

    @Get(':id')
    async obtemAlimentoPorId(@Param('id') id: string): Promise<Lanche> {
        return await this.lancheService.obtemLanchePorId(id)
    }

    @Post()
    async criaAlimento(@Body() alimentos: LanchesDTO): Promise<LanchesDTO> {
        return await this.lancheService.saveLanche(alimentos)
    }

    @Put(':id')
    async atualizaAlimento(@Param('id') id: string, @Body()LancheAtualizar: LanchesDTO) : Promise<Lanche> {
        return await this.lancheService.atualizaLanche(id, LancheAtualizar)
    }

    @Delete(':id')
    async deletaAlimento(@Param('id') id: string): Promise<Lanche> {
        return await this.lancheService.deletaLanche(id)
    }
}