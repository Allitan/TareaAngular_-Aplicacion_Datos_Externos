import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IListadoPokemon } from './interfaces/IListadoPokemon';

@Injectable({
  providedIn: 'root'
})
export class Pokeapi {
  private apiUrl = 'https://pokeapi.co/api/v2/'

  constructor ( private http: HttpClient) {}

  getPokemons(limite: number = 50) : Observable<IListadoPokemon>{
    const resultado = this.http.get<IListadoPokemon>(`${this.apiUrl}pokemon?limit=${limite}`)
    return resultado
  }

  getPokemon(url: string){
    
  }
}
