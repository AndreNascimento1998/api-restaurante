import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { LanchesDTO } from "src/DTO/lanche/lanches.dto";
import { PratoFrioService } from "src/Services/pratoFrio.service"; 
import { Lanche } from "src/Interfaces/lanche/lanche.interface";

@Controller('/prato-frio')
export class PratoFrioLojaController {

    constructor(
        private readonly pratoFrioService: PratoFrioService
    ){}

    @Get()
    async obtemPratoFrio(): Promise<Lanche>{
        return await this.pratoFrioService.obtemPratoFrio()
    }

    @Get(':id')
    async obtemPratoFrioId(@Param ('id') id: string): Promise<Lanche> {
        return await this.pratoFrioService.obtemPratoFrioId(id)
    }

    @Post()
    async salvaPratofrio(@Body () pratoFrio: LanchesDTO): Promise<LanchesDTO>{
        return await this.pratoFrioService.salvaPratoFrio(pratoFrio)
    }

    @Put(':id')
    async editaPratoFrio(@Param ('id') id: string, @Body() pratoFrio: LanchesDTO): Promise<LanchesDTO> {
        return await this.pratoFrioService.editaPratoFrio(id, pratoFrio)
    }

    @Delete(':id')
        async deletaPratoFrio(@Param ('id') id: string): Promise<Lanche>{
        return await this.pratoFrioService.deletaPratoFrio(id)
    }
}