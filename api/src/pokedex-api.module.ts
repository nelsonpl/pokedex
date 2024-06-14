import { Module } from "@nestjs/common";
import { PokemonController } from "./pokemon/pokemon.controller";
import { PokemonService } from "./pokemon/pokemon.service";
import { HttpModule } from "@nestjs/axios";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    HttpModule,
  ],
  controllers: [PokemonController],
  providers: [PokemonService],
})
export class PokedexApiModule {}
