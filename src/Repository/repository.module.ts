import { Module } from "@nestjs/common";
import { BebidaRepository } from "./bebida.repository";
import { ComboRepository } from "./combo.repository";
import { LancheRepository } from "./lanche.repository";
import { PratoFrioRepository } from "./pratoFrio.repository";
import { PratoPrincipalRepository } from "./pratoPrincipal.repository";
import { PromocaoRepository } from "./promocao.repository";
import { MongoModule } from "src/mongo/mongo.module";


const deps = [
    BebidaRepository,
    ComboRepository,
    LancheRepository,
    PratoFrioRepository,
    PratoPrincipalRepository,
    PromocaoRepository
]

@Module({
    imports: [
        MongoModule
    ],
    providers: [...deps],
    exports: [...deps]
})

export class RepositoryModule {}