import { Component, Input } from '@angular/core';
import { SchedaContabile } from "../scheda-contabile/scheda-contabile";
import { Transazioni } from '../../models/scheda';


@Component({
  selector: 'app-lista-schede',
  imports: [SchedaContabile],
  templateUrl: './lista-schede.html',
  styleUrl: './lista-schede.css'
})
export class ListaSchede {
  @Input()
  titolo: string = "";

  @Input()
  operazioni: Transazioni[] = [];
}
