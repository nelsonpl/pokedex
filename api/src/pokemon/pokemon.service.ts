import { Injectable, NotFoundException } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { firstValueFrom } from "rxjs";
import { List } from "../interfaces/list.interface";
import { AxiosResponse } from "axios";
import { Pokemon } from "src/interfaces/pokemon.interface";

@Injectable()
export class PokemonService {
  private readonly url = "https://pokeapi.co/api/v2/pokemon";

  constructor(private httpService: HttpService) {}

  async list(offset: number = 0, limit: number = 20): Promise<List> {
    const url = `${this.url}?offset=${offset}&limit=${limit}`;
    let response: AxiosResponse<any, any>;

    try {
      response = await firstValueFrom(this.httpService.get(url));
    } catch {
      throw new NotFoundException("Sorry, try again later.");
    }

    const data = response.data;
    const list: List = {
      count: data.count,
      results: data.results.map((item: any) => ({
        name: item.name,
        url: item.url,
      })),
    };
    return list;
  }

  async getById(id: number): Promise<Pokemon> {
    const url = `${this.url}/${id}`;
    let response: AxiosResponse<any, any>;

    try {
      response = await firstValueFrom(this.httpService.get(url));
    } catch {
      throw new NotFoundException("Pokemon not found");
    }

    const data = response.data;
    const pokemon: Pokemon = {
      id: data.id,
      name: data.name,
      base_experience: data.base_experience,
      height: data.height,
      weight: data.weight,
      sprites: {
        front_default: data.sprites.front_default,
      },
    };
    return  pokemon;
  }

  async getByName(name: string): Promise<Pokemon> {
    const url = `${this.url}/${name}`;
    let response: AxiosResponse<any, any>;

    try {
      response = await firstValueFrom(this.httpService.get(url));
    } catch {
      throw new NotFoundException("Pokemon not found");
    }
    
    const data = response.data;
    const pokemon: Pokemon = {
      id: data.id,
      name: data.name,
      base_experience: data.base_experience,
      height: data.height,
      weight: data.weight,
      sprites: {
        front_default: data.sprites.front_default,
      },
    };
    return  pokemon;
  }
}
