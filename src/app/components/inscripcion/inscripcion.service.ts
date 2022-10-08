import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {
  endPoint = environment.baseUrl;

  constructor(private httpClient: HttpClient) {

   }
   getInscripciones(page: number) : Observable<any>{
    return this.httpClient.get<any[]>(`${this.endPoint}Inscripciones/page/${page}`);
   }
}
