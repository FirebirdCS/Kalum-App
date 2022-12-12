import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ExamenAdmision } from './examen-admision.model';

@Injectable({
  providedIn: 'root'
})
export class ExamenAdmisionService {

  endPoint = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  getExamenesAdmision(page: number) : Observable<any>{
    return this.httpClient.get<any[]>(`${this.endPoint}ExamenesAdmision/page/${page}`);
   }

  postExamenAdmision(examenAdmision: ExamenAdmision) : Observable<ExamenAdmision>{
    return this.httpClient.post<ExamenAdmision>(`${this.endPoint}ExamenesAdmision/`, examenAdmision);
  }

  getExamenAdmision(examenId: string) : Observable<ExamenAdmision>{
    return this.httpClient.get<ExamenAdmision>(`${this.endPoint}ExamenesAdmision/${examenId}`).pipe(
      catchError(e => {
        return throwError(() => {
          Error(e);
        });
      })
    );
  }

  putExamenAdmision(examenAdmision: ExamenAdmision) : Observable<any>{
    return this.httpClient.put<any[]>(`${this.endPoint}ExamenesAdmision/${examenAdmision.examenId}`, examenAdmision).pipe(
      catchError(e => {
        return throwError(() => {
          Error(e);
        });
      })
    );
  }

  deleteExamenAdmision(examenId: string) : Observable<ExamenAdmision> {
    return this.httpClient.delete<ExamenAdmision>(`${this.endPoint}ExamenesAdmision/${examenId}`).pipe(
      catchError(e => {
        return throwError(() => {
          Error(e);
        });
      })
    );
   }

}

