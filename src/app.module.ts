import { Module } from '@nestjs/common';
import { LanchesLojaController } from './Controllers/lanche/LanchesLoja.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LancheServices } from './Services/lanche/lanche.services';
import { LancheRepository } from './mongo/Repository/lanche/lanche.repository';
import { LancheSchema } from './mongo/Schema/lanche.schema';
import { BebidaLojaController } from './Controllers/bebida/BebidaLoja.controller';
import { BebidaService } from './Services/bebida/bebida.service';
import { BebidaRepository } from './mongo/Repository/bebida/bebida.repository';
import { ComboController } from './Controllers/combos/ComboLoja.controller';
import { ComboService } from './Services/combo/combo.service';
import { ComboRepository } from './mongo/Repository/combo/combo.repository';
import { PratoPrincipalService } from './Services/PratoPrincipal/pratoPrincipal.service';
import { PratoPrincipalLoja } from './Controllers/pratoPrincipal/PratoPrincipalLoja.controller';
import { PratoPrincipalRepository } from './mongo/Repository/pratoPrincipal/pratoPrincipal.repository';
import { PratoFrioLojaController } from './Controllers/pratoFrio/PratoFrioLoja.controllers';
import { PratoFrioRepository } from './mongo/Repository/pratoFrio/pratoFrio.repository';
import { PratoFrioService } from './Services/pratoFrio/pratoFrio.service';
import { PromocaoLojaController } from './Controllers/promocao/PromocaoLoja.controller';
import { PromocaoService } from './Services/promocao/promocao.service';
import { PromocaoRepository } from './mongo/Repository/promocao/promocao.repository';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb+srv://andrejoarez428:wYl6HfkkVnI3kByh@restaurante-api.pmpxvgn.mongodb.net/'),

        MongooseModule.forFeature([
            { name: 'lanche', schema: LancheSchema },
            { name: 'bebida', schema: LancheSchema },
            { name: 'combo', schema: LancheSchema },
            { name: 'prato-principal', schema: LancheSchema},
            { name: 'prato-frio', schema:LancheSchema },
            { name: 'promocao', schema: LancheSchema }
        ])
    ],

    controllers: [
        LanchesLojaController, 
        BebidaLojaController,
        ComboController,
        PratoPrincipalLoja,
        PratoFrioLojaController,
        PromocaoLojaController
    ],

    providers: [
        LancheServices, 
        LancheRepository,
        BebidaService,
        BebidaRepository,
        ComboService,
        ComboRepository,
        PratoPrincipalService,
        PratoPrincipalRepository,
        PratoFrioRepository,
        PratoFrioService,
        PromocaoService,
        PromocaoRepository
    ],
})
export class AppModule { }
