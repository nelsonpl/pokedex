import { Controller, Get, Param, Query } from "@nestjs/common";
import { PokemonService } from "./pokemon.service";
import { List } from "../interfaces/list.interface";

@Controller("pokemon")
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  async list(
    @Query("offset") offset: number = 0,
    @Query("limit") limit: number = 20
  ): Promise<List> {
    return this.pokemonService.list(offset, limit);
  }

  @Get(":id")
  async getById(@Param("id") id: number) {
    return this.pokemonService.getById(id);
  }

  @Get("/get-by-name/:name")
  async getByName(@Param("name") name: string) {
    return this.pokemonService.getByName(name);
  }
}
