import {ChangeDetectionStrategy, Component, OnInit, inject, model, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../interfaces/pokemon.interface';
import { PokemonService } from '../pokemon/pokemon.service';
import { MatCardModule } from '@angular/material/card';
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
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatCardModule
  ],
})
export class DialogOverviewExampleDialog implements OnInit {
  pokemon: Pokemon | undefined;
  readonly dialogRef = inject(MatDialogRef<DialogOverviewExampleDialog>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);

  constructor(private route: ActivatedRoute, private service: PokemonService) {}

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(): void {
    this.service.get(this.data.id).subscribe((pokemon) => (this.pokemon = pokemon));
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
