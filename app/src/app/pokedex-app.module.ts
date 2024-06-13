import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { routes } from './pokedex-app.routes';
import { PokedexAppComponent } from './pokedex-app.component';
import { PokemonService } from './pokemon/pokemon.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [PokemonService],
  declarations: [PokedexAppComponent],
  bootstrap: [PokedexAppComponent],
})
export class PokedexAppModule {}
