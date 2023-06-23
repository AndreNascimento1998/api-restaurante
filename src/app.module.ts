import { Module } from '@nestjs/common';
import { LanchesLojaController } from './Controllers/LanchesLoja.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/lanches')
  ],
  controllers: [LanchesLojaController],
  providers: [],
})
export class AppModule {}
