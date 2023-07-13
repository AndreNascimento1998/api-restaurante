import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { LanchesDTO } from "src/DTO/lanche/lanches.dto";
import { PratoPrincipalService } from "src/Services/pratoPrincipal.service"; 
import { Lanche } from "src/Interfaces/lanche/lanche.interface";

@Controller('/prato-principal')
export class PratoPrincipalLoja {

    constructor(
        private readonly pratoPrincipalService: PratoPrincipalService
    ){}

    @Get()
    async obtemPratoPrincpal(): Promise<Lanche>{
        return await this.pratoPrincipalService.obtemPratoPrincipal()
    }

    @Get(':id')
    async obtemPratoPrincpalId(@Param ('id') id: string): Promise<Lanche> {
        return await this.pratoPrincipalService.obtemPratoPrincpalId(id)
    }

    @Post()
    async salvaPratoPrincipal(@Body() pratoPrincipal: LanchesDTO): Promise<LanchesDTO> {
        return await this.pratoPrincipalService.salvaPratoPrincipal(pratoPrincipal)
    }

    @Put(':id')
    async editaPratoPrincipal(@Param('id') id: string, @Body() pratoPrincipal: LanchesDTO): Promise<LanchesDTO>{
        return await this.pratoPrincipalService.editaPratoPrincipal(id, pratoPrincipal)
    }

    @Delete(':id')
    async deletaPratoPrincipal(@Param('id') id: string): Promise<Lanche>{
        return await this.pratoPrincipalService.deletaPratoPrincipal(id)
    }
}