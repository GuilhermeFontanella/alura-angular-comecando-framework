import { TransferenciaService } from './services/transferencia.service';
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ByteBank';
  valor: number;

  constructor() {this.valor = 0}
}
