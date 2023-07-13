import { Module } from "@nestjs/common";
import { BebidaService } from "./bebida.service";
import { PromocaoService } from "./promocao.service";
import { ComboService } from "./combo.service";
import { LancheServices } from "./lanche.services";
import { PratoFrioService } from "./pratoFrio.service";
import { PratoPrincipalService } from "./pratoPrincipal.service";
import { RepositoryModule } from "src/Repository/repository.module";


const deps = [
    BebidaService,
    PromocaoService,
    ComboService,
    LancheServices,
    PratoFrioService,
    PratoPrincipalService
]

@Module({
    imports: [
        RepositoryModule
    ],

    providers: [...deps],
    exports: [...deps]
})

export class ServiceModule{}