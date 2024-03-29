import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponsePokemon } from './response-pokemon.model';
import { Pokemon } from './pokemon.model';
import { PokemonDetails } from './pokemon-details.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  endPoint = 'https://pokeapi.co/api/v2/pokemon/';
  responsePokemon = new ResponsePokemon();
  pokemons: PokemonDetails[] = [];

  constructor(private httpClient: HttpClient) { }

  getPokemonList(){
    this.httpClient.get(this.endPoint).subscribe(response => {
      this.responsePokemon = (response as ResponsePokemon);
      this.responsePokemon.results.forEach(elemento => {
       let pokemon = (elemento as Pokemon);
       this.httpClient.get(pokemon.url).subscribe(details => {
         this.pokemons.push((details as PokemonDetails));
       })
      })
    });
    return this.pokemons
  }
}
