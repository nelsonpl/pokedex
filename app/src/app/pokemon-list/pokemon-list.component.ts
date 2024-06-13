import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon/pokemon.service';
import { CommonModule } from '@angular/common';
import {
  provideHttpClient,
  withInterceptorsFromDi,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: PokemonService,
      multi: true,
    },
  ],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss',
})
export class PokemonListComponent implements OnInit {
  list: any[] = [];
  offset: number = 0;
  limit: number = 20;

  constructor(private service: PokemonService, private router: Router) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.service.list(this.offset, this.limit).subscribe((data) => {
      this.list = this.list.concat(data.results);
      this.offset += this.limit;
    });
  }

  onSelect(pokemon: any): void {
    const id = pokemon.url.split('/').filter(Boolean).pop();
    this.router.navigate(['/pokemon', id]);
  }
}
