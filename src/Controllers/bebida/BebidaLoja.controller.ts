import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { LanchesDTO } from "src/DTO/lanche/lanches.dto";
import { BebidaService } from "src/Services/bebida/bebida.service";
import { Lanche } from "src/mongo/Interfaces/lanche/lanche.interface";

@Controller('/bebidas')
export class BebidaLojaController {

    constructor(
        private readonly bebidasService: BebidaService
    ){}

    @Get()
    async obtemBebida(): Promise<Lanche> {
        return await this.bebidasService.obtemBebidas()
    } 

    @Get(':id')
    async obtemBebidaId(@Param('id') id: string ): Promise<Lanche> {
        return await this.bebidasService.obtemBebidaId(id)
    }

    @Post()
    async salvaBebida(@Body() bebida: Lanche) : Promise<Lanche>{
        return await this.bebidasService.salvaBebida(bebida)
    }

    @Put(':id')
    async editaBebida(@Param ('id') id: string, @Body() bebida: LanchesDTO): Promise<Lanche> {
        return await this.bebidasService.editaBebida(id, bebida)
    }

    @Delete(':id')
    async deletaBebida(@Param ('id') id: string): Promise<Lanche> {
        return await this.bebidasService.deletaBebida(id)
    }
} 