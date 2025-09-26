import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pokemon } from './pokemon/pokemon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Pokemon],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('tarea');
}
