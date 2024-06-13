import { Controller, Get, Param, Query } from "@nestjs/common";
import { PokemonService } from "./pokemon.service";
import { List } from "../interfaces/list.interface";

@Controller("pokemon")
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  async getPokemons(
    @Query("offset") offset: number = 0,
    @Query("limit") limit: number = 20
  ): Promise<List> {
    return this.pokemonService.list(offset, limit);
  }


  @Get(":filter")
  async searchPokemon(@Param("filter") filter: string) {
    return this.pokemonService.get(filter);
  }
}
