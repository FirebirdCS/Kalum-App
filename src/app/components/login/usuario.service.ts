import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from './usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  endPointAuth = environment.baseUrlAuth;

  constructor(private httpClient: HttpClient) { }

  create(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.post<Usuario>(`${this.endPointAuth}/Cuentas/Crear`, usuario);
  }
}
