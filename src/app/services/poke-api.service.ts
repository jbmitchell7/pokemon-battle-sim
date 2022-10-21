import { Injectable } from '@angular/core';
import { MainClient } from 'pokenode-ts';
import { Pokemon } from '../data/pokemon/types';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  constructor() {}

  api = new MainClient();

  getPokemon = (pokemon: Pokemon) => {
    return pokemon;
  }
}
