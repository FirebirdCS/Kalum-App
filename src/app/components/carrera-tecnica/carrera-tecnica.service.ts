import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import { CarreraTecnica } from './carrera-tecnica.model';

@Injectable({
  providedIn: 'root'
})
export class CarreraTecnicaService {

  endPoint = environment.baseUrl;

  constructor(private httpClient: HttpClient) {

   }

   getCarrerasTecnicas(page: number) : Observable<any>{
    return this.httpClient.get<any[]>(`${this.endPoint}CarrerasTecnicas/page/${page}`);
   }

   postCarreraTecnica(carreraTecnica : CarreraTecnica) : Observable<CarreraTecnica>{
    return this.httpClient.post<CarreraTecnica>(`${this.endPoint}CarrerasTecnicas/`, carreraTecnica);
   }

   putCarreraTecnica(carreraTecnica : CarreraTecnica) : Observable<any>{
    return this.httpClient.put<any[]>(`${this.endPoint}CarrerasTecnicas/${carreraTecnica.carreraId}`, carreraTecnica).pipe(
      catchError(e => {
        return throwError(() => {
          Error(e);
        });
      })
    );
   }

   getCarreraTecnica(carreraId : string) : Observable<CarreraTecnica> {
    return this.httpClient.get<CarreraTecnica>(`${this.endPoint}CarrerasTecnicas/${carreraId}`).pipe(
      catchError(e => {
        return throwError(() => {
          Error(e);
        });
      })
    );
   }

   deleteCarreraTecnica(carreraId: string) : Observable<CarreraTecnica> {
    return this.httpClient.delete<CarreraTecnica>(`${this.endPoint}CarrerasTecnicas/${carreraId}`).pipe(
      catchError(e => {
        return throwError(() => {
          Error(e);
        });
      })
    );
   }

   getListCarrerasTecnicas() : Observable<any> {
    return this.httpClient.get<any[]>(`${this.endPoint}CarrerasTecnicas/`);
  }
}
