import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExamenAdmisionService {

  endPoint = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  getExamenesAdmision(page: number) : Observable<any>{
    return this.httpClient.get<any[]>(`${this.endPoint}ExamenesAdmision/page/${page}`);
   }
}
