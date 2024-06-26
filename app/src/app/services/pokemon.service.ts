import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon.interface';
import { List } from '../interfaces/list.interface';

@Injectable()
export class PokemonService {
  private apiUrl = 'http://localhost:3000/api/pokemon';

  constructor(private http: HttpClient) {}

  list(offset: number, limit: number): Observable<List> {
    return this.http.get<any>(
      `${this.apiUrl}?offset=${offset}&limit=${limit}`
    );
  }

  getById(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.apiUrl}/${id}`);
  }

  getByName(name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.apiUrl}/get-by-name/${name}`);
  }
}
