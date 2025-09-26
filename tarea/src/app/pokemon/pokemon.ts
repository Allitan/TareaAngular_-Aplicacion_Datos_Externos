import { Component, OnInit } from '@angular/core';
import { Pokeapi } from '../pokeapi';
import { IListadoPokemon } from '../interfaces/IListadoPokemon';
import { IPokemon } from '../interfaces/IPokemon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon.html',
  styleUrls: ['./pokemon.css']
})
export class Pokemon implements OnInit {
  listadoPokemons : IPokemon[] = [];

  constructor (
    private pokemonService: Pokeapi
  ) {}

  ngOnInit(): void {
    console.log('Pokemon component cargando')
    this.cargarPokemon();
  }

  cargarPokemon(): void {
    this.pokemonService.getPokemons().subscribe({
      next: (respuesta) => {
        console.log('Pokemons recibidos', respuesta.results);
        this.listadoPokemons = respuesta.results;
      },
      error: (err) => console.error('Error al cargar Pokemons', err)
    });
  }
}
