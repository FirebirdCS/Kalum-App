import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Jornada } from './jornada.model';

@Injectable({
  providedIn: 'root'
})
export class JornadaService {
  endPoint = environment.baseUrl;

  constructor(private httpClient: HttpClient) {

   }
   /**
   * Ruta para la paginación de `Jornadas`
   * @param string page
   */
   getJornadas(page: number) : Observable<any>{
    return this.httpClient.get<any[]>(`${this.endPoint}Jornadas/page/${page}`);
   }
  /**
   * Ruta para guardar una nueva `Jornada`
   * @param string jornada
   */
   postJornada(jornada : Jornada) : Observable<Jornada>{
    return this.httpClient.post<Jornada>(`${this.endPoint}Jornadas/`, jornada);
   }
  /**
   * Ruta para actualizar una Jornada con su Id
   * @param string jornada
   */
   putJornada(jornada : Jornada) : Observable<any>{
    return this.httpClient.put<any[]>(`${this.endPoint}Jornadas/${jornada.jornadaId}`, jornada).pipe(
      catchError(e => {
        return throwError(() => {
          Error(e);
        });
      })
    );
   }
   /**
   * Ruta para obtener una `Jornada` con su id
   * @param string jornadaId
   */
   getJornada(jornadaId : any) : Observable<Jornada> {
    return this.httpClient.get<Jornada>(`${this.endPoint}Jornadas/${jornadaId}`).pipe(
      catchError(e => {
        return throwError(() => {
          Error(e);
        });
      })
    );
   }

   deleteJornada(jornadaId: string) : Observable<Jornada> {
    return this.httpClient.delete<Jornada>(`${this.endPoint}Jornadas/${jornadaId}`).pipe(
      catchError(e => {
        return throwError(() => {
          Error(e);
        });
      })
    );
   }
}
