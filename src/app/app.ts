import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Titolo } from "./components/titolo/titolo";
import { ListaSchede } from "./components/lista-schede/lista-schede";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Titolo, ListaSchede],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('primo-progetto');

  titolo: string = "";

  // operazioni: Transizioni[] = [];
}
