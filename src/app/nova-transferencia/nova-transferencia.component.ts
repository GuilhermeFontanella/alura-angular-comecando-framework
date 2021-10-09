import { TransferenciaService } from './../services/transferencia.service';
import { Transferencia } from './../models/transferencia.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {
  @Output() aoTransferir = new EventEmitter<any>();

  transferencia!: Transferencia;
  valor: number = 0;
  destino: string = '';

  constructor(
    private transferenciaService: TransferenciaService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  limparCampos() {
    this.valor = 0;
    this.destino = ''
  }

  transferir() {
    const valorEmitir: Transferencia = { valor: +this.valor, destino: this.destino };
    this.transferenciaService.registraTransferencia(valorEmitir)
    .subscribe(resp => {
      console.log(resp);
      this.limparCampos();
      this.router.navigateByUrl('extrato');
    },
    error => alert("Correu um erro ao executar esta ação!"));

  }

}
