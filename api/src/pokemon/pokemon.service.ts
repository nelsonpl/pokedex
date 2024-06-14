import { Injectable, NotFoundException } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { firstValueFrom } from "rxjs";
import { List } from "../interfaces/list.interface";

@Injectable()
export class PokemonService {
  private readonly url = "https://pokeapi.co/api/v2/pokemon";

  constructor(private httpService: HttpService) {}

  async list(offset: number = 0, limit: number = 20): Promise<List> {
    const url = `${this.url}?offset=${offset}&limit=${limit}`;
    const { data } = await firstValueFrom(this.httpService.get(url));
    const list: List = {
      count: data.count,
      results: data.results,
    };
    return list;
  }

  async getById(id: number): Promise<any> {
    const url = `${this.url}/${id}`;
    let response;
    try {
      response = await firstValueFrom(this.httpService.get(url));
    } catch {
      throw new NotFoundException("Pokemon not found");
    }
    return response.data;
  }

  async getByName(name: string): Promise<any> {
    const url = `${this.url}/${name}`;
    let response;
    try {
      response = await firstValueFrom(this.httpService.get(url));
    } catch {
      throw new NotFoundException("Pokemon not found");
    }
    return response.data;
  }
}
