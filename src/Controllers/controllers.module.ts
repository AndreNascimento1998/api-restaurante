import { Module } from "@nestjs/common";
import { BebidaLojaController } from "./BebidaLoja.controller";
import { ComboController } from "./ComboLoja.controller";
import { LanchesLojaController } from "./LanchesLoja.controller";
import { PratoFrioLojaController } from "./PratoFrioLoja.controllers";
import { PratoPrincipalLoja } from "./PratoPrincipalLoja.controller";
import { PromocaoLojaController } from "./PromocaoLoja.controller";
import { ServiceModule } from "src/Services/service.module";

const deps = [
    BebidaLojaController,
    ComboController,
    LanchesLojaController,
    PratoFrioLojaController,
    PratoPrincipalLoja,
    PromocaoLojaController

]

@Module({
    imports: [
        ServiceModule
    ],
    controllers: [...deps],
    providers: [...deps],
})

export class ControllersModule { }