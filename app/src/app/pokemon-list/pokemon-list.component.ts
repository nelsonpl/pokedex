import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon/pokemon.service';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatList, MatListModule } from '@angular/material/list';
import { MatDivider, MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatCardModule, MatListModule, MatDividerModule],
  providers: [],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss',
})
export class PokemonListComponent implements OnInit {
  list: any[] = [];
  offset: number = 0;
  limit: number = 20;
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
