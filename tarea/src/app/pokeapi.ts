import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IListadoPokemon } from './interfaces/IListadoPokemon';

@Injectable({
  providedIn: 'root'
})
export class Pokeapi {
  private urlBase = 'https://pokeapi.co/api/v2/'

  constructor ( private cliente: HttpClient) {}

  getPokemons(limite: number = 30) : Observable<IListadoPokemon>{
    const resultado = this.cliente.get<IListadoPokemon>(`${this.urlBase}pokemon?limit=${limite}`)
    return resultado
  }

  getPokemon(url: string){
    
  }
}
