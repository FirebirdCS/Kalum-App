import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Usuario } from './usuario.model';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-form-user-register',
  templateUrl: './form-user-register.component.html',
  styles: [
  ]
})
export class FormUserRegisterComponent implements OnInit {
  usuario: Usuario = new Usuario();

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
  }

  registrar(): void{
    this.usuario.roles.push('ROLE_USER');
    this.usuarioService.create(this.usuario).subscribe(response => {
      Swal.fire('Registro','Registro creado con éxito', 'success').then(respuesta => {
        if(respuesta.isConfirmed){
          this.router.navigate(['/carreraTecnica']);
        }
      });
    })
  }

}
