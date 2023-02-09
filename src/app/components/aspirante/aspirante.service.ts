import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Aspirante } from './aspirante.model';

@Injectable({
  providedIn: 'root'
})
export class AspiranteService {

  endPoint = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  getAspirantes(page: number) : Observable<any>{
    return this.httpClient.get<any[]>(`${this.endPoint}Aspirantes/page/${page}`);
  }
  postAspirantes(aspirante: Aspirante) : Observable<any>{
    return this.httpClient.post<Aspirante>(`${this.endPoint}Aspirantes/`, aspirante);
  }
}
