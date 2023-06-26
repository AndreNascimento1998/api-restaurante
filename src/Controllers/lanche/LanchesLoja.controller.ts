import { Body, Controller, Get, Post } from "@nestjs/common";
import { LanchesDTO } from "src/DTO/lanche/lanches.dto";
import { LancheServices } from "src/Services/lanche/lanche.services";


@Controller('/lanches')
export class LanchesLojaController {
    
    constructor(
        private readonly lancheService: LancheServices
    ){}

    @Post()
    async criaAlimento(@Body() alimentos: LanchesDTO): Promise<LanchesDTO> {
        return await this.lancheService.saveLanche(alimentos)
    }
}