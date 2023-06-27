import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { LanchesDTO } from "src/DTO/lanche/lanches.dto";
import { ComboService } from "src/Services/combo/combo.service";
import { Lanche } from "src/mongo/Interfaces/lanche/lanche.interface";

@Controller('/combos')
export class ComboController {

    constructor(
        private readonly comboService: ComboService
    ){}

    @Get()
    async obtemCombo(): Promise<Lanche>{
        return await this.comboService.obtemCombo()
    }

    @Get(':id')
    async obtemComboId(@Param ('id') id: string): Promise<Lanche> {
        return await this.comboService.obtemComboId(id)
    }

    @Post()
    async salvaCombo(@Body() combo: LanchesDTO): Promise<LanchesDTO>{
        return await this.comboService.salvaCombo(combo)
    }

    @Put(':id')
    async editaCombo(@Param ('id') id: string, @Body() combo: LanchesDTO): Promise<LanchesDTO> {
        return await this.comboService.editaCombo(id, combo)
    }

    @Delete(':id')
    async deletaCombo(@Param ('id') id: string): Promise<Lanche>{
        return await this.comboService.deletaCombo(id)
    }

}