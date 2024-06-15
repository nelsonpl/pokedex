import {
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { Pokemon } from '../interfaces/pokemon.interface';
import { PokemonService } from '../services/pokemon.service';
import { CommonModule } from '@angular/common';

export interface DialogData {
  id: number;
}

@Component({
  selector: 'pokemon-detail-dialog',
  templateUrl: 'pokemon-detail-dialog.component.html',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
})
export class PokemonDetailDialog implements OnInit {
  pokemon: Pokemon | undefined;
  readonly dialogRef = inject(MatDialogRef<PokemonDetailDialog>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);

  constructor(private service: PokemonService) {}

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(): void {
    this.service
      .getById(this.data.id)
      .subscribe((pokemon) => (this.pokemon = pokemon));
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
