import { Component, OnInit, inject, model, signal } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon/pokemon.service';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviewExampleDialog } from '../pokemon-detail-modal/pokemon-detail-dialog.component';

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
  readonly dialog = inject(MatDialog);

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

    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: { id },
    });
  }
}
