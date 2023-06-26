import { Module } from '@nestjs/common';
import { LanchesLojaController } from './Controllers/lanche/LanchesLoja.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LancheServices } from './Services/lanche/lanche.services';
import { LancheRepository } from './mongo/Repository/lanche/lanche.repository';
import { LancheSchema } from './mongo/Schema/lanche/lanche.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://andrejoarez428:wYl6HfkkVnI3kByh@restaurante-api.pmpxvgn.mongodb.net/'),

    MongooseModule.forFeature([
      { name: 'lanche', schema: LancheSchema }
    ])
  ],
  controllers: [LanchesLojaController],
  providers: [ LancheServices, LancheRepository ],
})
export class AppModule {}
