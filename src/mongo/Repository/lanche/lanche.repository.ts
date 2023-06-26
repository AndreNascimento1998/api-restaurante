import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Lanche } from "../../Interfaces/lanche/lanche.interface";
import { LanchesDTO } from "src/DTO/lanche/lanches.dto";

@Injectable()
export class LancheRepository {

    constructor(
        @InjectModel('lanche') private readonly lancheModel: Model<Lanche>
    ){}

    async saveLanche(novoLanche: LanchesDTO) {
        const saveLanche = new this.lancheModel(novoLanche);
        return await saveLanche.save()
    } 
}