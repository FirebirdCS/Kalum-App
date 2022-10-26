import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResultadosEA } from './resultados-ea.model';

@Injectable({
  providedIn: 'root'
})
export class ResultadosEAService {

  endPoint = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  getResultadosEA(page: number): Observable<any>{
    return this.httpClient.get<any[]>(`${this.endPoint}ResultadosExamenAdmision/page/${page}`);
  }

  postResultadosEA(resultado : ResultadosEA) : Observable<ResultadosEA> {
    return this.httpClient.post<ResultadosEA>(`${this.endPoint}ResultadosExamenAdmision/`, resultado);
  }

  putResultadosEA(resultado: ResultadosEA) : Observable<any>{
    return this.httpClient.put<any[]>(`${this.endPoint}ResultadosExamenAdmision/${resultado.noExpediente}`, resultado).pipe(
      catchError(e => {
        return throwError(()=>{
          Error(e);
        });
      })
    );
  }

  getResultadoEA(noExpediente : any) : Observable<ResultadosEA>{
    return this.httpClient.get<ResultadosEA>(`${this.endPoint}ResultadosExamenAdmision/${noExpediente}`).pipe(
      catchError(e => {
        return throwError(()=>{
          Error(e);
        });
      })
    );
  }

  deleteResultadoEA(noExpediente: string) : Observable<ResultadosEA>{
    return this.httpClient.delete<ResultadosEA>(`${this.endPoint}ResultadosExamenAdmision/${noExpediente}`).pipe(
      catchError(e => {
        return throwError(()=>{
          Error(e);
        });
      })
    );
  }


}
