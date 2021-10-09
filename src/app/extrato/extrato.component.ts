import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  transferencias: any[] = [];

  valorTotalTransferencias: number = 0;
  message?: string;

  constructor(
    private transferenciaService: TransferenciaService
  ) { }

  ngOnInit(): void {
    this.transferenciaService.getAll().subscribe((transferencias: Transferencia[]) => {
      this.transferencias = transferencias;
      for(const element of this.transferencias) {
        this.valorTotalTransferencias += (+element.valor);
      }
    },
    error => {
      this.message = "Não foi possível encontrar os valores."
    });

  }


}
