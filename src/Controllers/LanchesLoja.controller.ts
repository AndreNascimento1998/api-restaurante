import { Body, Controller, Get, Post } from "@nestjs/common";
import { LanchesRepository } from "../Lanches.repository";
import { LanchesDTO } from "src/DTO/lanches.dto";

@Controller('/lanches')
export class LanchesLojaController {
    
    private lanchesRepository = new LanchesRepository()

    @Post()
    criaAlimento(@Body() alimentos: LanchesDTO): void {
        this.lanchesRepository.save(alimentos)
    }

    @Get()
    getAlimentos()  {
        return this.lanchesRepository.fetch()
    }
}