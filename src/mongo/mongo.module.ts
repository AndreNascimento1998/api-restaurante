import { MongooseModule } from "@nestjs/mongoose";
import { LancheSchema } from "./Schema/lanche.schema";
import { Module } from "@nestjs/common";

const deps = [
    MongooseModule.forRoot('mongodb+srv://andrejoarez428:wYl6HfkkVnI3kByh@restaurante-api.pmpxvgn.mongodb.net/restaurante-bff'),

    MongooseModule.forFeature([
        { name: 'lanche', schema: LancheSchema },
        { name: 'bebida', schema: LancheSchema },
        { name: 'combo', schema: LancheSchema },
        { name: 'prato-principal', schema: LancheSchema},
        { name: 'prato-frio', schema:LancheSchema },
        { name: 'promocao', schema: LancheSchema }
    ])
]

@Module({
    imports: [
        ...deps
    ],
    exports: [
        ...deps
    ]
})

export class MongoModule {}