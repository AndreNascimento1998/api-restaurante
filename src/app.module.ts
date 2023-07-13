import { Module } from '@nestjs/common';
import { ControllersModule } from './Controllers/controllers.module';
import { ConfigModule } from '@nestjs/config';


@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true
        }),
        ControllersModule,
    ],
})
export class AppModule { }
