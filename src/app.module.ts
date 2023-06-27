import { Module } from '@nestjs/common';
import { LanchesLojaController } from './Controllers/lanche/LanchesLoja.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LancheServices } from './Services/lanche/lanche.services';
import { LancheRepository } from './mongo/Repository/lanche/lanche.repository';
import { LancheSchema } from './mongo/Schema/lanche.schema';
import { BebidaLojaController } from './Controllers/bebida/BebidaLoja.controller';
import { BebidaService } from './Services/bebida/bebida.service';
import { BebidaRepository } from './mongo/Repository/bebida/bebida.repository';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb+srv://andrejoarez428:wYl6HfkkVnI3kByh@restaurante-api.pmpxvgn.mongodb.net/'),

        MongooseModule.forFeature([
            { name: 'lanche', schema: LancheSchema },
            { name: 'bebida', schema: LancheSchema }
        ])
    ],

    controllers: [
        LanchesLojaController, 
        BebidaLojaController
    ],

    providers: [
        LancheServices, 
        LancheRepository,
        BebidaService,
        BebidaRepository,
    ],
})
export class AppModule { }
