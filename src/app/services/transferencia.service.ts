import { Transferencia } from './../models/transferencia.model';
import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private url = 'http://localhost:3000/transferencias';

  somatoria: number;

  constructor(
    private httpClient: HttpClient
    ) {this.somatoria = 0}

  getAll(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  getOne(id: number): Observable<Transferencia> {
    return this.httpClient.get<Transferencia>(`${this.url}${id}`);
  }

  registraTransferencia(obj: Transferencia): Observable<Transferencia> {
    this.somaTransferencias(+obj.valor);
    this.build(obj);
    return this.httpClient.post<Transferencia>(this.url, obj);
  }

  private build(transferencia: any) {
    transferencia.data = new Date();
  }

  somaTransferencias(transferencia: any) {
    return this.somatoria += transferencia;
  }

}
