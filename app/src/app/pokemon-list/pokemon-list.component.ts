import { Component, OnInit, inject } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialog } from '@angular/material/dialog';
import { PokemonDetailDialog } from '../pokemon-detail-dialog/pokemon-detail-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
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
    private _formBuilder: FormBuilder,
    private _snackBar: MatSnackBar
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
    const id = pokemon.id ?? pokemon.url.split('/').filter(Boolean).pop();
    this.dialog.open(PokemonDetailDialog, {
      data: { id },
    });
  }

  search(): void {
    this.list = [];
    this.offset = 0;

    if (this.filterForm?.value.pokemonName) {
      this.service.getByName(this.filterForm?.value.pokemonName).subscribe({
        next: (data) => {
          this.list = [data];
          this.showLoadMore = false;
          this.showClear = true;
        },
        error: () => {
          this._snackBar.open('Pokemon not found', 'Close', {
            duration: 2000,
          });
        },
      });
    } else {
      this.load();
    }
  }
}
