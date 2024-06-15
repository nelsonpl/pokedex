import { Component, OnInit, inject, model, signal } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviewExampleDialog } from '../pokemon-detail-dialog/pokemon-detail-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  providers: [],
  templateUrl: './pokemon-list.component.html',
})
export class PokemonListComponent implements OnInit {
  list: any[] = [];
  offset: number = 0;
  limit: number = 20;
  pokemonName: string = '';
  showLoadMore: boolean = true;
  showClear: boolean = false;
  filterForm: FormGroup | undefined = undefined;
  readonly dialog = inject(MatDialog);

  constructor(
    private service: PokemonService,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.filterForm = this._formBuilder.group({
      pokemonName: [''],
    });
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
    this.dialog.open(DialogOverviewExampleDialog, {
      data: { id },
    });
  }

  search(): void {
    this.list = [];
    this.offset = 0;

    if (this.filterForm?.value.pokemonName) {
      this.service
        .getByName(this.filterForm?.value.pokemonName)
        .subscribe((data) => {
          this.list = [data];
          this.showLoadMore = false;
          this.showClear = true;
        });
    } else {
      this.load();
    }
  }
}
