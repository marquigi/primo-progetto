import { Component, Input } from '@angular/core';
import { Transazioni } from '../../models/scheda';
import { CurrencyPipe, DatePipe, NgClass, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-scheda-contabile',
  imports: [CurrencyPipe, UpperCasePipe, NgClass, DatePipe],
  templateUrl: './scheda-contabile.html',
  styleUrl: './scheda-contabile.css'
})
export class SchedaContabile {
  @Input()
  operazioni?: Transazioni;
}
