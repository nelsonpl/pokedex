import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../interfaces/pokemon.interface';
import { PokemonService } from '../pokemon/pokemon.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent implements OnInit {
  pokemon: Pokemon | undefined;

  constructor(private route: ActivatedRoute, private service: PokemonService) {}

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.get(id).subscribe((pokemon) => (this.pokemon = pokemon));
  }
}