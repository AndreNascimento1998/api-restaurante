import { Injectable } from "@nestjs/common";
import { LanchesDTO } from "src/DTO/lanche/lanches.dto";

import { LancheRepository } from "src/mongo/Repository/lanche/lanche.repository";


@Injectable()
export class LancheServices {

    constructor(
        private readonly lancheRepository: LancheRepository
    ){}

    async saveLanche(novoLanche: LanchesDTO): Promise<any> {
        return await this.lancheRepository.saveLanche(novoLanche)
    }
}