import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon/pokemon.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule],
  providers: [],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss',
})
export class PokemonListComponent implements OnInit {
  list: any[] = [];
  offset: number = 0;
  limit: number = 1000;
  showLoadMore: boolean = true;

  constructor(private service: PokemonService, private router: Router) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.service.list(this.offset, this.limit).subscribe((data) => {
      this.list = this.list.concat(data.results);
      this.offset += this.limit;
      this.showLoadMore = this.list.length < data.count;
    });
  }

  onSelect(pokemon: any): void {
    const id = pokemon.url.split('/').filter(Boolean).pop();
    this.router.navigate(['/pokemon', id]);
  }
}
